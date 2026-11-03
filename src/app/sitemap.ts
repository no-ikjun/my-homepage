import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getWritings } from "@/lib/content/writings";
import { getProjects } from "@/lib/content/projects";
import { localePath, LOCALES, type Locale } from "@/lib/locale";
import type { WritingMeta } from "@/types/writing";

/** Locale-neutral paths that exist in both en and ko, with their priority. */
const PAGES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.85, changeFrequency: "monthly" },
  { path: "/writings", priority: 0.85, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.65, changeFrequency: "yearly" },
];

const postModified = (w: WritingMeta) => w.updated ?? w.date;
const asDate = (day: string) => new Date(`${day}T00:00:00+09:00`);

const abs = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Posts per locale, keeping only the files actually written in that
  // language: an untranslated post is listed once, at its original URL (the
  // other locale's URL declares that one canonical).
  const posts = (await Promise.all(LOCALES.map((l) => getWritings(l))))
    .flat()
    .filter((w, i, all) => all.findIndex((x) => x.slug === w.slug && x.lang === w.lang) === i);
  const writtenIn = (locale: Locale) => posts.filter((w) => w.lang === locale);

  // No lastModified on pages and projects: a build timestamp would mark every
  // URL changed on every deploy, which is noise to crawlers. The writing index
  // changes when a post does, so it carries the newest post's date.
  const newestPost = (locale: Locale) => writtenIn(locale).map(postModified).sort().at(-1);
  const localizedEntries: MetadataRoute.Sitemap = PAGES.flatMap((page) =>
    LOCALES.map((locale) => {
      const latest = page.path === "/writings" ? newestPost(locale) : undefined;
      return {
        url: abs(localePath(locale, page.path)),
        ...(latest ? { lastModified: asDate(latest) } : {}),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        // Tell search engines these two URLs are translations of each other.
        alternates: {
          languages: {
            en: abs(localePath("en", page.path)),
            ko: abs(localePath("ko", page.path)),
          },
        },
      };
    })
  );

  // lastmod is the last real edit, not the original publication date: posts
  // first published elsewhere years ago were added here recently.
  const writingEntries: MetadataRoute.Sitemap = posts.map((w) => ({
    url: abs(localePath(w.lang, `/writings/${w.slug}`)),
    lastModified: asDate(postModified(w)),
    changeFrequency: "monthly" as const,
    priority: 0.75,
    ...(w.available.length > 1
      ? {
          alternates: {
            languages: Object.fromEntries(
              w.available.map((l) => [l, abs(localePath(l, `/writings/${w.slug}`))]),
            ),
          },
        }
      : {}),
  }));

  // Projects exist in both locales at mirrored URLs.
  const projects = await getProjects("en");
  const projectEntries: MetadataRoute.Sitemap = projects.flatMap((p) =>
    LOCALES.map((locale) => ({
      url: abs(localePath(locale, `/projects/${p.slug}`)),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: abs(localePath("en", `/projects/${p.slug}`)),
          ko: abs(localePath("ko", `/projects/${p.slug}`)),
        },
      },
    }))
  );

  return [...localizedEntries, ...projectEntries, ...writingEntries];
}
