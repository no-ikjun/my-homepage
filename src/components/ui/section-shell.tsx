import type { ReactNode } from "react";
import styles from "./ui.module.css";

type SectionShellProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
};

export default function SectionShell({
  title,
  description,
  actions,
  children,
  className = "",
}: SectionShellProps) {
  return (
    <section className={[styles.sectionShell, className].filter(Boolean).join(" ")}>
      <div className={styles.sectionHead}>
        <div>
          <h2 className={styles.sectionTitle}>{title}</h2>
          {description ? (
            <p className={styles.sectionDescription}>{description}</p>
          ) : null}
        </div>
        {actions}
      </div>
      {children}
    </section>
  );
}
