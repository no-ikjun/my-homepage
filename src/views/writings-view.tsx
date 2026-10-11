import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { WritingList } from "@/components/writing-list";
import { getWritings } from "@/lib/content/writings";
import { dictionary } from "@/lib/dictionary";
import { localePath, type Locale } from "@/lib/locale";

export default async function WritingsView({ locale }: { locale: Locale }) {
  const t = dictionary[locale];
  const p = t.pages.writings;
  const writings = await getWritings(locale);

  return (
    <main className="mx-auto w-full max-w-page px-6">
      <PageHeader title={p.title} description={p.description} />

      {writings.length === 0 ? (
        <section className="max-w-content rounded-2xl border border-dashed border-border p-8">
          <h2 className="font-medium">{p.emptyTitle}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{p.emptyDescription}</p>
          <div className="mt-5 flex gap-4 text-sm">
            <Link href={localePath(locale, "/projects")} className="underline underline-offset-4 hover:decoration-foreground">
              {t.nav.projects}
            </Link>
            <Link href={localePath(locale, "/about")} className="underline underline-offset-4 hover:decoration-foreground">
              {t.nav.about}
            </Link>
          </div>
        </section>
      ) : (
        <WritingList
          writings={writings}
          locale={locale}
          labels={{ all: p.all, categories: p.categories }}
        />
      )}
    </main>
  );
}
