import Link from "next/link";
import type { ProjectEntry } from "@/types/project";
import { formatPeriod } from "@/lib/format";
import { localePath, type Locale } from "@/lib/locale";

/**
 * Minimal render of a project case study. Restyled in the views phase; this
 * exists so the content loader is exercised by the build.
 */
export default function ProjectDetailView({
  locale,
  entry,
}: {
  locale: Locale;
  entry: ProjectEntry;
}) {
  const { meta, Content } = entry;
  return (
    <main className="mx-auto w-full max-w-content px-6 py-16">
      <Link
        href={localePath(locale, "/projects")}
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← {locale === "ko" ? "프로젝트" : "Projects"}
      </Link>
      <header className="mt-6 space-y-3">
        <p className="text-sm text-muted-foreground">
          {formatPeriod(meta.start, meta.end, locale)}
          {meta.affiliation ? ` · ${meta.affiliation}` : null}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-balance">
          {meta.title}
        </h1>
        <p className="text-lg text-muted-foreground text-pretty">{meta.summary}</p>
      </header>
      <article className="prose-custom mt-10">
        <Content />
      </article>
    </main>
  );
}
