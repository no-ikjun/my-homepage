import { type Locale } from "@/lib/locale";

/** Dates in content are "YYYY-MM" or "YYYY-MM-DD". */
const MONTHS_EN = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export function formatMonth(date: string, locale: Locale): string {
  const [y, m] = date.split("-");
  if (!m) return y;
  const month = Number(m);
  return locale === "ko" ? `${y}.${m}` : `${MONTHS_EN[month - 1]} ${y}`;
}

/**
 * "2026-01" + undefined  -> "Jan 2026 – Present" / "2026.01 – 현재"
 * "2026-01" + "2026-03"  -> "Jan – Mar 2026"     / "2026.01 – 2026.03"
 * "2026-06" + "2026-06"  -> "Jun 2026"           / "2026.06"
 */
export function formatPeriod(
  start: string,
  end: string | undefined,
  locale: Locale,
): string {
  const dash = " – ";
  if (!end) {
    return formatMonth(start, locale) + dash + (locale === "ko" ? "현재" : "Present");
  }
  if (start === end) return formatMonth(start, locale);
  if (locale === "en" && start.slice(0, 4) === end.slice(0, 4)) {
    const [, sm] = start.split("-");
    return `${MONTHS_EN[Number(sm) - 1]}${dash}${formatMonth(end, locale)}`;
  }
  return formatMonth(start, locale) + dash + formatMonth(end, locale);
}

export function formatDate(date: string, locale: Locale): string {
  const d = new Date(`${date}T00:00:00+09:00`);
  return new Intl.DateTimeFormat(locale === "ko" ? "ko-KR" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(d);
}
