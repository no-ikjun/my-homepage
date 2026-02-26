import type { ActivityItem } from "@/data/experiences";
import styles from "../app/experiences/page.module.css";
import Link from "next/link";

type ActivitiesBoxProps = {
  title: string;
  moreInfoLabel: string;
  data: ActivityItem[];
};

export default function ActivitiesBox({
  data,
  title,
  moreInfoLabel,
}: ActivitiesBoxProps) {
  return (
    <span>
      <h2 className={styles.content_title}>{title}</h2>
      <div className={styles.activities_container}>
        {data.map((item) => (
          <div className={styles.activity_row} key={item.title}>
            <div className={styles.activity_left}>
              {item.image && (
                <div
                  className={styles.activity_logo}
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                />
              )}
              <div>
                <h3 className={styles.activity_title}>
                  {item.title}
                  {item.link && (
                    <Link
                      href={item.link}
                      className={styles.activity_button}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className={styles.activity_button_icon}>
                        {moreInfoLabel}
                      </span>
                    </Link>
                  )}
                </h3>
                <p className={styles.activity_date}>{item.description}</p>
              </div>
            </div>
            <div className={styles.activity_right}>
              {item.content.map((entry) => (
                <div key={entry.title} className={styles.activity_entry}>
                  <h4 className={styles.activity_entry_title}>{entry.title}</h4>
                  {entry.period && (
                    <span className={styles.activity_entry_period}>
                      {entry.period}
                    </span>
                  )}
                  {entry.description && (
                    <p className={styles.activity_entry_description}>
                      {entry.description}
                    </p>
                  )}
                  <ul className={styles.activity_list}>
                    {entry.content.map((c) => (
                      <li key={c} className={styles.activity_item}>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </span>
  );
}
