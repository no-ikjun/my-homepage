import { profile } from "@/data/profile";
import { dictionary } from "@/lib/dictionary";
import { localePath } from "@/lib/locale";
import { writingOgImageUrl } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";
import type { WritingMeta } from "@/types/writing";

/** Stable node id so posts can point at the one Person entity in the shell. */
export const PERSON_ID = `${SITE_URL}/#person`;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Ikjun Choi (최익준)",
  alternateName: ["Ikjun Choi", "최익준"],
  jobTitle: "Undergraduate Researcher & Software Engineer",
  affiliation: { "@type": "CollegeOrUniversity", name: "Gwangju Institute of Science and Technology" },
  url: SITE_URL,
  image: `${SITE_URL}${profile.avatar}`,
  knowsLanguage: ["en", "ko"],
  sameAs: profile.links.filter((l) => l.href.startsWith("http")).map((l) => l.href),
};

/** Names the site for search results ("Ikjun Choi" above the title link). */
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Ikjun Choi",
  alternateName: ["최익준", "ikjun.com"],
  url: SITE_URL,
  inLanguage: ["en", "ko"],
  publisher: { "@id": PERSON_ID },
};

const abs = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

/** BlogPosting for a writing page; the URL is that of the post's original language. */
export function blogPostingJsonLd(meta: WritingMeta) {
  const url = abs(localePath(meta.lang, `/writings/${meta.slug}`));
  const datePublished = /^\d{4}-\d{2}-\d{2}/.test(meta.date) ? `${meta.date}T00:00:00+09:00` : undefined;
  const section = dictionary[meta.lang].pages.writings.categories[meta.category ?? "notes"];
  const image = meta.cover && !meta.cover.endsWith(".svg") ? abs(meta.cover) : writingOgImageUrl(meta);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#post`,
    mainEntityOfPage: url,
    url,
    headline: meta.title,
    description: meta.summary || undefined,
    inLanguage: meta.lang,
    datePublished,
    dateModified: datePublished,
    articleSection: section,
    keywords: meta.tags?.length ? meta.tags : undefined,
    image: [image],
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    isPartOf: { "@type": "Blog", "@id": `${SITE_URL}/writings#blog`, name: "Writings — Ikjun Choi" },
  };
}
