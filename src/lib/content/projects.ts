import fs from "node:fs/promises";
import path from "node:path";
import type { ComponentType } from "react";
import { LOCALES, type Locale } from "@/lib/locale";
import type {
  ProjectEntry,
  ProjectFrontmatter,
  ProjectMeta,
} from "@/types/project";

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");
const FILE_RE = /^(?<slug>[a-z0-9-]+)\.(?<locale>en|ko)\.mdx$/;

type ProjectModule = {
  default: ComponentType;
  metadata?: Partial<ProjectFrontmatter>;
};

async function listProjectFiles() {
  try {
    const entries = await fs.readdir(PROJECTS_DIR, { withFileTypes: true });
    return entries
      .filter((e) => e.isFile())
      .map((e) => e.name.match(FILE_RE)?.groups as
        | { slug: string; locale: Locale }
        | undefined)
      .filter((m): m is { slug: string; locale: Locale } => Boolean(m));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}

function importProjectModule(slug: string, locale: Locale) {
  return import(
    /* webpackInclude: /\.mdx$/ */ `../../../content/projects/${slug}.${locale}.mdx`
  ) as Promise<ProjectModule>;
}

function toMeta(
  slug: string,
  locale: Locale,
  fm: Partial<ProjectFrontmatter> | undefined,
): ProjectMeta {
  if (!fm?.title || !fm.kind || !fm.start) {
    throw new Error(
      `content/projects/${slug}.${locale}.mdx must export metadata with title, kind and start`,
    );
  }
  return {
    slug,
    locale,
    title: fm.title,
    kind: fm.kind,
    status: fm.status ?? (fm.end ? "completed" : "active"),
    start: fm.start,
    end: fm.end,
    summary: fm.summary ?? "",
    affiliation: fm.affiliation,
    role: fm.role ?? [],
    stack: fm.stack ?? [],
    links: fm.links ?? [],
    image: fm.image,
    gallery: fm.gallery ?? [],
    featured: fm.featured ?? false,
    order: fm.order ?? 0,
    published: fm.published ?? true,
  };
}

function byRecency(a: ProjectMeta, b: ProjectMeta) {
  if (a.order !== b.order) return a.order! - b.order!;
  return b.start.localeCompare(a.start);
}

/** Every published project available in `locale`, newest first. */
export async function getProjects(locale: Locale): Promise<ProjectMeta[]> {
  const files = await listProjectFiles();
  const metas = await Promise.all(
    files
      .filter((f) => f.locale === locale)
      .map(async ({ slug }) => {
        const mod = await importProjectModule(slug, locale);
        return toMeta(slug, locale, mod.metadata);
      }),
  );
  return metas.filter((m) => m.published).sort(byRecency);
}

export async function getFeaturedProjects(locale: Locale, limit = 3) {
  const all = await getProjects(locale);
  return all.filter((m) => m.featured).slice(0, limit);
}

export async function getProject(
  locale: Locale,
  slug: string,
): Promise<ProjectEntry | null> {
  const files = await listProjectFiles();
  if (!files.some((f) => f.slug === slug && f.locale === locale)) return null;
  const mod = await importProjectModule(slug, locale);
  const meta = toMeta(slug, locale, mod.metadata);
  if (!meta.published) return null;
  return { meta, Content: mod.default };
}

/** Slugs that exist in every locale - used by generateStaticParams. */
export async function getProjectSlugs(): Promise<string[]> {
  const files = await listProjectFiles();
  const bySlug = new Map<string, Set<Locale>>();
  for (const { slug, locale } of files) {
    bySlug.set(slug, (bySlug.get(slug) ?? new Set()).add(locale));
  }
  return [...bySlug.entries()]
    .filter(([, locales]) => LOCALES.every((l) => locales.has(l)))
    .map(([slug]) => slug);
}
