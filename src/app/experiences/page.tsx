"use client";

import styles from "./page.module.css";
import { activities, educations, awards } from "./data";
import Link from "next/link";
import AwardsBox from "@/components/awards_box";
import EducationsBox from "@/components/educations_box";
import ActivitiesBox from "@/components/activities_box";
import { useLanguage, useTranslations } from "@/contexts/language-context";

export default function ExperiencePage() {
  const { lang } = useLanguage();
  const t = useTranslations();

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.back_button}>
          <p className={styles.left_arrow}>&larr;</p>
        </Link>
        <div className={styles.title_container}>
          <h1 className={styles.title}>{t.experiencesPageTitle}</h1>
          <p className={styles.description}>{t.experiencesPageDescription}</p>
        </div>
        <div className={styles.content_container}>
          <EducationsBox title={t.educationsTitle} data={educations[lang]} />
          <AwardsBox title={t.awardsTitle} data={awards[lang]} />
          <ActivitiesBox
            title={t.activitiesTitle}
            data={activities[lang]}
            moreInfoLabel={t.activityMoreInfo}
          />
        </div>
      </div>
    </div>
  );
}
