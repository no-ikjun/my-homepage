"use client";

import { useLanguage, useTranslations } from "@/contexts/language-context";
import styles from "../app/page.module.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function LanguageToggle() {
  const { lang, setLanguage } = useLanguage();
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const buttonLabel = lang === "ko" ? "언어선택" : "Language";

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div className={styles.language_dropdown} ref={menuRef}>
      <button
        type="button"
        className={styles.language_toggle}
        onClick={() => setOpen((v) => !v)}
        aria-label={t.languageToggleLabel}
        aria-expanded={open}
      >
        <span className={styles.language_label}>{buttonLabel}</span>
      </button>
      {open && (
        <div className={styles.language_menu} role="menu">
          <button
            type="button"
            className={`${styles.language_menu_item} ${
              lang === "ko" ? styles.language_menu_active : ""
            }`}
            onClick={() => {
              setLanguage("ko");
              setOpen(false);
            }}
          >
            <span className={styles.language_icon_wrap}>
              <Image
                src="/img/south-korea.svg"
                alt="한국어"
                width={20}
                height={14}
              />
            </span>
            한국어
          </button>
          <button
            type="button"
            className={`${styles.language_menu_item} ${
              lang === "en" ? styles.language_menu_active : ""
            }`}
            onClick={() => {
              setLanguage("en");
              setOpen(false);
            }}
          >
            <span className={styles.language_icon_wrap}>
              <Image
                src="/img/united-states.svg"
                alt="English"
                width={20}
                height={14}
              />
            </span>
            English
          </button>
        </div>
      )}
    </div>
  );
}
