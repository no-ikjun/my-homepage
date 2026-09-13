"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPathname, localePath, neutralPath } from "@/lib/locale";
import { cn } from "@/lib/utils";

/**
 * A single link to the same page in the other locale. Real <a> so crawlers
 * can follow it; the two locales have separate root layouts so Next.js does a
 * full document load on switch.
 */
export function LocaleSwitch({ label, className }: { label: string; className?: string }) {
  const pathname = usePathname();
  const current = localeFromPathname(pathname);
  const other = current === "ko" ? "en" : "ko";
  return (
    <Link
      href={localePath(other, neutralPath(pathname))}
      hrefLang={other}
      lang={other}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex h-9 items-center rounded-full px-3 font-mono text-xs font-medium tracking-wide text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground",
        className,
      )}
    >
      {other === "ko" ? "한국어" : "EN"}
    </Link>
  );
}
