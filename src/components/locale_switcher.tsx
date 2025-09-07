"use client";

import styles from "../app/page.module.css";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const setLocale = (to: "ko" | "en") => {
    // Navigate to same path with a one-off locale param; middleware sets cookie and strips it
    const url = new URL(window.location.href);
    url.searchParams.set("locale", to);
    router.replace(url.pathname + "?" + url.searchParams.toString());
  };

  return (
    <div className={styles.language_switcher}>
      <button
        onClick={() => setLocale("ko")}
        aria-label="Switch to Korean"
        style={{
          background: "transparent",
          border: 0,
          padding: 0,
          cursor: "pointer",
        }}
      >
        <Image
          src="/img/ko_flag.svg"
          alt="Korean"
          width={24}
          height={24}
          style={{ marginRight: "8px", opacity: locale === "ko" ? 1 : 0.6 }}
        />
      </button>
      <button
        onClick={() => setLocale("en")}
        aria-label="Switch to English"
        style={{
          background: "transparent",
          border: 0,
          padding: 0,
          cursor: "pointer",
        }}
      >
        <Image
          src="/img/us_flag.svg"
          alt="English"
          width={24}
          height={24}
          style={{ opacity: locale === "en" ? 1 : 0.6 }}
        />
      </button>
    </div>
  );
}
