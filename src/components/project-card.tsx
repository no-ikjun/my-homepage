import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, User, Users } from "lucide-react";
import { ProjectIcon } from "@/components/project-icon";
import { TechBadge } from "@/components/tech-badge";
import { dictionary } from "@/lib/dictionary";
import { formatPeriod } from "@/lib/format";
import { localePath, type Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";
import type { ProjectMeta } from "@/types/project";

/**
 * Compact project card. If the project has a gallery, its first image is shown
 * as a cover; otherwise the card is icon + text, so nothing has to be
 * screenshotted for the site to look finished.
 */
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
  const cover = project.gallery?.[0];

  return (
    <Link
      href={localePath(locale, `/projects/${project.slug}`)}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-[border-color,transform,box-shadow] hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_16px_40px_-20px_oklch(0_0_0/0.3)] focus-visible:border-brand",
        className,
      )}
    >
      {cover ? (
        <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-muted">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-center gap-3">
          <ProjectIcon src={project.image} title={project.title} size={40} />
          <div className="min-w-0">
            <h3 className="font-semibold tracking-tight text-balance">{project.title}</h3>
            <p className="text-sm text-muted-foreground">
              <span className={cn(project.kind === "research" && "text-brand")}>{t.project.kind[project.kind]}</span>
              <span aria-hidden> · </span>
              <span className="tabular-nums">{formatPeriod(project.start, project.end, locale)}</span>
            </p>
          </div>
          <ArrowUpRight className="ml-auto size-4 shrink-0 self-start text-muted-foreground opacity-0 transition-[opacity,transform] group-hover:translate-x-px group-hover:-translate-y-px group-hover:opacity-100" />
        </div>

        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground text-pretty">{project.summary}</p>

        {/* Who it was built with, and what I did there. A team project reads
            as its team's name; "Personal" says the rest. */}
        {project.affiliation || project.role.length ? (
          <dl className="space-y-1 text-sm">
            {project.affiliation ? (
              <div className="flex items-center gap-1.5">
                <dt className="sr-only">{t.pages.projectDetail.affiliation}</dt>
                {project.team ? (
                  <Users aria-hidden className="size-3.5 shrink-0 text-muted-foreground" />
                ) : (
                  <User aria-hidden className="size-3.5 shrink-0 text-muted-foreground" />
                )}
                <dd className="truncate">{project.affiliation}</dd>
              </div>
            ) : null}
            {project.role.length ? (
              <div className="pl-5">
                <dt className="sr-only">{t.pages.projectDetail.role}</dt>
                <dd className="line-clamp-1 text-muted-foreground">{project.role.slice(0, 2).join(" · ")}</dd>
              </div>
            ) : null}
          </dl>
        ) : null}

        {project.stack.length ? (
          <ul className="mt-auto flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((s) => (
              <li key={s}>
                <TechBadge name={s} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </Link>
  );
}
