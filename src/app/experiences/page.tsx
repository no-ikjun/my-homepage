import styles from "./page.module.css";
import ExperienceBox from "@/components/experience_box";
import { activities, experiences, educations, awards } from "./data";
import Link from "next/link";
import AwardsBox from "@/components/awards_box";
import EducationsBox from "@/components/educations_box";
import ActivitiesBox from "@/components/activities_box";

export default function ExperiencePage() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.back_button}>
          <p className={styles.left_arrow}>&larr;</p>
        </Link>
        <div className={styles.title_container}>
          <h1 className={styles.title}>Experiences</h1>
          <p className={styles.description}>2021 ~ Present</p>
          <p className={styles.description}>Updated : 2024.06</p>
        </div>
        <div className={styles.content_container}>
          <EducationsBox data={educations} />
          <AwardsBox data={awards} />
          <ActivitiesBox data={activities} />
        </div>
      </div>
    </div>
  );
}
