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
          src="/img/profile_round3.png"
          alt="Ikjun Choi"
          width={280}
          height={280}
        />
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
            <LinkIcon linkType={LinkType.Mail} />
            <LinkIcon linkType={LinkType.Github} />
            <LinkIcon linkType={LinkType.LinkedIn} />
            <LinkIcon linkType={LinkType.Instagram} />
          </div>
        </div>
      </div>
      <div className={styles.bottom_container}>
        <Link href={`/careers`} className={styles.link_template}>
          <h2 className={styles.link_title}>
            Careers<span className={styles.blank}></span>&rarr;
          </h2>
          <p className={styles.link_description}>
            My careers since 2021.
            <br /> Including internships and full-time jobs
          </p>
        </Link>
        <Link href={`/experiences`} className={styles.link_template}>
          <h2 className={styles.link_title}>
            Experiences<span className={styles.blank}></span>&rarr;
          </h2>
          <p className={styles.link_description}>
            My experiences including educations, awards, and extra activities
          </p>
        </Link>
        <Link href={`/projects`} className={styles.link_template}>
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
