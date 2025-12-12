"use client";

import styles from "./page.module.css";
import { projects } from "./data";
import Link from "next/link";
import Image from "next/image";
import { useLanguage, useTranslations } from "@/contexts/language-context";

const techIconMap: Record<string, string> = {
  flutter: "/img/flutter_icon.svg",
  NextJS: "/img/nextjs_icon.svg",
  NestJS: "/img/nestjs_icon.svg",
  docker: "/img/docker_icon.svg",
  AWS: "/img/aws_icon.svg",
  React: "/img/react_icon.svg",
  CloudFlare: "/img/cloudflare_icon.svg",
  Figma: "/img/figma_icon.svg",
  TypeScript: "/img/typescript_icon.svg",
  FastAPI: "/img/fastapi_icon.svg",
};

const linkIconMap: Record<string, string> = {
  github: "/img/github_icon.svg",
  website: "/img/link_icon.svg",
};

export default function ProjectsPage() {
  const { lang } = useLanguage();
  const t = useTranslations();

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.back_button}>
          <p className={styles.left_arrow}>&larr;</p>
        </Link>
        <div className={styles.title_container}>
          <h1 className={styles.title}>{t.projectsPageTitle}</h1>
          <p className={styles.description}>{t.projectsPageDescription}</p>
        </div>
        <div className={styles.project_grid}>
          {projects[lang].map((project) => (
            <div className={styles.project_card} key={project.title}>
              <div className={styles.project_header}>
                <div
                  className={styles.project_logo}
                  style={{ backgroundImage: `url(${project.iamge})` }}
                />
                <div className={styles.project_info}>
                  <h3 className={styles.project_title}>
                    <Link
                      href={project.directLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.project_link}
                    >
                      {project.title} ↗
                    </Link>
                  </h3>
                  <p className={styles.project_period}>{project.period}</p>
                  <p className={styles.project_description}>
                    {project.description}
                  </p>
                </div>
              </div>
              <div className={styles.tech_stack}>
                {project.techStack.map((tech) => (
                  <Image
                    key={tech}
                    src={techIconMap[tech]}
                    alt={tech}
                    width={24}
                    height={24}
                    className={styles.icon}
                  />
                ))}
              </div>
              <div className={styles.links}>
                {project.links.map((link) => (
                  <Link
                    key={link.url}
                    href={link.url}
                    className={styles.link_div}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={linkIconMap[link.type]}
                      alt={link.type}
                      width={16}
                      height={16}
                      className={styles.icon_button}
                    />
                    {link.description}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
