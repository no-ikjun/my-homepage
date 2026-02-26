"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { projects } from "@/data/projects";
import { useLanguage, useTranslations } from "@/contexts/language-context";
import { PageHero, BadgeChip } from "@/components/ui";

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
    <main className={styles.main}>
      <div className={styles.shell}>
        <PageHero
          title={t.projectsPageTitle}
          description={t.projectsPageDescription}
        />

        <div className={styles.projectList}>
          {projects[lang].map((project) => (
            <article key={project.title} className={styles.projectRow}>
              <div className={styles.projectThumbWrap}>
                <div
                  className={styles.projectThumb}
                  style={{ backgroundImage: `url(${project.image})` }}
                  aria-hidden="true"
                />
              </div>

              <div className={styles.projectMain}>
                <div className={styles.projectHeading}>
                  <div>
                    <h2 className={styles.projectTitle}>
                      <Link
                        href={project.directLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectTitleLink}
                      >
                        {project.title} ↗
                      </Link>
                    </h2>
                    <p className={styles.projectPeriod}>{project.period}</p>
                  </div>
                </div>

                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.techStack}>
                  {project.techStack.map((tech) => (
                    <BadgeChip key={tech} size="sm" tone="muted">
                      <Image
                        src={techIconMap[tech]}
                        alt={tech}
                        width={12}
                        height={12}
                        className={styles.techIcon}
                      />
                      {tech}
                    </BadgeChip>
                  ))}
                </div>

                <ul className={styles.linkList}>
                  {project.links.map((link) => (
                    <li key={link.url}>
                      <Link
                        href={link.url}
                        className={styles.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={linkIconMap[link.type]}
                          alt={link.type}
                          width={14}
                          height={14}
                          className={styles.linkIcon}
                        />
                        <span>{link.description}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
