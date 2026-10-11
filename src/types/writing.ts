import type { ComponentType } from "react";
import { type Locale } from "@/lib/locale";

export const WRITING_CATEGORIES = ["research", "engineering", "notes"] as const;
export type WritingCategory = (typeof WRITING_CATEGORIES)[number];

/** Exported as `metadata` from content/writings/<slug>.<locale>.mdx. */
export type WritingFrontmatter = {
  title: string;
  date: string;
  /** Broad shelf the post sits on; tags carry the finer topics. Defaults to "notes". */
  category?: WritingCategory;
  summary: string;
  tags?: string[];
  published?: boolean;
};

export type WritingMeta = WritingFrontmatter & {
  slug: string;
  /** Language this file is written in (from the filename). */
  lang: Locale;
  /** Every language the post exists in. */
  available: Locale[];
};

export type WritingHeading = {
  id: string;
  text: string;
  depth: 2 | 3;
};

export type WritingEntry = {
  metadata: WritingMeta;
  Content: ComponentType;
};
