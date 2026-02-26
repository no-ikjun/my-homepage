"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import LinkIcon, { LinkType } from "@/components/link_icon";
import { BadgeChip } from "@/components/ui";
import { useLanguage, useTranslations } from "@/contexts/language-context";
import { homeRecentActivities } from "@/data/home-recent-activities";

const kindLabel: Record<"ko" | "en", Record<string, string>> = {
  ko: {
    career: "실무",
    project: "프로젝트",
    award: "수상",
    activity: "활동",
    writing: "글",
  },
  en: {
    career: "Career",
    project: "Project",
    award: "Award",
    activity: "Activity",
    writing: "Writing",
  },
};

export default function Home() {
  const t = useTranslations();
  const { lang } = useLanguage();
  const recentItems = homeRecentActivities[lang];

  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className={styles.heroCard}>
          <div className={styles.heroTop}>
            <Image
              className={styles.profileImage}
              src="/img/profile_round3.png"
              alt="Ikjun Choi"
              width={300}
              height={300}
              priority
              sizes="72px"
            />
            <div className={styles.heroIdentity}>
              <h1 className={styles.heroName}>Ikjun Choi</h1>
              <p className={styles.heroNameKr}>최익준</p>
            </div>
          </div>

          <BadgeChip tone="accent">{t.homeRole}</BadgeChip>

          <p className={styles.heroDescription}>{t.homeDescription}</p>

          <div className={styles.socialRow} aria-label="Social links">
            <LinkIcon linkType={LinkType.Mail} />
            <LinkIcon linkType={LinkType.Github} />
            <LinkIcon linkType={LinkType.LinkedIn} />
            <LinkIcon linkType={LinkType.Instagram} />
          </div>
        </div>
      </section>

      <section
        className={styles.section}
        aria-labelledby="recent-activity-title"
      >
        <div className={styles.sectionHead}>
          <h2 id="recent-activity-title" className={styles.sectionTitle}>
            {t.homeRecentTitle}
          </h2>
          <p className={styles.sectionDescription}>{t.homeRecentDescription}</p>
        </div>

        <ul className={styles.recentList}>
          {recentItems.map((item) => {
            return (
              <li key={item.id} className={styles.recentItem}>
                <span className={styles.recentDate}>{item.date}</span>
                {item.internal ? (
                  <Link href={item.href} className={styles.recentLink}>
                    <div className={styles.recentBody}>
                      <div className={styles.recentTopLine}>
                        <BadgeChip size="sm" tone="muted">
                          {kindLabel[lang][item.kind] ?? item.kind}
                        </BadgeChip>
                        <h3 className={styles.recentTitle}>{item.title}</h3>
                      </div>
                      <p className={styles.recentSummary}>{item.summary}</p>
                    </div>
                    <span className={styles.recentArrow}>↗</span>
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={styles.recentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={styles.recentBody}>
                      <div className={styles.recentTopLine}>
                        <BadgeChip size="sm" tone="muted">
                          {kindLabel[lang][item.kind] ?? item.kind}
                        </BadgeChip>
                        <h3 className={styles.recentTitle}>{item.title}</h3>
                      </div>
                      <p className={styles.recentSummary}>{item.summary}</p>
                    </div>
                    <span className={styles.recentArrow}>↗</span>
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="quick-links-title">
        <div className={styles.sectionHead}>
          <h2 id="quick-links-title" className={styles.sectionTitle}>
            {t.homeQuickLinksTitle}
          </h2>
        </div>

        <ul className={styles.quickLinkList}>
          <li>
            <Link href="/about" className={styles.quickLink}>
              <span className={styles.quickLinkLabel}>{t.navAbout}</span>
              <span className={styles.quickLinkText}>
                {t.aboutPageDescription}
              </span>
              <span className={styles.quickLinkArrow}>↗</span>
            </Link>
          </li>
          <li>
            <Link href="/projects" className={styles.quickLink}>
              <span className={styles.quickLinkLabel}>{t.navProjects}</span>
              <span className={styles.quickLinkText}>
                {t.projectsPageDescription}
              </span>
              <span className={styles.quickLinkArrow}>↗</span>
            </Link>
          </li>
          <li>
            <Link href="/writings" className={styles.quickLink}>
              <span className={styles.quickLinkLabel}>{t.navWritings}</span>
              <span className={styles.quickLinkText}>
                {lang === "ko"
                  ? "개발과 제품 개발 과정에서 배운 점을 정리하는 글 아카이브입니다."
                  : "A writing archive for technical notes and product-building lessons."}
              </span>
              <span className={styles.quickLinkArrow}>↗</span>
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.quickLink}>
              <span className={styles.quickLinkLabel}>{t.navContact}</span>
              <span className={styles.quickLinkText}>
                {t.contactPageDescription}
              </span>
              <span className={styles.quickLinkArrow}>↗</span>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
