import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Title + one-line description at the top of every inner page. */
export function PageHeader({
  title,
  description,
  children,
  className,
}: {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("max-w-content pt-6 pb-12 md:pt-10 md:pb-16", className)}>
      <h1 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">{title}</h1>
      {description ? (
        <p className="mt-3 text-lg text-muted-foreground text-pretty">{description}</p>
      ) : null}
      {children}
    </header>
  );
}
