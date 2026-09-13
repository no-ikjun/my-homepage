import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Toc } from "@/components/toc";
import { getPublishedWritings, getWritingBySlug, getWritingHeadings } from "@/lib/content/writings";
import { dictionary } from "@/lib/dictionary";
import { formatDate } from "@/lib/format";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const writings = await getPublishedWritings();
  return writings.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: slugParam } = await params;
  const entry = await getWritingBySlug(slugParam);
  if (!entry || entry.metadata.published === false) return { title: "Writing" };

  const { title, summary, slug, date } = entry.metadata;
  const url = `${SITE_URL}/writings/${slug}`;
  const publishedTime = /^\d{4}-\d{2}-\d{2}/.test(date) ? `${date}T00:00:00+09:00` : undefined;

  return {
    title,
    description: summary || title,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description: summary || title,
      publishedTime,
      tags: entry.metadata.tags,
      images: [{ url: `${SITE_URL}/img/profile_round3.png`, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: summary || title,
      images: [`${SITE_URL}/img/profile_round3.png`],
    },
  };
}

/** Posts are written in one language and live at a single unprefixed URL. */
export default async function WritingDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = await getWritingBySlug(slug);
  if (!entry || entry.metadata.published === false) notFound();

  const { Content, metadata } = entry;
  const headings = await getWritingHeadings(slug);
  const t = dictionary.en.pages.writings;

  return (
    <main className="mx-auto w-full max-w-page px-6" lang={metadata.lang}>
      <Link
        href="/writings"
        className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-px" />
        {t.back}
      </Link>

      <header className="mt-6 max-w-content">
        <time dateTime={metadata.date} className="text-sm text-muted-foreground tabular-nums">
          {formatDate(metadata.date, "en")}
        </time>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
          {metadata.title}
        </h1>
        {metadata.summary ? (
          <p className="mt-3 text-lg text-muted-foreground text-pretty">{metadata.summary}</p>
        ) : null}
        {metadata.tags?.length ? (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {metadata.tags.map((tag) => (
              <li key={tag} className="rounded-md bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </header>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_14rem] lg:gap-16">
        <article className="prose-custom min-w-0">
          <Content />
        </article>
        <aside className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
          <Toc headings={headings} label={t.onThisPage} />
        </aside>
      </div>
    </main>
  );
}
