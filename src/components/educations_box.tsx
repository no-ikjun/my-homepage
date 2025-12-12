import styles from "../app/experiences/page.module.css";
import Link from "next/link";

type EducationsBoxProps = {
  title: string;
  data: {
    title: string;
    link: string;
    image: string;
    description: string;
    subDescription: string;
    content: string[];
  }[];
};

export default function EducationsBox({ title, data }: EducationsBoxProps) {
  return (
    <span>
      <h2 className={styles.content_title}>{title}</h2>
      <div className={styles.education_container}>
        {data.map((item) => (
          <div className={styles.education_content} key={item.title}>
            <div
              className={styles.education_image}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className={styles.education_text}>
              <h3 className={styles.education_title}>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </Link>
              </h3>
              <p className={styles.education_description}>{item.description}</p>
              <p className={styles.education_subDescription}>
                {item.subDescription}
              </p>
              <ul>
                {item.content.map((content) => (
                  <li
                    className={styles.education_content_box_description}
                    key={content}
                  >
                    {content}
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
