"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { projects } from "@/data/projects";
import { useLanguage, useTranslations } from "@/contexts/language-context";
import { PageHero } from "@/components/ui";
import ProjectDetailModal from "@/components/project-detail-modal";
import type { Project } from "@/data/projects";

export default function ProjectsPage() {
  const { lang } = useLanguage();
  const t = useTranslations();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className={styles.main}>
      <div className={styles.shell}>
        <PageHero
          title={t.projectsPageTitle}
          description={t.projectsPageDescription}
        />

        <div className={styles.projectList}>
          {projects[lang].map((project) => (
            <article
              key={project.title}
              className={styles.projectCard}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`${project.title} - ${project.summary}`}
            >
              <span className={styles.projectCardArrow} aria-hidden="true">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </span>
              <div className={styles.projectCardInner}>
                <div
                  className={styles.projectThumb}
                  style={{ backgroundImage: `url(${project.image})` }}
                  aria-hidden="true"
                />
                <div className={styles.projectCardBody}>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectPeriod}>{project.period}</p>
                  <p className={styles.projectSummary}>{project.summary}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
