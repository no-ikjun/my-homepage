import fs from "node:fs/promises";
import path from "node:path";
import type { ComponentType } from "react";
import GithubSlugger from "github-slugger";
import type { WritingEntry, WritingHeading, WritingMeta } from "@/types/writing";

const WRITINGS_DIR = path.join(process.cwd(), "content", "writings");

type WritingModule = {
  default: ComponentType;
  metadata?: Partial<WritingMeta>;
};

async function listMdxFiles() {
  try {
    const entries = await fs.readdir(WRITINGS_DIR, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile() && /\.mdx?$/.test(entry.name))
      .map((entry) => entry.name);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}

async function importWritingModule(slug: string): Promise<WritingModule> {
  return import(
    /* webpackInclude: /\.mdx?$/ */ `../../../content/writings/${slug}.mdx`
  ) as Promise<WritingModule>;
}

function toMeta(slug: string, metadata?: Partial<WritingMeta>): WritingMeta {
  return {
    title: metadata?.title ?? slug,
    slug,
    date: metadata?.date ?? "1970-01-01",
    summary: metadata?.summary ?? "",
    tags: metadata?.tags ?? [],
    published: metadata?.published ?? true,
    lang: metadata?.lang ?? "en",
  };
}

export async function getAllWritingMetas() {
  const files = await listMdxFiles();
  const metas = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const mod = await importWritingModule(slug);
      return toMeta(slug, mod.metadata);
    })
  );

  return metas.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPublishedWritings() {
  const metas = await getAllWritingMetas();
  return metas.filter((meta) => meta.published !== false);
}

/**
 * h2/h3 headings of a post, with the same ids rehype-slug assigns, for the
 * table of contents. Parsed from the raw source; fenced code is skipped.
 */
export async function getWritingHeadings(slug: string): Promise<WritingHeading[]> {
  const files = await listMdxFiles();
  const file = files.find((name) => name === `${slug}.mdx` || name === `${slug}.md`);
  if (!file) return [];
  const source = await fs.readFile(path.join(WRITINGS_DIR, file), "utf8");
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

export async function getWritingBySlug(slug: string): Promise<WritingEntry | null> {
  const files = await listMdxFiles();
  const exists = files.some((name) => name === `${slug}.mdx` || name === `${slug}.md`);
  if (!exists) return null;

  const mod = await importWritingModule(slug);
  return {
    metadata: toMeta(slug, mod.metadata),
    Content: mod.default,
  };
}
