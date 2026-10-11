import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getWritings } from "@/lib/content/writings";
import { getProjects } from "@/lib/content/projects";
import { localePath, LOCALES } from "@/lib/locale";

/** Locale-neutral paths that exist in both en and ko, with their priority. */
const PAGES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.85, changeFrequency: "monthly" },
  { path: "/writings", priority: 0.85, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.65, changeFrequency: "yearly" },
];

const abs = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // No lastModified on pages and projects: a build timestamp would mark every
  // URL changed on every deploy, which is noise to crawlers. Posts carry a date.
  const localizedEntries: MetadataRoute.Sitemap = PAGES.flatMap((page) =>
    LOCALES.map((locale) => ({
      url: abs(localePath(locale, page.path)),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      // Tell search engines these two URLs are translations of each other.
      alternates: {
        languages: {
          en: abs(localePath("en", page.path)),
          ko: abs(localePath("ko", page.path)),
        },
      },
    }))
  );

  // A post is served under both locale URLs, but an untranslated one is only
  // listed at its original language; the other URL declares that one canonical.
  const writings = await getWritings("en");
  const writingEntries: MetadataRoute.Sitemap = writings.flatMap((w) =>
    w.available.map((locale) => ({
      url: abs(localePath(locale, `/writings/${w.slug}`)),
      lastModified: new Date(`${w.date}T00:00:00+09:00`),
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
    }))
  );

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
