import type { ComponentType } from "react";
import { type Locale } from "@/lib/locale";

export type ProjectKind = "research" | "product";
export type ProjectStatus = "active" | "completed" | "archived";

export type ProjectLink = {
  label: string;
  href: string;
};

/**
 * Exported as `metadata` from every content/projects/<slug>.<locale>.mdx.
 * `slug` and `locale` are derived from the filename, not declared.
 */
export type ProjectFrontmatter = {
  title: string;
  kind: ProjectKind;
  status: ProjectStatus;
  /** "YYYY-MM" */
  start: string;
  /** "YYYY-MM"; omit while ongoing */
  end?: string;
  summary: string;
  /** Where the work happened: a lab, a team, "Personal" */
  affiliation?: string;
  /** True when built with others; drives the person/people mark on cards. Defaults to false. */
  team?: boolean;
  role: string[];
  stack: string[];
  links?: ProjectLink[];
  /** Logo; local path or an allowed remote host */
  image?: string;
  /** Screenshots shown at the top of the detail page */
  gallery?: { src: string; alt: string }[];
  /** Slugs of posts in content/writings about this project, shown under the body */
  writings?: string[];
  /** Surfaces the project on the home page */
  featured?: boolean;
  /** Lower first among featured / same start month */
  order?: number;
  published?: boolean;
};

export type ProjectMeta = Omit<ProjectFrontmatter, "team" | "writings"> & {
  slug: string;
  locale: Locale;
  team: boolean;
  writings: string[];
};

export type ProjectEntry = {
  meta: ProjectMeta;
  Content: ComponentType;
};
