import type { ReactNode } from "react";
import styles from "./ui.module.css";

type PageHeroProps = {
  title: string;
  description: string;
  badge?: ReactNode;
  actions?: ReactNode;
  className?: string;
};

export default function PageHero({
  title,
  description,
  badge,
  actions,
  className = "",
}: PageHeroProps) {
  return (
    <header className={[styles.pageHero, className].filter(Boolean).join(" ")}>
      {badge}
      <div className={styles.pageHeroTitleRow}>
        <h1 className={styles.pageHeroTitle}>{title}</h1>
        {actions}
      </div>
      <p className={styles.pageHeroDescription}>{description}</p>
    </header>
  );
}
