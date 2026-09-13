import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { dictionary } from "@/lib/dictionary";
import { formatPeriod } from "@/lib/format";
import { localePath, type Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";
import type { ProjectMeta } from "@/types/project";

export function ProjectCard({
  project,
  locale,
  className,
}: {
  project: ProjectMeta;
  locale: Locale;
  className?: string;
}) {
  const t = dictionary[locale];
  return (
    <Link
      href={localePath(locale, `/projects/${project.slug}`)}
      className={cn(
        "group flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 transition-[border-color,transform,box-shadow] hover:border-foreground/20 hover:shadow-[0_12px_32px_-16px_oklch(0_0_0/0.25)] focus-visible:border-brand",
        className,
      )}
    >
      <p className="text-sm text-muted-foreground">
        <span className={cn(project.kind === "research" && "text-brand")}>{t.project.kind[project.kind]}</span>
        <span aria-hidden> · </span>
        <span className="tabular-nums">{formatPeriod(project.start, project.end, locale)}</span>
      </p>

      <div className="flex-1 space-y-1.5">
        <h3 className="flex items-start justify-between gap-2 text-base font-semibold tracking-tight">
          <span className="text-balance">{project.title}</span>
          <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground opacity-0 transition-[opacity,transform] group-hover:translate-x-px group-hover:-translate-y-px group-hover:opacity-100" />
        </h3>
        <p className="line-clamp-3 text-sm text-muted-foreground text-pretty">{project.summary}</p>
      </div>

      {project.stack.length ? (
        <ul className="flex flex-wrap gap-1.5 text-xs text-muted-foreground">
          {project.stack.slice(0, 4).map((s) => (
            <li key={s} className="rounded-md bg-muted px-1.5 py-0.5">
              {s}
            </li>
          ))}
        </ul>
      ) : null}
    </Link>
  );
}
