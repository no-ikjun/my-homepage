"use client";

import { useState } from "react";
import styles from "./projects.module.css";
import { projects } from "@/data/projects";
import { translations } from "@/lib/translations";
import { type Locale } from "@/lib/locale";
import { PageHero } from "@/components/ui";
import ProjectDetailModal from "@/components/project-detail-modal";
import type { Project } from "@/data/projects";

function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (project: Project) => void;
}) {
  return (
    <article
      className={styles.projectCard}
      onClick={() => onSelect(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(project);
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
  );
}

export default function ProjectsView({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const lang = locale;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const sections = [
    {
      id: "individual-projects-title",
      title: t.projectsIndividualTitle,
      items: projects[lang].individual,
    },
    {
      id: "team-projects-title",
      title: t.projectsTeamTitle,
      items: projects[lang].team,
    },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.shell}>
        <PageHero
          title={t.projectsPageTitle}
          description={t.projectsPageDescription}
        />

        {sections.map((section) => (
          <section
            key={section.id}
            className={styles.projectSection}
            aria-labelledby={section.id}
          >
            <h2 id={section.id} className={styles.sectionTitle}>
              {section.title}
            </h2>
            <div className={styles.projectList}>
              {section.items.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  onSelect={setSelectedProject}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <ProjectDetailModal
        locale={locale}
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
