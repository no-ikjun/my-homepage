"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LayoutGroup, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { LocaleSwitch } from "./locale-switch";
import { ThemeToggle } from "./theme-toggle";

export type NavItem = { href: string; label: string };

export function isActivePath(pathname: string, href: string, homeHref: string) {
  if (href === homeHref) return pathname === homeHref;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header({
  homeHref,
  name,
  avatar,
  nav,
  labels,
}: {
  homeHref: string;
  name: string;
  avatar: string;
  nav: NavItem[];
  labels: { primaryNav: string; themeToggle: string; localeSwitch: string; goHome: string };
}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-3 md:pt-4">
      <div
        className={cn(
          "glass mx-auto flex h-12 max-w-page items-center gap-1 rounded-full pr-1.5 pl-1.5 transition-shadow duration-300",
          scrolled ? "shadow-[0_8px_30px_-12px_oklch(0_0_0/0.25)]" : "shadow-none",
        )}
      >
        <Link
          href={homeHref}
          aria-label={labels.goHome}
          className="flex h-9 items-center gap-2.5 rounded-full pr-3 pl-1 transition-colors hover:bg-foreground/[0.06]"
        >
          <Image
            src={avatar}
            alt=""
            width={28}
            height={28}
            priority
            className="size-7 rounded-full object-cover"
          />
          <span className="text-sm font-medium tracking-tight">{name}</span>
        </Link>

        <nav aria-label={labels.primaryNav} className="hidden flex-1 justify-center md:flex">
          <LayoutGroup id="primary-nav">
            <ul className="flex items-center gap-0.5">
              {nav.map(({ href, label }) => {
                const active = isActivePath(pathname, href, homeHref);
                return (
                  <li key={href} className="relative">
                    <Link
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative z-10 inline-flex h-8 items-center rounded-full px-3 text-sm transition-colors",
                        active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {label}
                    </Link>
                    {active ? (
                      <motion.span
                        layoutId="nav-active"
                        aria-hidden
                        className="absolute inset-0 rounded-full bg-foreground/[0.06]"
                        transition={{ type: "spring", stiffness: 500, damping: 40 }}
                      />
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </LayoutGroup>
        </nav>

        <div className="ml-auto flex items-center gap-0.5 md:ml-0">
          <ThemeToggle label={labels.themeToggle} />
          <LocaleSwitch label={labels.localeSwitch} />
        </div>
      </div>
    </header>
  );
}
