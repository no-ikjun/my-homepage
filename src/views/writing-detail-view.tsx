import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Toc } from "@/components/toc";
import { getWritingHeadings } from "@/lib/content/writings";
import { dictionary } from "@/lib/dictionary";
import { formatDate } from "@/lib/format";
import { blogPostingJsonLd } from "@/lib/json-ld";
import { localePath, type Locale } from "@/lib/locale";
import type { WritingEntry } from "@/types/writing";

export default async function WritingDetailView({
  locale,
  entry,
}: {
  locale: Locale;
  entry: WritingEntry;
}) {
  const { Content, metadata } = entry;
  const t = dictionary[locale].pages.writings;
  const headings = await getWritingHeadings(metadata.slug, metadata.lang);
  const untranslated = metadata.lang !== locale;

  return (
    <main className="mx-auto w-full max-w-page px-6" lang={metadata.lang}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd(metadata)) }}
      />
      <Link
        href={localePath(locale, "/writings")}
        lang={locale}
        className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-px" />
        {t.back}
      </Link>

      <header className="mt-6 max-w-content">
        <time dateTime={metadata.date} className="text-sm text-muted-foreground tabular-nums">
          {formatDate(metadata.date, locale)}
        </time>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-4xl">{metadata.title}</h1>
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
        {untranslated ? (
          <p lang={locale} className="mt-5 rounded-lg bg-muted px-3 py-2 text-sm text-muted-foreground">
            {t.onlyIn[metadata.lang]}
          </p>
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
