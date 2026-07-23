"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { projects } from "@/data/projects";
import { useLanguage, useTranslations } from "@/contexts/language-context";
import { BadgeChip, PageHero, ProjectVisual } from "@/components/ui";
import ProjectDetailModal from "@/components/project-detail-modal";
import type { Project } from "@/data/projects";

export default function ProjectsPage() {
  const { lang } = useLanguage();
  const t = useTranslations();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const renderProjectCard = (project: Project) => (
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
      <ProjectVisual
        title={project.title}
        image={project.image}
        alt={project.imageAlt}
        size="lg"
        className={styles.projectVisual}
      />
      <div className={styles.projectCardBody}>
        <div className={styles.projectMeta}>
          <span>{project.period}</span>
          <span>{project.role.slice(0, 2).join(" / ")}</span>
        </div>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectSummary}>{project.impact ?? project.summary}</p>
        <div className={styles.projectStack}>
          {project.techStack.slice(0, 4).map((tech) => (
            <BadgeChip key={tech} size="sm" tone="muted">
              {tech}
            </BadgeChip>
          ))}
        </div>
      </div>
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
    </article>
  );

  return (
    <main className={styles.main}>
      <div className={styles.shell}>
        <PageHero
          title={t.projectsPageTitle}
          description={t.projectsPageDescription}
        />

        <section
          className={styles.projectSection}
          aria-labelledby="individual-projects-title"
        >
          <h2 id="individual-projects-title" className={styles.sectionTitle}>
            {t.projectsIndividualTitle}
          </h2>
          <div className={styles.projectList}>
            {projects[lang].individual.map(renderProjectCard)}
          </div>
        </section>

        <section
          className={styles.projectSection}
          aria-labelledby="team-projects-title"
        >
          <h2 id="team-projects-title" className={styles.sectionTitle}>
            {t.projectsTeamTitle}
          </h2>
          <div className={styles.projectList}>
            {projects[lang].team.map(renderProjectCard)}
          </div>
        </section>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
