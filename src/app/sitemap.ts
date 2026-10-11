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
  const now = new Date();

  const localizedEntries: MetadataRoute.Sitemap = PAGES.flatMap((page) =>
    LOCALES.map((locale) => ({
      url: abs(localePath(locale, page.path)),
      lastModified: now,
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

  // Posts exist at both locale URLs; untranslated ones serve their own language at both.
  const writings = await getWritings("en");
  const writingEntries: MetadataRoute.Sitemap = writings.flatMap((w) =>
    LOCALES.map((locale) => ({
      url: abs(localePath(locale, `/writings/${w.slug}`)),
      lastModified: new Date(w.date),
      changeFrequency: "monthly" as const,
      priority: 0.75,
      alternates: {
        languages: {
          en: abs(localePath("en", `/writings/${w.slug}`)),
          ko: abs(localePath("ko", `/writings/${w.slug}`)),
        },
      },
    }))
  );

  // Projects exist in both locales at mirrored URLs.
  const projects = await getProjects("en");
  const projectEntries: MetadataRoute.Sitemap = projects.flatMap((p) =>
    LOCALES.map((locale) => ({
      url: abs(localePath(locale, `/projects/${p.slug}`)),
      lastModified: now,
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
