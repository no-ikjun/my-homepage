import { notFound } from "next/navigation";
import type { Metadata } from "next";
import WritingDetailView from "@/views/writing-detail-view";
import { getWriting, getWritingSlugs } from "@/lib/content/writings";
import { OG_IMAGE_SIZE, pageMetadata, writingOgImageUrl } from "@/lib/metadata";

const locale = "en";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getWritingSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getWriting(locale, slug);
  if (!entry) return { title: "Writing" };
  const { title, summary, date, tags, lang, available } = entry.metadata;
  const base = pageMetadata({
    // The post's own language drives og:locale and, for an untranslated post
    // served at both locale URLs, the canonical; hreflang lists real translations only.
    locale: lang,
    canonicalLocale: lang,
    locales: available,
    title,
    description: summary || title,
    path: `/writings/${slug}`,
    image: { url: writingOgImageUrl(entry.metadata), alt: title, ...OG_IMAGE_SIZE },
  });
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
