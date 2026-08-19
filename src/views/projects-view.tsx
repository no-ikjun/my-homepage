"use client";

import { useState } from "react";
import Image from "next/image";
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
  onSelect: (project: Project, trigger: HTMLElement) => void;
}) {
  return (
    <button
      type="button"
      className={styles.projectCard}
      onClick={(event) => onSelect(project, event.currentTarget)}
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
        <div className={styles.projectThumb} aria-hidden="true">
          {project.image ? (
            <Image
              src={project.image}
              alt=""
              fill
              sizes="72px"
              className={styles.coverImage}
            />
          ) : null}
        </div>
        <div className={styles.projectCardBody}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectPeriod}>{project.period}</p>
          <p className={styles.projectSummary}>{project.summary}</p>
        </div>
      </div>
    </button>
  );
}

export default function ProjectsView({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const lang = locale;
  // `selected` outlives the close so the dialog has something to animate out;
  // clearing it on close would unmount the dialog before its exit could run.
  const [selected, setSelected] = useState<{
    project: Project;
    trigger: HTMLElement;
  } | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

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
                  onSelect={(item, trigger) => {
                    setSelected({ project: item, trigger });
                    setIsDetailOpen(true);
                  }}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <ProjectDetailModal
        locale={locale}
        project={selected?.project ?? null}
        originEl={selected?.trigger ?? null}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
      />
    </main>
  );
}
