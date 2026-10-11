"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/format";
import { localePath, type Locale } from "@/lib/locale";
import { WRITING_CATEGORIES, type WritingCategory, type WritingMeta } from "@/types/writing";

type Filter = WritingCategory | "all";

/**
 * Category tabs over a year-grouped list. Filtering is client-side so the
 * page stays static; the chosen tab is mirrored into ?category= so a link
 * can land on a shelf.
 */
export function WritingList({
  writings,
  locale,
  labels,
}: {
  writings: WritingMeta[];
  locale: Locale;
  labels: {
    all: string;
    categories: Record<WritingCategory, string>;
  };
}) {
  const [filter, setFilter] = useState<Filter>("all");

  // The server renders "all"; the query string is only known on the client,
  // so the tab is corrected right after mount (same pattern as the theme).
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const c = new URLSearchParams(window.location.search).get("category");
    if (c && (WRITING_CATEGORIES as readonly string[]).includes(c)) setFilter(c as WritingCategory);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  const select = (next: Filter) => {
    setFilter(next);
    const url = new URL(window.location.href);
    if (next === "all") url.searchParams.delete("category");
    else url.searchParams.set("category", next);
    window.history.replaceState(null, "", url);
  };

  const counts = useMemo(() => {
    const c: Record<Filter, number> = { all: writings.length, research: 0, engineering: 0, notes: 0 };
    for (const w of writings) c[w.category ?? "notes"] += 1;
    return c;
  }, [writings]);

  const visible = filter === "all" ? writings : writings.filter((w) => (w.category ?? "notes") === filter);

  const byYear = useMemo(() => {
    const groups = new Map<string, WritingMeta[]>();
    for (const w of visible) {
      const y = w.date.slice(0, 4);
      groups.set(y, [...(groups.get(y) ?? []), w]);
    }
    return [...groups.entries()];
  }, [visible]);

  const tabs: Filter[] = ["all", ...WRITING_CATEGORIES];

  return (
    <div>
      <div role="tablist" className="flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const active = tab === filter;
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => select(tab)}
              className={cn(
                "inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-full border px-3 text-sm transition-colors",
                active
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground",
              )}
            >
              {tab === "all" ? labels.all : labels.categories[tab]}
              <span className={cn("text-xs tabular-nums", active ? "text-background/70" : "text-muted-foreground/70")}>
                {counts[tab]}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 space-y-12">
        {byYear.map(([year, items]) => (
          <section key={year} aria-label={year}>
            <h2 className="mb-3 text-xl font-semibold tracking-tight tabular-nums">{year}</h2>
            <ul className="divide-y divide-border">
              {items.map((w) => (
                <li key={w.slug}>
                  <Link
                    href={localePath(locale, `/writings/${w.slug}`)}
                    lang={w.lang}
                    className="group -mx-3 grid gap-1 rounded-lg px-3 py-4 transition-colors hover:bg-foreground/[0.03] md:grid-cols-[7.5rem_1fr_auto] md:gap-6"
                  >
                    <time dateTime={w.date} className="text-sm text-muted-foreground tabular-nums md:pt-0.5">
                      {formatDate(w.date, locale)}
                    </time>
                    <span className="min-w-0">
                      <span className="block font-medium">
                        {w.title}
                        {w.lang !== locale ? (
                          <span lang={locale} className="ml-2 align-middle text-xs font-normal text-muted-foreground uppercase">
                            {w.lang}
                          </span>
                        ) : null}
                      </span>
                      {w.summary ? (
                        <span className="mt-1 block text-sm leading-relaxed text-muted-foreground text-pretty">
                          {w.summary}
                        </span>
                      ) : null}
                      <span className="mt-2 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                        <span className="rounded-md bg-muted px-1.5 py-0.5 text-foreground/80">
                          {labels.categories[w.category ?? "notes"]}
                        </span>
                        {w.tags?.map((tag) => (
                          <span key={tag} className="rounded-md bg-muted px-1.5 py-0.5">
                            {tag}
                          </span>
                        ))}
                      </span>
                    </span>
                    {w.cover ? (
                      <span className="relative mt-2 block aspect-square w-24 shrink-0 overflow-hidden rounded-lg bg-muted md:mt-0.5 md:w-20">
                        <Image
                          src={w.cover}
                          alt=""
                          fill
                          sizes="96px"
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        />
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
