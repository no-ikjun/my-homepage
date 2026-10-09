import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/**
 * Renders a plain string, turning `[label](https://…)` into links. Internal
 * paths ("/projects/x") open in place; everything else opens in a new tab.
 * Used for content strings in src/data so a highlight or summary can carry a
 * link without changing its type.
 */
export function InlineText({ text, className }: { text: string; className?: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    const [whole, label, href] = m;
    const i = m.index ?? 0;
    if (i > last) parts.push(text.slice(last, i));
    const external = /^https?:\/\//.test(href);
    parts.push(
      <a
        key={i}
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={cn(
          "underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-brand",
          className,
        )}
      >
        {label}
      </a>,
    );
    last = i + whole.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
