"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LanguageToggle from "./language_toggle";
import ThemeToggle from "./theme_toggle";
import { useTranslations } from "@/contexts/language-context";
import styles from "./header.module.css";

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

  return (
    <header className={styles.header}>
      <div
        className={`${styles.headerDock} ${scrolled ? styles.headerDockScrolled : ""}`}
      >
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

        <div className={styles.navWrap}>
          <nav aria-label="Primary">
            <ul className={styles.navList}>
              <li>
                <Link
                  href="/"
                  className={`${styles.navLink} ${
                    isActive("/") ? styles.navLinkActive : ""
                  }`}
                  aria-current={isActive("/") ? "page" : undefined}
                >
                  {t.navHome}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`${styles.navLink} ${
                    isActive("/about") ? styles.navLinkActive : ""
                  }`}
                  aria-current={isActive("/about") ? "page" : undefined}
                >
                  {t.navAbout}
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={`${styles.navLink} ${
                    isActive("/projects") ? styles.navLinkActive : ""
                  }`}
                  aria-current={isActive("/projects") ? "page" : undefined}
                >
                  {t.navProjects}
                </Link>
              </li>
              <li>
                <Link
                  href="/writings"
                  className={`${styles.navLink} ${
                    isActive("/writings") ? styles.navLinkActive : ""
                  }`}
                  aria-current={isActive("/writings") ? "page" : undefined}
                >
                  {t.navWritings}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`${styles.navLink} ${
                    isActive("/contact") ? styles.navLinkActive : ""
                  }`}
                  aria-current={isActive("/contact") ? "page" : undefined}
                >
                  {t.navContact}
                </Link>
              </li>
            </ul>
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
