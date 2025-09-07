import styles from "./page.module.css";
import ExperienceBox from "@/components/experience_box";
import { getLocale } from "next-intl/server";
import Link from "next/link";
import AwardsBox from "@/components/awards_box";
import EducationsBox from "@/components/educations_box";
import ActivitiesBox from "@/components/activities_box";

export default async function ExperiencePage() {
  const locale = await getLocale();
  const mod = await import(`./data.${locale}`).catch(() => import("./data.en"));
  const { activities, educations, awards } = mod as typeof import("./data.en");
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
