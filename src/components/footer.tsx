"use client";

import { useTranslations } from "@/contexts/language-context";
import styles from "./footer.module.css";

export default function Footer() {
  const t = useTranslations();
  return <footer className={styles.footer}>{t.copyright}</footer>;
}
