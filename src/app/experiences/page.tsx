import styles from "./page.module.css";
import ExperienceBox from "@/components/experience_box";
import { experiences } from "./data";
import Link from "next/link";

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
          {experiences.map((topic) => (
            <ExperienceBox
              title={topic.topic}
              data={topic.content}
              key={topic.topic}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
