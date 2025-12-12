import styles from "../app/experiences/page.module.css";
import Link from "next/link";
import Image from "next/image";

type DetailExperienceProps = {
  data: {
    title: string;
    link: string;
    description: string;
    subDescription: string;
    content: string[];
  }[];
};

export default function DetailExperience({ data }: DetailExperienceProps) {
  return (
    <>
      {data.map((item) => (
        <div key={item.title}>
          <h3 className={styles.content_subtitle}>
            {item.title}
            {item.link != "" ? (
              <Link
                href={item.link}
                style={{ verticalAlign: "middle" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${item.title} link (새 창)`}
              >
                <Image
                  src="./img/link.svg"
                  width={25}
                  height={25}
                  alt="External link"
                  className={styles.link_icon}
                />
                <span className="sr-only">(새 창에서 열림)</span>
              </Link>
            ) : (
              <></>
            )}
          </h3>
          <p className={styles.content_description}>{item.description}</p>
          <div className={styles.content_box}>
            <p className={styles.content_box_title}>{item.subDescription}</p>
            <ul>
              {item.content.map((content) => (
                <li className={styles.content_box_description} key={content}>
                  {content}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
