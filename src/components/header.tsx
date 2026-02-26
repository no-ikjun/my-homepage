"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LanguageToggle from "./language_toggle";
import ThemeToggle from "./theme_toggle";
import { useTranslations } from "@/contexts/language-context";
import styles from "./header.module.css";

const navItems: { href: string; key: "navHome" | "navAbout" | "navProjects" | "navWritings" | "navContact" }[] = [
  { href: "/", key: "navHome" },
  { href: "/about", key: "navAbout" },
  { href: "/projects", key: "navProjects" },
  { href: "/writings", key: "navWritings" },
  { href: "/contact", key: "navContact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const t = useTranslations();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const navLinks = (
    <ul className={styles.navList}>
      {navItems.map(({ href, key }) => (
        <li key={href}>
          <Link
            href={href}
            className={`${styles.navLink} ${
              isActive(href) ? styles.navLinkActive : ""
            }`}
            aria-current={isActive(href) ? "page" : undefined}
          >
            {t[key]}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <header className={styles.header}>
      <div
        className={`${styles.headerDock} ${scrolled ? styles.headerDockScrolled : ""}`}
      >
        <div className={styles.headerTop}>
          <Link href="/" className={styles.brand} aria-label="Go to home">
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
              <span className={styles.brandRole}>Software Developer</span>
            </span>
          </Link>
          <nav aria-label="Primary" className={styles.nav}>
            {navLinks}
          </nav>
          <div className={styles.utilityWrap}>
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
