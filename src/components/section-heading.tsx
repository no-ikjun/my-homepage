import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Small-caps label + optional trailing link. Used at the top of every
 * content section so the rhythm is identical across pages.
 */
export function SectionHeading({
  id,
  children,
  action,
  aside,
  className,
}: {
  id?: string;
  children: ReactNode;
  action?: { href: string; label: string };
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-6 flex items-baseline justify-between gap-4", className)}>
      <h2
        id={id}
        className="flex items-center gap-2 font-mono text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase"
      >
        {children}
      </h2>
      {action ? (
        <Link
          href={action.href}
          className="group inline-flex items-center gap-0.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {action.label}
          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-px group-hover:-translate-y-px" />
        </Link>
      ) : aside ? (
        <span className="text-xs text-muted-foreground">{aside}</span>
      ) : null}
    </div>
  );
}
