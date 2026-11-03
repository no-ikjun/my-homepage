import { getWritings } from "@/lib/content/writings";
import { dictionary } from "@/lib/dictionary";
import { localePath, type Locale } from "@/lib/locale";
import { SITE_URL } from "@/lib/site";

/**
 * RSS 2.0 feed of the writing list as seen from `locale`, served at
 * /feed.xml and /ko/feed.xml. An untranslated post appears in both feeds but
 * links to its original-language URL, the one its canonical names.
 */

export const FEED_PATH = "/feed.xml";

const FEED_TITLE: Record<Locale, string> = {
  en: "Ikjun Choi — Writing",
  ko: "최익준 — 글",
};

export const feedTitle = (locale: Locale) => FEED_TITLE[locale];

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

/** Content dates are "YYYY-MM-DD" in Korean time. */
const rfc822 = (day: string) => new Date(`${day}T00:00:00+09:00`).toUTCString();

export async function buildFeed(locale: Locale): Promise<string> {
  const t = dictionary[locale].pages.writings;
  const posts = await getWritings(locale);
  const self = `${SITE_URL}${localePath(locale, FEED_PATH)}`;
  const home = `${SITE_URL}${localePath(locale, "/writings")}`;
  const lastBuild = posts.map((p) => p.updated ?? p.date).sort().at(-1);

  const items = posts
    .map((p) => {
      const url = `${SITE_URL}${localePath(p.lang, `/writings/${p.slug}`)}`;
      const categories = [t.categories[p.category ?? "notes"], ...(p.tags ?? [])]
        .map((c) => `      <category>${esc(c)}</category>`)
        .join("\n");
      return [
        "    <item>",
        `      <title>${esc(p.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <pubDate>${rfc822(p.date)}</pubDate>`,
        p.summary ? `      <description>${esc(p.summary)}</description>` : "",
        categories,
        "    </item>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(FEED_TITLE[locale])}</title>
    <link>${home}</link>
    <description>${esc(t.description)}</description>
    <language>${locale}</language>
${lastBuild ? `    <lastBuildDate>${rfc822(lastBuild)}</lastBuildDate>\n` : ""}    <atom:link href="${self}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;
}

export function feedResponse(xml: string) {
  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
