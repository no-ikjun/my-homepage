import { notFound } from "next/navigation";
import type { Metadata } from "next";
import WritingDetailView from "@/views/writing-detail-view";
import { getWriting, getWritingSlugs } from "@/lib/content/writings";
import { pageMetadata } from "@/lib/metadata";

const locale = "ko";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getWritingSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getWriting(locale, slug);
  if (!entry) return { title: "Writing" };
  const { title, summary, date, tags } = entry.metadata;
  const base = pageMetadata({ locale, title, description: summary || title, path: `/writings/${slug}` });
  const publishedTime = /^\d{4}-\d{2}-\d{2}/.test(date) ? `${date}T00:00:00+09:00` : undefined;
  return {
    ...base,
    openGraph: { ...base.openGraph, type: "article", publishedTime, tags },
  };
}

export default async function WritingPage({ params }: Props) {
  const { slug } = await params;
  const entry = await getWriting(locale, slug);
  if (!entry) notFound();
  return <WritingDetailView locale={locale} entry={entry} />;
}
