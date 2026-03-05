"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { careers } from "@/data/careers";
import { activities, awards, educations } from "@/data/experiences";
import { useLanguage, useTranslations } from "@/contexts/language-context";
import { PageHero } from "@/components/ui";
import EducationsBox from "@/components/educations_box";
import AwardsBox from "@/components/awards_box";
import ActivitiesBox from "@/components/activities_box";

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = useTranslations();
  const careerItems = careers[lang];

  const workingPrinciples =
    lang === "ko"
      ? [
          "문제를 먼저 정의하고, 해결책은 가능한 단순하게 설계합니다.",
          "작게 만들고 빠르게 검증하는 반복을 선호합니다.",
          "가설을 세우고 실험으로 검증하는 방식을 중요하게 생각합니다.",
          "제품 관점과 개발 관점을 함께 보고 의사결정합니다.",
        ]
      : [
          "Define the problem first, then design the simplest possible solution.",
          "Prefer small releases and fast validation loops.",
          "Value forming hypotheses and validating them through experiments.",
          "Make decisions from both product and engineering perspectives.",
        ];

  return (
    <main className={styles.main}>
      <div className={styles.shell}>
        <PageHero
          title={t.aboutPageTitle}
          description={t.aboutPageDescription}
        />

        <section className={styles.section}>
          <div className={styles.sectionGrid}>
            <div>
              <h2 className={styles.sectionTitle}>{t.aboutInterestsTitle}</h2>
              <p className={styles.sectionDescription}>
                {t.aboutInterestsDescription}
              </p>
              <div className={styles.interestsText}>
                {t.aboutInterestsContent
                  .split(/\n\n+/)
                  .filter(Boolean)
                  .map((paragraph, i) => (
                    <p key={i}>{paragraph.trim()}</p>
                  ))}
              </div>
            </div>

            <div>
              <h2 className={styles.sectionTitle}>{t.aboutWorkingStyleTitle}</h2>
              <ul className={styles.principlesList}>
                {workingPrinciples.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="career" className={styles.section}>
          <div className={styles.sectionHeaderRow}>
            <h2 className={styles.sectionTitle}>{t.sectionCareersTitle}</h2>
          </div>

          <div className={styles.careerPanel}>
            <ul className={styles.careerList}>
              {careerItems.map((item) => (
                <li key={item.title} className={styles.careerItem}>
                  <span className={styles.careerTimeline} aria-hidden="true" />
                  <div className={styles.careerLeftCol}>
                    <span className={styles.careerPeriod}>{item.description}</span>
                    <div className={styles.careerCompany}>
                      <div
                        className={styles.careerLogo}
                        style={{ backgroundImage: `url(${item.image})` }}
                        aria-hidden="true"
                      />
                      <div>
                        <h3 className={styles.careerTitle}>
                          {item.link ? (
                            <Link
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.inlineLink}
                            >
                              {item.title} ↗
                            </Link>
                          ) : (
                            item.title
                          )}
                        </h3>
                        <p className={styles.careerRole}>{item.subDescription}</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.careerProjectsCol}>
                    {item.content.map((project) => (
                      <div key={project.title} className={styles.projectEntry}>
                        <h4 className={styles.projectEntryTitle}>{project.title}</h4>
                        <span className={styles.projectEntryPeriod}>{project.period}</span>
                        <p className={styles.projectEntryDescription}>{project.description}</p>
                        <ul className={styles.projectEntryList}>
                          {project.content.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="education" className={styles.section}>
          <EducationsBox title={t.educationsTitle} data={educations[lang]} />
        </section>

        <section id="awards" className={styles.section}>
          <AwardsBox title={t.awardsTitle} data={awards[lang]} />
        </section>

        <section id="activities" className={styles.section}>
          <ActivitiesBox
            title={t.activitiesTitle}
            data={activities[lang]}
            moreInfoLabel={t.activityMoreInfo}
          />
        </section>
      </div>
    </main>
  );
}
