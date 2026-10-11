"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FolderGit2, House, Mail, PenLine, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { isActivePath, type NavItem } from "./header";

const ICONS = [House, User, FolderGit2, PenLine, Mail];

/**
 * Bottom tab bar for narrow screens. Items are 44px+ touch targets and the bar
 * respects the home-indicator safe area.
 */
export function MobileDock({
  homeHref,
  nav,
  label,
}: {
  homeHref: string;
  nav: NavItem[];
  label: string;
}) {
  const pathname = usePathname();
  return (
    <nav
      aria-label={label}
      className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
    >
      <ul className="glass mx-auto grid h-14 max-w-sm grid-cols-5 rounded-2xl shadow-[0_8px_30px_-12px_oklch(0_0_0/0.3)]">
        {nav.map(({ href, label }, i) => {
          const Icon = ICONS[i] ?? House;
          const active = isActivePath(pathname, href, homeHref);
          return (
            <li key={href} className="flex">
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex flex-1 flex-col items-center justify-center gap-0.5 rounded-xl text-[10px] font-medium transition-colors",
                  active ? "text-foreground" : "text-muted-foreground",
                )}
              >
                <Icon className="size-5" strokeWidth={active ? 2.25 : 1.75} />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
