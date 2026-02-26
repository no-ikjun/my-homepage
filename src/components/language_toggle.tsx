"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations, useLanguage } from "@/contexts/language-context";
import styles from "./language_toggle.module.css";

export default function LanguageToggle() {
  const { lang, setLanguage } = useLanguage();
  const t = useTranslations();
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

  const buttonLabel = lang === "ko" ? "KO" : "EN";

  return (
    <div className={styles.root} ref={menuRef}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((v) => !v)}
        aria-label={t.languageToggleLabel}
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
          <button
            type="button"
            className={`${styles.item} ${lang === "ko" ? styles.itemActive : ""}`}
            onClick={() => {
              setLanguage("ko");
              setOpen(false);
            }}
            role="menuitem"
          >
            <span className={styles.flag}>
              <Image src="/img/south-korea.svg" alt="" width={26} height={18} />
            </span>
            한국어
          </button>
          <button
            type="button"
            className={`${styles.item} ${lang === "en" ? styles.itemActive : ""}`}
            onClick={() => {
              setLanguage("en");
              setOpen(false);
            }}
            role="menuitem"
          >
            <span className={styles.flag}>
              <Image src="/img/united-states.svg" alt="" width={26} height={18} />
            </span>
            English
          </button>
        </div>
      ) : null}
    </div>
  );
}
