import styles from "../app/projects/page.module.css";
import TechStack from "./tech_stack";
import ProjectLink from "./project_link";
import Link from "next/link";
import Image from "next/image";

type ProjectBoxProps = {
  title: string;
  description: string;
  directLink: string;
  techStack: string[];
  links: {
    type: string;
    url: string;
    description: string;
  }[];
};

export default function ProjectBox({
  title,
  description,
  directLink,
  techStack,
  links,
}: ProjectBoxProps) {
  return (
    <div className={styles.project_box}>
      <h2 className={styles.project_title}>
        {title}
        {directLink != "" ? (
          <Link
            href={directLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} 직접 링크 열기 (새 창)`}
          >
            <Image
              className={styles.icon_button}
              style={{ marginLeft: "10px" }}
              src="./img/link_icon.svg"
              width={25}
              height={25}
              alt="External link"
            />
            <span className="sr-only">(새 창에서 열림)</span>
          </Link>
        ) : (
          <></>
        )}
      </h2>
      <p className={styles.project_description}>{description}</p>
      <div className={styles.links}>
        {links.map((link) => (
          <ProjectLink
            type={link.type}
            url={link.url}
            description={link.description}
            key={link.url}
          />
        ))}
      </div>
      <div className={styles.tech_stack}>
        {techStack.map((tech) => (
          <TechStack name={tech} key={tech} />
        ))}
      </div>
    </div>
  );
}
