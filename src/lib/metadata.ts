import type { Metadata } from "next";
import { SITE_URL } from "./site";

const NAME_SUFFIX = "Ikjun Choi (최익준)";
const OG_IMAGE = {
  url: `${SITE_URL}/img/profile_round3.png`,
  alt: "최익준 Ikjun Choi",
};

/**
 * Build metadata for a single page.
 *
 * Next.js merges metadata shallowly, so anything a page does not restate is
 * inherited from the root layout. Leaving `alternates` and `openGraph` to be
 * inherited is what made every route declare the home page as its canonical
 * URL - use this helper on every page so each one is self-referential.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${NAME_SUFFIX}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Ikjun Choi Portfolio",
      locale: "ko_KR",
      alternateLocale: ["en_US"],
      title: fullTitle,
      description,
      url: path,
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
