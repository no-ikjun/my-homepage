import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { TimelineItem } from "@/data/timeline";
import { formatPeriod } from "@/lib/format";
import { pick } from "@/lib/i18n";
import { type Locale } from "@/lib/locale";

function Logo({ src, alt }: { src?: string; alt: string }) {
  if (!src) {
    return (
      <span
        aria-hidden
        className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-sm font-medium text-muted-foreground"
      >
        {alt.slice(0, 1)}
      </span>
    );
  }
  return (
    <span className="relative block size-10 shrink-0 overflow-hidden rounded-lg border border-border bg-card">
      <Image src={src} alt="" fill sizes="40px" className="object-cover" />
    </span>
  );
}

function Highlights({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <ul className="mt-2 space-y-1 text-sm leading-relaxed text-muted-foreground">
      {items.map((h) => (
        <li key={h} className="flex gap-2">
          <span aria-hidden className="mt-[0.6em] size-1 shrink-0 rounded-full bg-border" />
          <span className="text-pretty">{h}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * One row per organisation: logo, org, role, period, then highlights or
 * sub-entries. Same component for career, education, awards and activities.
 */
export function TimelineList({ items, locale }: { items: TimelineItem[]; locale: Locale }) {
  return (
    <ul className="divide-y divide-border">
      {items.map((item) => {
        const org = pick(item.org, locale);
        return (
          <li key={item.id} className="grid gap-3 py-7 first:pt-0 last:pb-0 md:grid-cols-[10rem_1fr] md:gap-6">
            <p className="text-sm text-muted-foreground tabular-nums md:pt-2.5">
              {formatPeriod(item.start, item.end, locale)}
            </p>

            <div className="flex gap-4">
              <Logo src={item.logo} alt={org} />
              <div className="min-w-0 flex-1">
                <h3 className="font-medium leading-snug">
                  {item.orgUrl ? (
                    <a
                      href={item.orgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 hover:underline hover:underline-offset-4"
                    >
                      {org}
                      <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  ) : (
                    org
                  )}
                </h3>
                <p className="text-sm text-muted-foreground">{pick(item.title, locale)}</p>

                {item.highlights ? <Highlights items={pick(item.highlights, locale)} /> : null}

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
                        <Highlights items={pick(entry.highlights, locale)} />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
