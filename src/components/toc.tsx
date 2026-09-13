"use client";

import { useEffect, useState } from "react";
import type { WritingHeading } from "@/types/writing";
import { cn } from "@/lib/utils";

/** Sticky in-page navigation; highlights the heading currently in view. */
export function Toc({ headings, label }: { headings: WritingHeading[]; label: string }) {
  const [active, setActive] = useState<string | null>(headings[0]?.id ?? null);

  useEffect(() => {
    const targets = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!targets.length) return;

    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.set(e.target.id, e.boundingClientRect.top);
          else visible.delete(e.target.id);
        }
        if (visible.size) {
          const top = [...visible.entries()].sort((a, b) => a[1] - b[1])[0][0];
          setActive(top);
        }
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <nav aria-label={label} className="text-sm">
      <p className="mb-3 font-medium">{label}</p>
      <ul className="space-y-1.5">
        {headings.map((h) => (
          <li key={h.id} className={cn(h.depth === 3 && "pl-3")}>
            <a
              href={`#${h.id}`}
              aria-current={active === h.id ? "location" : undefined}
              className={cn(
                "block leading-snug transition-colors",
                active === h.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
