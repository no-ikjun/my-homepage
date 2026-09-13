import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectIcon } from "@/components/project-icon";
import { TechBadge } from "@/components/tech-badge";
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
      style={project.accent ? ({ "--accent-color": project.accent } as React.CSSProperties) : undefined}
      className={cn(
        "group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card p-5 transition-[border-color,transform,box-shadow] hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_16px_40px_-20px_oklch(0_0_0/0.3)] focus-visible:border-brand",
        project.accent &&
          "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(70%_50%_at_0%_0%,color-mix(in_srgb,var(--accent-color)_10%,transparent),transparent_70%)] before:transition-opacity before:duration-500 hover:before:opacity-[1.6]",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <ProjectIcon src={project.image} title={project.title} accent={project.accent} size={44} />
        <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground opacity-0 transition-[opacity,transform] group-hover:translate-x-px group-hover:-translate-y-px group-hover:opacity-100" />
      </div>

      <div className="flex-1 space-y-1.5">
        <h3 className="text-base font-semibold tracking-tight text-balance">{project.title}</h3>
        <p className="text-sm text-muted-foreground">
          <span className={cn(project.kind === "research" && "text-brand")}>{t.project.kind[project.kind]}</span>
          <span aria-hidden> · </span>
          <span className="tabular-nums">{formatPeriod(project.start, project.end, locale)}</span>
        </p>
        <p className="line-clamp-3 text-sm text-muted-foreground text-pretty">{project.summary}</p>
      </div>

      {project.stack.length ? (
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((s) => (
            <li key={s}>
              <TechBadge name={s} />
            </li>
          ))}
        </ul>
      ) : null}
    </Link>
  );
}
