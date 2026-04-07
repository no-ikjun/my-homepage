import { notFound } from "next/navigation";
import type { Metadata } from "next";
import styles from "./page.module.css";
import { getPublishedWritings, getWritingBySlug } from "@/lib/writings";
import { SITE_URL } from "@/lib/site";
import { BadgeChip } from "@/components/ui";

type WritingDetailPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const writings = await getPublishedWritings();
  return writings.map((writing) => ({ slug: writing.slug }));
}

export async function generateMetadata({ params }: WritingDetailPageProps): Promise<Metadata> {
  const entry = await getWritingBySlug(params.slug);
  if (!entry || entry.metadata.published === false) {
    return { title: "Writing" };
  }

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

export default async function WritingDetailPage({ params }: WritingDetailPageProps) {
  const entry = await getWritingBySlug(params.slug);
  if (!entry || entry.metadata.published === false) {
    notFound();
  }

  const { Content, metadata } = entry;

  return (
    <main className={styles.main}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <p className={styles.date}>{metadata.date}</p>
          <h1 className={styles.title}>{metadata.title}</h1>
          {metadata.summary ? <p className={styles.summary}>{metadata.summary}</p> : null}
          {metadata.tags?.length ? (
            <div className={styles.tagRow}>
              {metadata.tags.map((tag) => (
                <BadgeChip key={tag} size="sm" tone="muted">
                  {tag}
                </BadgeChip>
              ))}
            </div>
          ) : null}
        </header>

        <article className={styles.content}>
          <Content />
        </article>
      </div>
    </main>
  );
}
