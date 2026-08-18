import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getPublishedWritings } from "@/lib/writings";
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

  // Posts are written in a single language and live at one URL each.
  const writings = await getPublishedWritings();
  const writingEntries: MetadataRoute.Sitemap = writings.map((w) => ({
    url: `${SITE_URL}/writings/${w.slug}`,
    lastModified: new Date(w.date),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...localizedEntries, ...writingEntries];
}
