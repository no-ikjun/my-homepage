"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const STORAGE_KEY = "preferredTheme";

/** Slightly longer than the cross-fade in globals.css, so nothing snaps. */
const CROSS_FADE_MS = 320;

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Start from the same value the server rendered with. Reading the real theme
  // here instead would make the first client render disagree with the server
  // markup, and React does not patch up attribute mismatches during hydration -
  // the toggle icon would stay stuck on the server value. The effect below
  // corrects the state right after mount, which does re-render.
  const [theme, setThemeState] = useState<Theme>("light");
  const crossFadeTimer = useRef<number | undefined>(undefined);

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const initialTheme = stored === "light" || stored === "dark" ? stored : getSystemTheme();
    setThemeState(initialTheme);
    applyTheme(initialTheme);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  const setTheme = useCallback((nextTheme: Theme) => {
    setThemeState(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);

    // Ease the full-screen brightness jump. The attribute switches on the
    // colour transitions in globals.css, and only for as long as the fade
    // lasts - the rest of the time nothing pays for them. It is deliberately
    // not set by the effect above: the theme applied on load has nothing to
    // fade from, and fading it would just look like a slow paint.
    const root = document.documentElement;
    root.dataset.themeChanging = "";
    window.clearTimeout(crossFadeTimer.current);
    crossFadeTimer.current = window.setTimeout(() => {
      delete root.dataset.themeChanging;
    }, CROSS_FADE_MS);

    applyTheme(nextTheme);
  }, []);

  useEffect(() => () => window.clearTimeout(crossFadeTimer.current), []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

export type { Theme };
