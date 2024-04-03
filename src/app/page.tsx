import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import LinkIcon, { LinkType } from "@/components/link_icon";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Image
          className={styles.profile_image}
          src="/img/profile_round2.png"
          alt="Ikjun Choi"
          width={160}
          height={160}
        />
        <h1 className={styles.title}>
          <span className={styles.light_title}>최익준</span>&nbsp;&nbsp;Ikjun
          Choi
        </h1>
        <p className={styles.description}>🚀👨‍💻👍</p>
        <p className={styles.description}>
          I&apos;m interested in startups and developing services.
        </p>
        <p className={styles.description}>
          Look around my <Link href="/experiences">Experiences</Link> and&nbsp;
          <Link href="https://sprit-app.me">Projects</Link>
        </p>
        <div className={styles.contact}>
          <LinkIcon linkType={LinkType.Github} />
          <LinkIcon linkType={LinkType.LinkedIn} />
          <LinkIcon linkType={LinkType.Instagram} />
          <LinkIcon linkType={LinkType.Mail} />
        </div>
      </div>
      <div className={styles.bottom_container}>
        <Link href={`/experiences`} className={styles.link_template}>
          <h2 className={styles.link_title}>
            Experiences<span className={styles.blank}></span>&rarr;
          </h2>
          <p className={styles.link_description}>
            My experiences since 2021.
            <br /> Careers, Education, and Extra Activities
          </p>
        </Link>
        <Link href={`https://sprit-app.me`} className={styles.link_template}>
          <h2 className={styles.link_title}>
            Projects<span className={styles.blank}></span>&rarr;
          </h2>
          <p className={styles.link_description}>
            These are my own projects.
            <br /> Web/App services and ongoings projects
          </p>
        </Link>
      </div>
      <p className={styles.copyright}>
        © 2023 Ikjun Choi. All Rights Reserved.
      </p>
    </main>
  );
}
