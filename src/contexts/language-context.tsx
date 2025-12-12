"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DEFAULT_LANGUAGE, type Language } from "@/types/language";
import { translations } from "@/lib/translations";

type LanguageContextValue = {
  lang: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "preferredLanguage";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ko" || stored === "en") {
      setLang(stored);
      document.documentElement.lang = stored;
      return;
    }

    const browserLang = navigator.language.startsWith("ko") ? "ko" : "en";
    setLang(browserLang);
    document.documentElement.lang = browserLang;
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLanguage = useCallback((next: Language) => {
    setLang(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(lang === "ko" ? "en" : "ko");
  }, [lang, setLanguage]);

  const value = useMemo(
    () => ({
      lang,
      setLanguage,
      toggleLanguage,
    }),
    [lang, setLanguage, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function useTranslations() {
  const { lang } = useLanguage();
  return translations[lang];
}
