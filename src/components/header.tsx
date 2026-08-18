"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitch from "./language_switch";
import ThemeToggle from "./theme_toggle";
import styles from "./header.module.css";

export type HeaderNavItem = { href: string; label: string };

type HeaderProps = {
  homeHref: string;
  nav: HeaderNavItem[];
  themeLabel: string;
  languageLabel: string;
};

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
    <header className={styles.header}>
      <div
        className={`${styles.headerDock} ${scrolled ? styles.headerDockScrolled : ""}`}
      >
        <div className={styles.headerTop}>
          <Link href={homeHref} className={styles.brand} aria-label="Go to home">
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
  );
}
