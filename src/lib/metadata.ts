import type { Metadata, Viewport } from "next";
import { SITE_URL } from "./site";
import { localePath, OG_LOCALE, type Locale } from "./locale";

const NAME_SUFFIX = "Ikjun Choi (최익준)";
const SITE_NAME = "Ikjun Choi Portfolio";
const OG_IMAGE = {
  url: `${SITE_URL}/img/profile_round3.png`,
  alt: "Ikjun Choi 최익준",
};

/**
 * Every page must build its metadata through this helper.
 *
 * Next.js merges metadata shallowly, so anything a page does not restate is
 * inherited from its root layout. Letting `alternates` be inherited is what
 * previously made every route declare the home page as its canonical URL.
 *
 * `path` is the locale-neutral path ("/", "/about"); the canonical and the
 * en/ko hreflang pair are derived from it.
 */
export function pageMetadata({
  locale,
  title,
  description,
  path,
}: {
  locale: Locale;
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${NAME_SUFFIX}` : NAME_SUFFIX;
  const canonical = localePath(locale, path);

  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical,
      languages: {
        en: localePath("en", path),
        ko: localePath("ko", path),
        "x-default": localePath("en", path),
      },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: OG_LOCALE[locale],
      alternateLocale: [OG_LOCALE[locale === "en" ? "ko" : "en"]],
      title: fullTitle,
      description,
      url: canonical,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

/**
 * Shared by both root layouts.
 *
 * `viewportFit: "cover"` is what makes env(safe-area-inset-*) resolve to
 * anything other than 0px, which the layout tokens in globals.css depend on.
 *
 * The theme colours mirror --bg-grouped. They key off prefers-color-scheme
 * rather than the stored preference, since <meta> cannot follow the runtime
 * data-theme attribute.
 */
export const rootViewport: Viewport = {
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f2f7" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

/** Metadata shared by both root layouts (title template, keywords, icons...). */
export function rootMetadata(locale: Locale): Metadata {
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
    icons: { icon: "/img/profile_round3.png" },
    robots: { index: true, follow: true },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    other: { "og:locale": OG_LOCALE[locale] },
  };
}
