import fs from "node:fs/promises";
import path from "node:path";
import type { ComponentType } from "react";
import GithubSlugger from "github-slugger";
import { type Locale } from "@/lib/locale";
import type { WritingEntry, WritingFrontmatter, WritingHeading, WritingMeta } from "@/types/writing";

const WRITINGS_DIR = path.join(process.cwd(), "content", "writings");
const FILE_RE = /^(?<slug>[a-z0-9-]+)\.(?<locale>en|ko)\.mdx$/;

type WritingModule = {
  default: ComponentType;
  metadata?: Partial<WritingFrontmatter>;
};

type FileRef = { slug: string; locale: Locale };

async function listFiles(): Promise<FileRef[]> {
  try {
    const entries = await fs.readdir(WRITINGS_DIR, { withFileTypes: true });
    return entries
      .filter((e) => e.isFile())
      .map((e) => e.name.match(FILE_RE)?.groups as FileRef | undefined)
      .filter((m): m is FileRef => Boolean(m));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}

function importWritingModule(slug: string, locale: Locale) {
  return import(
    /* webpackInclude: /\.mdx$/ */ `../../../content/writings/${slug}.${locale}.mdx`
  ) as Promise<WritingModule>;
}

/**
 * Which file to serve for `slug` under `locale`: the matching language when it
 * exists, otherwise whatever language the post was written in. Posts need not
 * be translated to appear under both locales.
 */
function resolveLocale(files: FileRef[], slug: string, locale: Locale): Locale | null {
  const available = files.filter((f) => f.slug === slug).map((f) => f.locale);
  if (!available.length) return null;
  return available.includes(locale) ? locale : available[0];
}

function toMeta(slug: string, lang: Locale, available: Locale[], fm?: Partial<WritingFrontmatter>): WritingMeta {
  return {
    slug,
    lang,
    available,
    title: fm?.title ?? slug,
    date: fm?.date ?? "1970-01-01",
    category: fm?.category ?? "notes",
    summary: fm?.summary ?? "",
    tags: fm?.tags ?? [],
    published: fm?.published ?? true,
  };
}

/** Published posts as seen from `locale`, newest first; untranslated posts fall back to their own language. */
export async function getWritings(locale: Locale): Promise<WritingMeta[]> {
  const files = await listFiles();
  const slugs = [...new Set(files.map((f) => f.slug))];
  const metas = await Promise.all(
    slugs.map(async (slug) => {
      const lang = resolveLocale(files, slug, locale)!;
      const available = files.filter((f) => f.slug === slug).map((f) => f.locale);
      const mod = await importWritingModule(slug, lang);
      return toMeta(slug, lang, available, mod.metadata);
    }),
  );
  return metas.filter((m) => m.published !== false).sort((a, b) => b.date.localeCompare(a.date));
}

export async function getWriting(locale: Locale, slug: string): Promise<WritingEntry | null> {
  const files = await listFiles();
  const lang = resolveLocale(files, slug, locale);
  if (!lang) return null;
  const available = files.filter((f) => f.slug === slug).map((f) => f.locale);
  const mod = await importWritingModule(slug, lang);
  const metadata = toMeta(slug, lang, available, mod.metadata);
  if (metadata.published === false) return null;
  return { metadata, Content: mod.default };
}

/** Every slug, for generateStaticParams; each locale route renders all of them. */
export async function getWritingSlugs(): Promise<string[]> {
  const files = await listFiles();
  return [...new Set(files.map((f) => f.slug))];
}

/**
 * h2/h3 headings of the file actually served, with the ids rehype-slug
 * assigns, for the table of contents. Parsed from the source; fenced code is skipped.
 */
export async function getWritingHeadings(slug: string, lang: Locale): Promise<WritingHeading[]> {
  let source: string;
  try {
    source = await fs.readFile(path.join(WRITINGS_DIR, `${slug}.${lang}.mdx`), "utf8");
  } catch {
    return [];
  }
  const slugger = new GithubSlugger();
  const headings: WritingHeading[] = [];
  let inFence = false;
  for (const line of source.split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = /^(#{2,3})\s+(.+?)\s*#*\s*$/.exec(line);
    if (!m) continue;
    const text = m[2].replace(/[*_`]/g, "");
    headings.push({ id: slugger.slug(text), text, depth: m[1].length as 2 | 3 });
  }
  return headings;
}
