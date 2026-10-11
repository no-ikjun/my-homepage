import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Section title with an optional trailing link. Same rhythm on every page. */
export function SectionHeading({
  id,
  children,
  action,
  className,
}: {
  id?: string;
  children: ReactNode;
  action?: { href: string; label: string };
  className?: string;
}) {
  return (
    <div className={cn("mb-6 flex items-baseline justify-between gap-4", className)}>
      <h2 id={id} className="text-xl font-semibold tracking-tight">
        {children}
      </h2>
      {action ? (
        <Link
          href={action.href}
          className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          {action.label}
        </Link>
      ) : null}
    </div>
  );
}
