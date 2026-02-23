import styles from "../app/experiences/page.module.css";
import Link from "next/link";

type ActivitiesBoxProps = {
  title: string;
  moreInfoLabel: string;
  data: {
    title: string;
    link: string;
    image: string;
    description: string;
    subDescription: string;
    content: string[];
  }[];
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
                ></div>
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
              <span className={styles.activity_role}>
                {item.subDescription}
              </span>
              <ul className={styles.activity_list}>
                {item.content.map((c) => (
                  <li key={c} className={styles.activity_item}>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </span>
  );
}
