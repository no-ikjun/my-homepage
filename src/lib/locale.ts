export const LOCALES = ["en", "ko"] as const;

export type Locale = (typeof LOCALES)[number];

/** English is served unprefixed at the site root; Korean lives under /ko. */
export const DEFAULT_LOCALE: Locale = "en";

export const HTML_LANG: Record<Locale, string> = {
  en: "en",
  ko: "ko",
};

export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  ko: "ko_KR",
};

/**
 * Map a locale-neutral path ("/", "/about") to its URL in `locale`.
 * localePath("en", "/about") -> "/about"
 * localePath("ko", "/about") -> "/ko/about"
 */
export function localePath(locale: Locale, path: string): string {
  const suffix = path === "/" ? "" : path;
  if (locale === DEFAULT_LOCALE) return suffix || "/";
  return `/ko${suffix}` || "/ko";
}

/** Inverse of localePath: strip the locale prefix off a real pathname. */
export function neutralPath(pathname: string): string {
  if (pathname === "/ko") return "/";
  if (pathname.startsWith("/ko/")) return pathname.slice(3);
  return pathname;
}

export function localeFromPathname(pathname: string): Locale {
  return pathname === "/ko" || pathname.startsWith("/ko/") ? "ko" : "en";
}
