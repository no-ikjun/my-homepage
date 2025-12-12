"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import LinkIcon, { LinkType } from "@/components/link_icon";
import { useTranslations } from "@/contexts/language-context";
import { Fragment } from "react";

export default function Home() {
  const t = useTranslations();

  const renderMultiline = (text: string) =>
    text.split("\n").map((line, idx, arr) => (
      <Fragment key={`${line}-${idx}`}>
        {line}
        {idx < arr.length - 1 && <br />}
      </Fragment>
    ));

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
          <p className={styles.role}>{t.homeRole}</p>
          <p className={styles.description}>{t.homeDescription}</p>

          <div className={styles.contact}>
            <LinkIcon linkType={LinkType.Mail} />
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
              {t.ctaViewProjects}
            </Link>
            <Link
              href="mailto:choiikjun1101@gmail.com?subject=Hello%20Ikjun"
              className={styles.cta_button}
              aria-label="Contact via email (opens mail app)"
            >
              {t.ctaContactMe}
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom_container}>
        <Link href="/careers" className={styles.link_template}>
          <h2 className={styles.link_title}>
            {t.sectionCareersTitle}
            <span className={styles.blank}></span>&rarr;
          </h2>
          <p className={styles.link_description}>
            {renderMultiline(t.sectionCareersDescription)}
          </p>
        </Link>

        <Link href="/experiences" className={styles.link_template}>
          <h2 className={styles.link_title}>
            {t.sectionExperiencesTitle}
            <span className={styles.blank}></span>&rarr;
          </h2>
          <p className={styles.link_description}>
            {t.sectionExperiencesDescription}
          </p>
        </Link>

        <Link href="/projects" className={styles.link_template}>
          <h2 className={styles.link_title}>
            {t.sectionProjectsTitle}
            <span className={styles.blank}></span>&rarr;
          </h2>
          <p className={styles.link_description}>
            {renderMultiline(t.sectionProjectsDescription)}
          </p>
        </Link>
      </div>

      <p className={styles.copyright}>{t.copyright}</p>
    </main>
  );
}
