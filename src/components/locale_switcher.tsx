import Link from "next/link";
import styles from "../app/page.module.css";

interface Props {
  currentLocale: string;
  pathname: string;
}

export default function LocaleSwitcher({ currentLocale, pathname }: Props) {
  const switchTo = currentLocale === "en" ? "ko" : "en";

  return (
    <Link href={pathname} locale={switchTo} className={styles.floating}>
      {switchTo === "ko" ? "🇰🇷 한국어" : "🇺🇸 English"}
    </Link>
  );
}
