import styles from "../[locale]/experiences/page.module.css";
import DetailExperience from "./detail_experience";

type ExperienceBoxProps = {
  title: string;
  data: {
    title: string;
    link: string;
    description: string;
    subDescription: string;
    content: string[];
  }[];
};

export default function ExperienceBox({ title, data }: ExperienceBoxProps) {
  return (
    <div className={styles.content}>
      <h2 className={styles.content_title}>{title}</h2>
      <DetailExperience data={data} />
    </div>
  );
}
