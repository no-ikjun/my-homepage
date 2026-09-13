import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { getPublishedWritings } from "@/lib/content/writings";
import { dictionary } from "@/lib/dictionary";
import { formatDate } from "@/lib/format";
import { localePath, type Locale } from "@/lib/locale";

export default async function WritingsView({ locale }: { locale: Locale }) {
  const t = dictionary[locale];
  const p = t.pages.writings;
  const writings = await getPublishedWritings();

  return (
    <main className="mx-auto w-full max-w-page px-6">
      <PageHeader title={p.title} description={p.description} />

      {writings.length === 0 ? (
        <section className="max-w-content rounded-2xl border border-dashed border-border p-8">
          <h2 className="font-medium">{p.emptyTitle}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{p.emptyDescription}</p>
          <div className="mt-5 flex gap-4 text-sm">
            <Link href={localePath(locale, "/projects")} className="underline underline-offset-4 hover:text-brand">
              {t.nav.projects}
            </Link>
            <Link href={localePath(locale, "/about")} className="underline underline-offset-4 hover:text-brand">
              {t.nav.about}
            </Link>
          </div>
        </section>
      ) : (
        <ul className="max-w-content divide-y divide-border border-y border-border">
          {writings.map((w) => (
            <li key={w.slug}>
              <Link
                href={`/writings/${w.slug}`}
                className="group -mx-3 grid gap-1 rounded-lg px-3 py-5 transition-colors hover:bg-foreground/[0.03] md:grid-cols-[9rem_1fr] md:gap-6"
              >
                <time
                  dateTime={w.date}
                  className="font-mono text-xs text-muted-foreground tabular-nums md:pt-1"
                >
                  {formatDate(w.date, locale)}
                </time>
                <span className="min-w-0">
                  <span className="block font-medium">{w.title}</span>
                  {w.summary ? (
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground text-pretty">
                      {w.summary}
                    </span>
                  ) : null}
                  {w.tags?.length ? (
                    <span className="mt-2 flex flex-wrap gap-1.5">
                      {w.tags.map((tag) => (
                        <span key={tag} className="rounded-md bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </span>
                  ) : null}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
