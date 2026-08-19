"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitch from "./language_switch";
import ThemeToggle from "./theme_toggle";
import styles from "./header.module.css";

export type NavId = "home" | "about" | "projects" | "writings" | "contact";

export type HeaderNavItem = { id: NavId; href: string; label: string };

type HeaderProps = {
  homeHref: string;
  nav: HeaderNavItem[];
  themeLabel: string;
  languageLabel: string;
};

/**
 * Tab icons. Drawn on the same 24px grid with a single stroke weight so the
 * row reads as one set rather than five borrowed glyphs.
 */
const NAV_ICONS: Record<NavId, ReactNode> = {
  home: (
    <>
      <path d="M3.5 10.5 12 3.75l8.5 6.75" />
      <path d="M5.5 9.5v9.25a.75.75 0 0 0 .75.75h11.5a.75.75 0 0 0 .75-.75V9.5" />
    </>
  ),
  about: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.75 19.5a7.25 7.25 0 0 1 14.5 0" />
    </>
  ),
  projects: (
    <>
      <rect x="3.75" y="3.75" width="7" height="7" rx="2" />
      <rect x="13.25" y="3.75" width="7" height="7" rx="2" />
      <rect x="3.75" y="13.25" width="7" height="7" rx="2" />
      <rect x="13.25" y="13.25" width="7" height="7" rx="2" />
    </>
  ),
  writings: (
    <>
      <path d="M5 4.75h9.5l4.5 4.5v10a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75V5.5A.75.75 0 0 1 5 4.75Z" />
      <path d="M14 4.75V9.5h5" />
      <path d="M8 13.5h8M8 16.75h5.5" />
    </>
  ),
  contact: (
    <>
      <rect x="3.25" y="5.25" width="17.5" height="13.5" rx="2.5" />
      <path d="m4.5 7.5 6.4 4.6a2 2 0 0 0 2.2 0l6.4-4.6" />
    </>
  ),
};

function NavIcon({ id }: { id: NavId }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {NAV_ICONS[id]}
    </svg>
  );
}

export default function Header({
  homeHref,
  nav,
  themeLabel,
  languageLabel,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === homeHref) return pathname === homeHref;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
      >
        <div
          className={`${styles.headerDock} ${scrolled ? styles.headerDockScrolled : ""}`}
        >
          <div className={styles.headerTop}>
            <Link
              href={homeHref}
              className={styles.brand}
              aria-label="Go to home"
            >
              <span className={styles.brandAvatarWrap}>
                <Image
                  className={styles.brandAvatar}
                  src="/img/profile_round3.png"
                  alt="Ikjun Choi"
                  width={30}
                  height={30}
                  priority
                />
              </span>
              <span className={styles.brandText}>
                <span className={styles.brandName}>Ikjun Choi</span>
                <span className={styles.brandRole}>Product Engineer</span>
              </span>
            </Link>
            <nav aria-label="Primary" className={styles.nav}>
              <ul className={styles.navList}>
                {nav.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`${styles.navLink} ${
                        isActive(href) ? styles.navLinkActive : ""
                      }`}
                      aria-current={isActive(href) ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={styles.utilityWrap}>
              <ThemeToggle label={themeLabel} />
              <LanguageSwitch label={languageLabel} />
            </div>
          </div>
        </div>
      </header>

      {/*
        On a phone the same destinations live in a tab bar at the bottom, within
        thumb reach, instead of a row of pills that had to scroll sideways. It
        is a second rendering of one nav, so it is hidden from assistive tech
        above the breakpoint and the dock's nav is hidden below it - never both.
      */}
      <nav aria-label="Primary" className={styles.tabBar}>
        {nav.map(({ id, href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${styles.tabItem} ${
              isActive(href) ? styles.tabItemActive : ""
            }`}
            aria-current={isActive(href) ? "page" : undefined}
          >
            <NavIcon id={id} />
            <span className={styles.tabLabel}>{label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
