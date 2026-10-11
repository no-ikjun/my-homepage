import Image from "next/image";
import Link from "next/link";
import { ProjectIcon } from "@/components/project-icon";
import { TechBadge } from "@/components/tech-badge";
import { ArrowLeft, ArrowUpRight, Globe } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { dictionary } from "@/lib/dictionary";
import { formatPeriod } from "@/lib/format";
import { localePath, type Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";
import type { ProjectEntry } from "@/types/project";

/** Picks a mark for a project link from its host, so the data needs no icon field. */
function LinkIcon({ href }: { href: string }) {
  const cls = "size-4 shrink-0 text-muted-foreground";
  if (/github\.com/.test(href)) return <GitHubIcon className={cls} />;
  return <Globe className={cls} />;
}

function Meta({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="mt-1.5 text-sm">{children}</dd>
    </div>
  );
}

export default function ProjectDetailView({
  locale,
  entry,
}: {
  locale: Locale;
  entry: ProjectEntry;
}) {
  const t = dictionary[locale];
  const d = t.pages.projectDetail;
  const { meta, Content } = entry;

  return (
    <main className="mx-auto w-full max-w-page px-6">
      <Link
        href={localePath(locale, "/projects")}
        className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-px" />
        {d.back}
      </Link>

      <header className="mt-6 max-w-content">
        <ProjectIcon
          src={meta.image}
          title={meta.title}
          size={56}
          className="mb-5"
        />
        <p className="text-sm text-muted-foreground">
          <span className={cn(meta.kind === "research" && "text-brand")}>
            {t.project.kind[meta.kind]}
          </span>
          <span aria-hidden> · </span>
          <span className="tabular-nums">
            {formatPeriod(meta.start, meta.end, locale)}
          </span>
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
          {meta.title}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground text-pretty">
          {meta.summary}
        </p>
      </header>

      {meta.gallery?.length ? (
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {meta.gallery.map((shot, i) => (
            <li
              key={`${shot.src}-${i}`}
              className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-muted"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
                priority={i === 0}
              />
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_16rem] lg:gap-16">
        <article className="prose-custom min-w-0">
          <Content />
        </article>

        <aside className="lg:order-none order-first lg:sticky lg:top-28 lg:self-start">
          <dl className="grid gap-6 rounded-2xl border border-border bg-card p-5">
            {meta.affiliation ? (
              <Meta label={d.affiliation}>{meta.affiliation}</Meta>
            ) : null}
            {meta.role.length ? (
              <Meta label={d.role}>
                <ul className="flex flex-wrap gap-x-4 gap-y-0.5 lg:flex-col">
                  {meta.role.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </Meta>
            ) : null}
            {meta.stack.length ? (
              <Meta label={d.stack}>
                <ul className="flex flex-wrap gap-1.5">
                  {meta.stack.map((s) => (
                    <li key={s}>
                      <TechBadge name={s} />
                    </li>
                  ))}
                </ul>
              </Meta>
            ) : null}
            {meta.links?.length ? (
              <Meta label={d.links}>
                <ul className="flex flex-wrap gap-x-5 gap-y-1.5 lg:flex-col">
                  {meta.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-foreground hover:underline hover:underline-offset-4"
                      >
                        <LinkIcon href={l.href} />
                        {l.label}
                        <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </Meta>
            ) : null}
          </dl>
        </aside>
      </div>
    </main>
  );
}
