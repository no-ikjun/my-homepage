import type { ComponentType } from "react";

export type WritingMeta = {
  title: string;
  slug: string;
  date: string;
  summary: string;
  tags?: string[];
  published?: boolean;
};

export type WritingEntry = {
  metadata: WritingMeta;
  Content: ComponentType;
};
