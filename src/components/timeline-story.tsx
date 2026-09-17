import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { TimelineItem, TimelineKind } from "@/data/timeline";
import { formatPeriod } from "@/lib/format";
import { pick } from "@/lib/i18n";
import { type Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";

/**
 * Every timeline item on one axis, newest first, grouped by year. Awards
 * carry their photo full-width inside the entry; everything else is text.
 */
export function TimelineStory({
  items,
  locale,
  kindLabels,
}: {
  items: TimelineItem[];
  locale: Locale;
  kindLabels: Record<TimelineKind, string>;
}) {
  const sorted = [...items].sort((a, b) => b.start.localeCompare(a.start));

  return (
    <ol className="relative border-l border-border pl-8 md:pl-10">
      {sorted.map((item, i) => {
        const year = item.start.slice(0, 4);
        const newYear = i === 0 || sorted[i - 1].start.slice(0, 4) !== year;
        const org = pick(item.org, locale);
        const isAward = item.kind === "award";
        const project = item.highlights ? pick(item.highlights, locale) : [];

        return (
          <li
            key={item.id}
            id={item.id}
            className={cn("relative scroll-mt-28 pb-12 last:pb-0", newYear && i !== 0 && "pt-2")}
          >
            {/* Year marker: inline above the entry on narrow screens, beside the axis on wide ones. */}
            {newYear ? (
              <span className="mb-3 block text-sm font-semibold tabular-nums lg:absolute lg:top-0 lg:-left-10 lg:mb-0 lg:-translate-x-[calc(100%+0.75rem)]">
                {year}
              </span>
            ) : null}

            <div className="relative">
              <span
                aria-hidden
                className={cn(
                  "absolute top-2 -left-8 size-2 -translate-x-1/2 rounded-full ring-4 ring-background md:-left-10",
                  isAward ? "bg-brand" : "bg-muted-foreground/70",
                )}
              />
              <p className="text-sm text-muted-foreground">
                <span>{kindLabels[item.kind]}</span>
                <span aria-hidden> · </span>
                <span className="tabular-nums">{formatPeriod(item.start, item.end, locale)}</span>
              </p>

              {isAward && item.logo ? (
                <a
                  href={item.orgUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative mt-3 block aspect-[16/9] overflow-hidden rounded-2xl bg-muted text-white"
                >
                  <Image
                    src={item.logo}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 640px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                  <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 p-5">
                    <span className="block text-lg font-semibold leading-snug text-balance">{org}</span>
                    <span className="mt-0.5 block text-sm font-medium">{pick(item.title, locale)}</span>
                    {project[0] ? (
                      <span className="mt-1 block text-sm text-white/80 text-pretty">{project[0]}</span>
                    ) : null}
                  </span>
                </a>
              ) : (
                <>
                  <h3 className="mt-1 flex items-center gap-3 text-lg font-semibold tracking-tight">
                    {item.logo ? (
                      <span
                        className={cn(
                          "relative block size-9 shrink-0 overflow-hidden border border-border bg-card",
                          item.logoShape === "round" ? "rounded-full" : "rounded-lg",
                        )}
                      >
                        <Image src={item.logo} alt="" fill sizes="36px" className="object-cover" />
                      </span>
                    ) : null}
                    {item.orgUrl ? (
                      <a
                        href={item.orgUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 hover:underline hover:underline-offset-4"
                      >
                        {org}
                        <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                      </a>
                    ) : (
                      org
                    )}
                  </h3>
                  <p className="mt-0.5 text-muted-foreground">{pick(item.title, locale)}</p>

                  {project.length ? (
                    <ul className="mt-3 space-y-1 text-sm leading-relaxed text-muted-foreground">
                      {project.map((h) => (
                        <li key={h} className="text-pretty">{h}</li>
                      ))}
                    </ul>
                  ) : null}

                  {item.entries?.length ? (
                    <ul className="mt-4 space-y-4">
                      {item.entries.map((entry) => (
                        <li key={pick(entry.title, locale)}>
                          <p className="text-sm font-medium">
                            {pick(entry.title, locale)}
                            {entry.start ? (
                              <span className="ml-2 text-xs font-normal text-muted-foreground tabular-nums">
                                {formatPeriod(entry.start, entry.end, locale)}
                              </span>
                            ) : null}
                          </p>
                          <ul className="mt-1 space-y-1 text-sm leading-relaxed text-muted-foreground">
                            {pick(entry.highlights, locale).map((h) => (
                              <li key={h} className="text-pretty">{h}</li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
