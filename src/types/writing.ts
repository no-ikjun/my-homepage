import type { ComponentType } from "react";

export type WritingMeta = {
  title: string;
  slug: string;
  date: string;
  summary: string;
  tags?: string[];
  published?: boolean;
  /** Language the post is written in; sets the lang attribute for wrapping and screen readers. */
  lang?: "en" | "ko";
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
