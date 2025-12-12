"use client";

import styles from "./page.module.css";
import { careers } from "./data";
import Image from "next/image";
import Link from "next/link";
import { useLanguage, useTranslations } from "@/contexts/language-context";

export default function CareersPage() {
  const { lang } = useLanguage();
  const t = useTranslations();

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.back_button}>
          <p className={styles.left_arrow}>&larr;</p>
        </Link>
        <div className={styles.title_container}>
          <h1 className={styles.title}>{t.careersPageTitle}</h1>
          <p className={styles.description}>{t.careersPageDescription}</p>
        </div>
        <div className={styles.career_list}>
          {careers[lang].map((item) => (
            <div className={styles.career_card} key={item.title}>
              <div className={styles.career_item}>
                <div className={styles.career_left}>
                  <div
                    className={styles.career_logo}
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                </div>
                <div className={styles.career_right}>
                  <div className={styles.career_header}>
                    <h3 className={styles.career_company}>
                      {item.link !== "" ? (
                        <Link
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.career_link}
                        >
                          {item.title} ↗
                        </Link>
                      ) : (
                        item.title
                      )}
                    </h3>
                    <p className={styles.career_date}>{item.description}</p>
                  </div>
                  <span className={styles.career_role}>
                    {item.subDescription}
                  </span>
                  {item.content.map((project) => (
                    <div className={styles.project_block} key={project.title}>
                      <div className={styles.project_header}>
                        <h4 className={styles.project_title}>
                          {project.title}
                        </h4>
                        <span className={styles.project_period}>
                          {project.period}
                        </span>
                      </div>
                      <p className={styles.project_description}>
                        {project.description}
                      </p>
                      <ul className={styles.project_list}>
                        {project.content.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
