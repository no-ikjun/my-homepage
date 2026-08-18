import Image from "next/image";
import styles from "./experience.module.css";
import Link from "next/link";

type AwardsBoxProps = {
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

export default function AwardsBox({
  title,
  data,
  moreInfoLabel,
}: AwardsBoxProps) {

  return (
    <span>
      <h2 className={styles.content_title}>{title}</h2>
      <div className={styles.award_container}>
        {data.map((item) => (
          <div className={styles.award_content} key={item.title}>
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
              className={styles.cover_image}
            />
            {item.link !== "" && (
              <Link
                href={item.link}
                className={styles.award_cta}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.title} - ${moreInfoLabel} (새 창)`}
              >
                <span className={styles.award_cta_label}>
                  {moreInfoLabel}
                </span>
                <span className="sr-only">(새 창에서 열림)</span>
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
