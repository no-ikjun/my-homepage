"use client";

import Image from "next/image";
import Link from "next/link";
import Modal from "./ui/modal";
import { BadgeChip } from "./ui";
import { useTranslations } from "@/contexts/language-context";
import type { Project } from "@/data/projects";
import styles from "./project-detail-modal.module.css";

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

type ProjectDetailModalProps = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function ProjectDetailModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailModalProps) {
  const t = useTranslations();
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={styles.modalContent}>
      <div className={styles.header}>
        <div
          className={styles.heroImage}
          style={{ backgroundImage: `url(${project.image})` }}
          aria-hidden="true"
        />
        <div className={styles.headerMeta}>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.period}>{project.period}</p>
          <div className={styles.techStack}>
            {project.techStack.map((tech) => (
              <BadgeChip key={tech} size="sm" tone="muted">
                {techIconMap[tech] && (
                  <Image
                    src={techIconMap[tech]}
                    alt={tech}
                    width={12}
                    height={12}
                    className={styles.techIcon}
                  />
                )}
                {tech}
              </BadgeChip>
            ))}
          </div>
          <a
            href={project.directLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.visitButton}
          >
            {t.projectDetailVisitSite} ↗
          </a>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.body}>
        <p className={styles.description}>{project.description}</p>

        {project.features.length > 0 && (
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>{t.projectDetailFeatures}</h3>
            <ul className={styles.featureList}>
              {project.features.map((feature) => (
                <li key={feature} className={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.role.length > 0 && (
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>{t.projectDetailRole}</h3>
            <ul className={styles.featureList}>
              {project.role.map((item) => (
                <li key={item} className={styles.featureItem}>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.links.length > 0 && (
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>{t.projectDetailLinks}</h3>
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
          </section>
        )}
      </div>
    </Modal>
  );
}
