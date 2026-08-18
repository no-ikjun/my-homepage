"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  localeFromPathname,
  localePath,
  neutralPath,
  type Locale,
} from "@/lib/locale";
import styles from "./language_switch.module.css";

const OPTIONS: { locale: Locale; label: string; flag: string }[] = [
  { locale: "ko", label: "한국어", flag: "/img/south-korea.svg" },
  { locale: "en", label: "English", flag: "/img/united-states.svg" },
];

/**
 * Same dropdown as before, but each option is a real link to the other
 * locale's URL so crawlers can follow it. The two locales live under separate
 * root layouts, so Next.js does a full document load when switching.
 */
export default function LanguageSwitch({ label }: { label: string }) {
  const pathname = usePathname();
  const current = localeFromPathname(pathname);
  const neutral = neutralPath(pathname);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onPointerDown = (e: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setOpen(false);
    };

    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    if (open) {
      document.addEventListener("mousedown", onPointerDown);
      document.addEventListener("keydown", onEscape);
    }

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  const buttonLabel = current === "ko" ? "KO" : "EN";

  return (
    <div className={styles.root} ref={menuRef}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((v) => !v)}
        aria-label={label}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <span>{buttonLabel}</span>
        <span className={styles.chevron} aria-hidden="true">
          ▾
        </span>
      </button>
      {open ? (
        <div className={styles.menu} role="menu">
          {OPTIONS.map((option) => (
            <Link
              key={option.locale}
              href={localePath(option.locale, neutral)}
              hrefLang={option.locale}
              role="menuitem"
              aria-current={option.locale === current ? "true" : undefined}
              className={`${styles.item} ${
                option.locale === current ? styles.itemActive : ""
              }`}
              onClick={() => setOpen(false)}
            >
              <span className={styles.flag}>
                <Image src={option.flag} alt="" width={26} height={18} />
              </span>
              {option.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
