import styles from "../[locale]/experiences/page.module.css";
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
        <>
          <h3 className={styles.content_subtitle}>
            {item.title}
            {item.link != "" ? (
              <Link href={item.link} style={{ verticalAlign: "middle" }}>
                <Image
                  src="./img/link.svg"
                  width={25}
                  height={25}
                  alt="link"
                  className={styles.link_icon}
                />
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
        </>
      ))}
    </>
  );
}
