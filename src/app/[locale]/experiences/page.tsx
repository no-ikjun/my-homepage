import styles from "./page.module.css";
import ExperienceBox from "@/app/components/experience_box";
import { activities, educations, awards } from "./data";
import { Link } from "@/i18n/routing";
import AwardsBox from "@/app/components/awards_box";
import EducationsBox from "@/app/components/educations_box";
import ActivitiesBox from "@/app/components/activities_box";

export default function ExperiencePage() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.back_button}>
          <p className={styles.left_arrow}>&larr;</p>
        </Link>
        <div className={styles.title_container}>
          <h1 className={styles.title}>Experiences</h1>
          <p className={styles.description}>
            Experiences and activities that I have done
          </p>
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
