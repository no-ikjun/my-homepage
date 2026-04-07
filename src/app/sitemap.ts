import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getPublishedWritings } from "@/lib/writings";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const writings = await getPublishedWritings();
  const writingEntries: MetadataRoute.Sitemap = writings.map((w) => ({
    url: `${SITE_URL}/writings/${w.slug}`,
    lastModified: new Date(w.date),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/writings`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.65,
    },
    ...writingEntries,
  ];
}
