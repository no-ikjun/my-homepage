"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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

/** Gap between the trigger and the menu, matching the old `calc(100% + 0.45rem)`. */
const MENU_GAP = 7;

/**
 * Each option is a real link to the other locale's URL so crawlers can follow
 * it. The two locales live under separate root layouts, so Next.js does a full
 * document load when switching.
 *
 * The menu is rendered into document.body rather than inline: the header dock
 * has its own backdrop-filter, which establishes a Backdrop Root, and a
 * descendant can only blur what is painted inside that root. Portalling the
 * menu out lets its backdrop-filter blur the page behind it.
 */
export default function LanguageSwitch({ label }: { label: string }) {
  const pathname = usePathname();
  const current = localeFromPathname(pathname);
  const neutral = neutralPath(pathname);

  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const placeMenu = () => {
    const rect = triggerRef.current?.getBoundingClientRect();
    if (!rect) return;
    // Anchored to the trigger's own edges only. Deriving `right` from the
    // viewport width would be off by the scrollbar and needs innerWidth, which
    // is not always meaningful; CSS translateX(-100%) does the right-alignment.
    setPos({ top: rect.bottom + MENU_GAP, left: rect.right });
  };

  const toggle = () => {
    if (open) {
      setOpen(false);
      return;
    }
    placeMenu();
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (rootRef.current?.contains(target)) return;
      if (menuRef.current?.contains(target)) return;
      setOpen(false);
    };

    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    window.addEventListener("resize", placeMenu);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
      window.removeEventListener("resize", placeMenu);
    };
  }, [open]);

  const buttonLabel = current === "ko" ? "KO" : "EN";

  const menu =
    open && pos ? (
      <div
        ref={menuRef}
        className={styles.menu}
        style={{ top: pos.top, left: pos.left }}
        role="menu"
      >
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
    ) : null;

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        onClick={toggle}
        aria-label={label}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <span>{buttonLabel}</span>
        <span className={styles.chevron} aria-hidden="true">
          ▾
        </span>
      </button>
      {menu ? createPortal(menu, document.body) : null}
    </div>
  );
}
