import Link from "next/link";
import styles from "../app/page.module.css";
import Image from "next/image";
import LocaleSwitcher from "./locale_switcher";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Link href={"/"} className={styles.header_logo}>
          <span className={styles.logo_name}>ikjun.com</span>
          <Image
            className={styles.nav_profile_image}
            src="/img/profile_round3.png"
            alt="Ikjun Choi"
            width={30}
            height={30}
          />
        </Link>

        <nav>
          <ul className={styles.header_nav}>
            <li className={styles.header_nav_item}>
              <Link href="/careers">Careers</Link>
            </li>
            <li className={styles.header_nav_item}>
              <Link href="/experiences">Experiences</Link>
            </li>
            <li className={styles.header_nav_item}>
              <Link href="/projects">Projects</Link>
            </li>
            <LocaleSwitcher />
          </ul>
        </nav>
      </div>
    </header>
  );
}
