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
          "제품 관점과 개발 관점을 함께 보고 의사결정합니다.",
        ]
      : [
          "Define the problem first, then design the simplest possible solution.",
          "Prefer small releases and fast validation loops.",
          "Make decisions from both product and engineering perspectives.",
        ];

  return (
    <main className={styles.main}>
      <div className={styles.shell}>
        <PageHero
          kicker={t.navAbout}
          title={t.aboutPageTitle}
          description={t.aboutPageDescription}
        />

        <section className={styles.section}>
          <div className={styles.sectionGrid}>
            <div>
              <h2 className={styles.sectionTitle}>{t.aboutSummaryTitle}</h2>
              <p className={styles.sectionDescription}>{t.aboutSummaryDescription}</p>
              <div className={styles.summaryText}>
                <p>
                  {lang === "ko"
                    ? "스타트업 환경에 가까운 문제를 좋아하고, 제품 기획부터 개발·출시·개선까지 이어지는 흐름을 직접 다루는 것을 선호합니다."
                    : "I enjoy startup-like problems and prefer owning the flow from product planning to engineering, launch, and iteration."}
                </p>
                <p>
                  {lang === "ko"
                    ? "웹과 모바일 모두를 다루며, 팀 상황에 따라 프론트엔드·백엔드·데이터/AI 영역까지 넓게 대응합니다."
                    : "I work across web and mobile, and expand into backend, data, and AI work when the product context requires it."}
                </p>
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
            <p className={styles.sectionDescription}>{t.careersPageDescription}</p>
          </div>

          <div className={styles.careerList}>
            {careerItems.map((item) => (
              <article key={item.title} className={styles.careerRow}>
                <div className={styles.careerMetaCol}>
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
                    <p className={styles.careerDate}>{item.description}</p>
                    <p className={styles.careerRole}>{item.subDescription}</p>
                  </div>
                </div>

                <div className={styles.careerContentCol}>
                  {item.content.map((project) => (
                    <div key={project.title} className={styles.projectEntry}>
                      <div className={styles.projectEntryTop}>
                        <h4 className={styles.projectEntryTitle}>{project.title}</h4>
                        <span className={styles.projectEntryPeriod}>{project.period}</span>
                      </div>
                      <p className={styles.projectEntryDescription}>{project.description}</p>
                      <ul className={styles.projectEntryList}>
                        {project.content.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}
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
