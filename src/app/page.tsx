import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import LinkIcon, { LinkType } from "@/components/link_icon";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.profile_wrap}>
          <Image
            className={styles.profile_image}
            src="/img/profile_round3.png"
            alt="Ikjun Choi"
            width={280}
            height={280}
            priority
            sizes="(max-width: 700px) 160px, 280px"
          />
        </div>
        <div className={styles.profile_container}>
          <h1 className={styles.title}>
            <span className={styles.light_title}>최익준</span>&nbsp;&nbsp;Ikjun
            Choi
          </h1>
          <p className={styles.role}>Software Developer</p>
          <p className={styles.description}>
            A founder-minded developer passionate about startups, focused on
            solving problems and executing fast. I build services
            end-to-end—from idea and planning to launch and continuous
            iteration.
          </p>
          <div className={styles.contact}>
            {/* <LinkIcon linkType={LinkType.Mail} /> */}
            <LinkIcon linkType={LinkType.Github} />
            <LinkIcon linkType={LinkType.LinkedIn} />
            <LinkIcon linkType={LinkType.Instagram} />
          </div>
          <div className={styles.cta_container}>
            <Link
              href="/projects"
              className={`${styles.cta_button} ${styles.cta_primary}`}
              aria-label="View Projects"
            >
              View Projects
            </Link>
            <Link
              href="mailto:choiikjun1101@gmail.com?subject=Hello%20Ikjun"
              className={styles.cta_button}
              aria-label="Contact via email (opens mail app)"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom_container}>
        <Link
          href="/careers"
          className={styles.nav_card}
          aria-label="Go to Careers"
        >
          <div className={styles.nav_card_header}>
            <h2 className={styles.nav_card_title}>Careers</h2>
            <span className={styles.nav_card_chevron} aria-hidden>
              →
            </span>
          </div>
          <p className={styles.nav_card_desc}>
            My careers since 2021. Including internships and full-time jobs.
          </p>
        </Link>
        <Link
          href="/experiences"
          className={styles.nav_card}
          aria-label="Go to Experiences"
        >
          <div className={styles.nav_card_header}>
            <h2 className={styles.nav_card_title}>Experiences</h2>
            <span className={styles.nav_card_chevron} aria-hidden>
              →
            </span>
          </div>
          <p className={styles.nav_card_desc}>
            Educations, awards, and extra activities I’ve participated in.
          </p>
        </Link>
        <Link
          href="/projects"
          className={styles.nav_card}
          aria-label="Go to Projects"
        >
          <div className={styles.nav_card_header}>
            <h2 className={styles.nav_card_title}>Projects</h2>
            <span className={styles.nav_card_chevron} aria-hidden>
              →
            </span>
          </div>
          <p className={styles.nav_card_desc}>
            My own web/app services and ongoing projects.
          </p>
        </Link>
      </div>
      <p className={styles.copyright}>
        © 2023 Ikjun Choi. All Rights Reserved.
      </p>
    </main>
  );
}
