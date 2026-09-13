import { type Locale } from "@/lib/locale";

/**
 * A value that differs per locale. Structured data keeps shared fields
 * (dates, URLs, logos) single-sourced and localises only the copy.
 */
export type Localized<T> = Record<Locale, T>;

export function pick<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}
