import styles from "../app/experiences/page.module.css";
import Link from "next/link";

type AwardsBoxProps = {
  data: {
    title: string;
    link: string;
    image: string;
    description: string;
    subDescription: string;
    content: string[];
  }[];
};

export default function AwardsBox({ data }: AwardsBoxProps) {
  return (
    <span>
      <h2 className={styles.content_title}>Awards</h2>
      <div className={styles.award_container}>
        {data.map((item) => (
          <div
            className={styles.award_content}
            key={item.title}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            {item.link !== "" && (
              <Link
                href={item.link}
                className={styles.award_button}
                target="_blank"
              >
                <span className={styles.award_button_icon}>&rarr;</span>
              </Link>
            )}
            <div className={styles.award_overlay}>
              <h3 className={styles.award_title}>{item.title}</h3>
              <p className={styles.award_description}>{item.description}</p>
              <div className={styles.award_content_box}>
                <p className={styles.award_content_box_title}>
                  {item.subDescription}
                </p>
                <ul>
                  {item.content.map((content) => (
                    <li
                      className={styles.award_content_box_description}
                      key={content}
                    >
                      {content}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </span>
  );
}
