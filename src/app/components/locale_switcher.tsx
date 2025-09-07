"use client";

import { Link, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import styles from "../[locale]/page.module.css";

export default function LocaleSwitcher() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const switchTo = currentLocale === "en" ? "ko" : "en";

  return (
    <Link href={pathname} locale={switchTo} className={styles.floating}>
      {switchTo === "ko" ? "🇰🇷 한국어" : "🇺🇸 English"}
    </Link>
  );
}
