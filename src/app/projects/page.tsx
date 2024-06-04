import styles from "./page.module.css";
import ProjectBox from "@/components/project_box";
import { projects } from "./data";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.back_button}>
          <p className={styles.left_arrow}>&larr;</p>
        </Link>
        <div className={styles.title_container}>
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.description}>My Own Projects Since 2023</p>
          <p className={styles.description}>Updated : 2024.06</p>
        </div>
        <div className={styles.content_container}>
          {projects.map((project) => (
            <ProjectBox
              title={project.title}
              description={project.description}
              directLink={project.directLink}
              techStack={project.techStack}
              links={project.links}
              key={project.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
