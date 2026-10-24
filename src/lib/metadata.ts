import type { Metadata } from "next";
import { SITE_URL } from "./site";
import { dictionary } from "./dictionary";
import { formatDate } from "./format";
import { LOCALES, localePath, OG_LOCALE, type Locale } from "./locale";
import type { WritingMeta } from "@/types/writing";

const NAME_SUFFIX = "Ikjun Choi (최익준)";
// What Google shows above the title link; WebSite JSON-LD in site-shell says the same.
export const SITE_NAME = "Ikjun Choi";

export const OG_IMAGE_SIZE = { width: 1200, height: 630 } as const;

/**
 * URL of a social card rendered by src/app/og/route.tsx: a title over the
 * site's name and avatar. Without a title it is the site-wide default card.
 */
export function ogImageUrl(
  opts: { title?: string; eyebrow?: string; description?: string; locale?: Locale } = {},
): string {
  const params = new URLSearchParams();
  if (opts.title) params.set("t", opts.title);
  if (opts.eyebrow) params.set("s", opts.eyebrow);
  if (opts.description) params.set("d", opts.description);
  if (opts.locale && opts.locale !== "en") params.set("l", opts.locale);
  const query = params.toString();
  return `${SITE_URL}/og${query ? `?${query}` : ""}`;
}

/** Card for a post: its title over "<category> · <date>" in the post's own language. */
export function writingOgImageUrl(meta: WritingMeta): string {
  const category = dictionary[meta.lang].pages.writings.categories[meta.category ?? "notes"];
  return ogImageUrl({
    title: meta.title,
    eyebrow: `${category} · ${formatDate(meta.date, meta.lang)}`,
    description: meta.summary,
    locale: meta.lang,
  });
}

/**
 * Every page must build its metadata through this helper.
 *
 * Next.js merges metadata shallowly, so anything a page does not restate is
 * inherited from its root layout. Letting `alternates` be inherited is what
 * previously made every route declare the home page as its canonical URL.
 *
 * `path` is the locale-neutral path ("/", "/about"); the canonical and the
 * hreflang set are derived from it. A page that is served under both locales
 * but only exists in one language (an untranslated post) passes
 * `canonicalLocale` so both URLs point at the one real version, and `locales`
 * so hreflang only lists genuine translations.
 */
export function pageMetadata({
  locale,
  title,
  description,
  path,
  canonicalLocale = locale,
  locales = LOCALES,
  image,
  absoluteTitle,
}: {
  locale: Locale;
  title?: string;
  /** The whole <title>, skipping the "| Ikjun Choi" template (the home page). */
  absoluteTitle?: string;
  description: string;
  path: string;
  canonicalLocale?: Locale;
  locales?: readonly Locale[];
  /** Absolute URL of the social card; defaults to a generated card with the title. */
  image?: { url: string; alt?: string; width?: number; height?: number };
}): Metadata {
  const fullTitle = absoluteTitle ?? (title ? `${title} | ${NAME_SUFFIX}` : NAME_SUFFIX);
  const canonical = localePath(canonicalLocale, path);
  const languages = Object.fromEntries(locales.map((l) => [l, localePath(l, path)]));
  const ogImage = image ?? {
    url: ogImageUrl({ title, description: title ? description : undefined, locale }),
    alt: fullTitle,
    ...OG_IMAGE_SIZE,
  };

  return {
    ...(absoluteTitle ? { title: { absolute: absoluteTitle } } : title ? { title } : {}),
    description,
    alternates: {
      canonical,
      languages: { ...languages, "x-default": canonical },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: OG_LOCALE[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
      title: fullTitle,
      description,
      url: canonical,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}

/** Metadata shared by both root layouts (title template, keywords, verification...). */
export function rootMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: NAME_SUFFIX,
      template: `%s | ${NAME_SUFFIX}`,
    },
    keywords: [
      "Ikjun Choi",
      "최익준",
      "Product Engineer",
      "Full-stack developer",
      "Portfolio",
      "AI research",
      "생성형 AI",
      "인공지능 연구",
      "소프트웨어 개발자",
      "풀스택 개발자",
      "React",
      "Next.js",
    ],
    // Icons come from the file conventions in src/app (icon.png, apple-icon.png,
    // favicon.ico) and the manifest from src/app/manifest.ts.
    robots: { index: true, follow: true },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  };
}
