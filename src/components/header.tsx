"use client";
import Link from "next/link";
import styles from "../app/page.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.header_scrolled : ""}`}>
      <div className={styles.header_container}>
        <Link href={"/"} className={styles.header_logo} aria-label="Go to home">
          <span className={styles.logo_name}>ikjun.com</span>
          <Image
            className={styles.nav_profile_image}
            src="/img/profile_round3.png"
            alt="Ikjun Choi"
            width={30}
            height={30}
            priority
          />
        </Link>

        <nav aria-label="Primary">
          <ul className={styles.header_nav}>
            <li className={styles.header_nav_item}>
              <Link
                href="/careers"
                // className={isActive("/careers") ? styles.active_nav : undefined}
                // aria-current={isActive("/careers") ? "page" : undefined}
              >
                Careers
              </Link>
            </li>
            <li className={styles.header_nav_item}>
              <Link
                href="/experiences"
                // className={
                //   isActive("/experiences") ? styles.active_nav : undefined
                // }
                // aria-current={isActive("/experiences") ? "page" : undefined}
              >
                Experiences
              </Link>
            </li>
            <li className={styles.header_nav_item}>
              <Link
                href="/projects"
                // className={
                //   isActive("/projects") ? styles.active_nav : undefined
                // }
                // aria-current={isActive("/projects") ? "page" : undefined}
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
