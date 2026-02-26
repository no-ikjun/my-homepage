"use client";

import { useTranslations } from "@/contexts/language-context";
import { useTheme } from "@/contexts/theme-context";
import styles from "./theme_toggle.module.css";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" fill="currentColor" opacity="0.95" />
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 2.5v2.5" />
        <path d="M12 19v2.5" />
        <path d="M2.5 12H5" />
        <path d="M19 12h2.5" />
        <path d="M5.3 5.3l1.8 1.8" />
        <path d="M16.9 16.9l1.8 1.8" />
        <path d="M18.7 5.3l-1.8 1.8" />
        <path d="M7.1 16.9l-1.8 1.8" />
      </g>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M20.5 14.2A8.9 8.9 0 0 1 9.8 3.5a9.3 9.3 0 1 0 10.7 10.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      className={`${styles.button} ${isLight ? styles.isLight : ""}`}
      aria-label={t.themeToggleLabel}
      onClick={toggleTheme}
      title={t.themeToggleLabel}
    >
      <span className={styles.iconWrap}>
        <span className={styles.sun}>
          <SunIcon />
        </span>
        <span className={styles.moon}>
          <MoonIcon />
        </span>
      </span>
    </button>
  );
}
