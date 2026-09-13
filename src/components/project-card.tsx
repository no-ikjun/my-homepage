import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectIcon } from "@/components/project-icon";
import { TechBadge } from "@/components/tech-badge";
import { dictionary } from "@/lib/dictionary";
import { formatPeriod } from "@/lib/format";
import { localePath, type Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";
import type { ProjectMeta } from "@/types/project";

/**
 * Image-led project card. The first gallery image is the cover; `feature`
 * lays the cover beside the text for the one project that leads a section.
 */
export function ProjectCard({
  project,
  locale,
  feature = false,
  className,
}: {
  project: ProjectMeta;
  locale: Locale;
  feature?: boolean;
  className?: string;
}) {
  const t = dictionary[locale];
  const cover = project.gallery?.[0];

  return (
    <Link
      href={localePath(locale, `/projects/${project.slug}`)}
      className={cn(
        "group flex overflow-hidden rounded-2xl border border-border bg-card transition-[border-color,transform,box-shadow] hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_16px_40px_-20px_oklch(0_0_0/0.3)] focus-visible:border-brand",
        feature ? "flex-col md:flex-row" : "flex-col",
        className,
      )}
    >
      {cover ? (
        <div
          className={cn(
            "relative shrink-0 overflow-hidden bg-muted",
            feature ? "aspect-[16/10] md:aspect-auto md:w-[56%]" : "aspect-[16/10]",
          )}
        >
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes={feature ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 640px) 100vw, 33vw"}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>
      ) : null}

      <div className={cn("flex flex-1 flex-col gap-4 p-5", feature && "md:justify-center md:p-8")}>
        <div className="flex items-center gap-3">
          <ProjectIcon src={project.image} title={project.title} size={feature ? 44 : 36} />
          <div className="min-w-0">
            <h3 className={cn("font-semibold tracking-tight text-balance", feature ? "text-xl" : "text-base")}>
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              <span className={cn(project.kind === "research" && "text-brand")}>{t.project.kind[project.kind]}</span>
              <span aria-hidden> · </span>
              <span className="tabular-nums">{formatPeriod(project.start, project.end, locale)}</span>
            </p>
          </div>
          <ArrowUpRight className="ml-auto size-4 shrink-0 self-start text-muted-foreground opacity-0 transition-[opacity,transform] group-hover:translate-x-px group-hover:-translate-y-px group-hover:opacity-100" />
        </div>

        <p
          className={cn(
            "text-sm leading-relaxed text-muted-foreground text-pretty",
            feature ? "line-clamp-4 md:text-base" : "line-clamp-3",
          )}
        >
          {project.summary}
        </p>

        {project.stack.length ? (
          <ul className="mt-auto flex flex-wrap gap-1.5">
            {project.stack.slice(0, feature ? 6 : 4).map((s) => (
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
