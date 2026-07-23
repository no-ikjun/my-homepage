"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useTranslations } from "@/contexts/language-context";
import { PageHero, BadgeChip } from "@/components/ui";
import type { WritingMeta } from "@/types/writing";

type WritingsClientProps = {
  writings: WritingMeta[];
};

export default function WritingsClient({ writings }: WritingsClientProps) {
  const t = useTranslations();

  return (
    <main className={styles.main}>
      <div className={styles.shell}>
        <PageHero
          title={t.writingsPageTitle}
          description={t.writingsPageDescription}
        />

        {writings.length === 0 ? (
          <section className={styles.emptyState} aria-label={t.writingsEmptyTitle}>
            <div className={styles.emptyMain}>
              <p className={styles.emptyKicker}>{t.writingsEmptyKicker}</p>
              <h2 className={styles.emptyTitle}>{t.writingsEmptyTitle}</h2>
              <p className={styles.emptyDescription}>
                {t.writingsEmptyDescription}
              </p>
              <div className={styles.emptyLinks}>
                <Link href="/projects" className={styles.inlineLink}>
                  {t.writingsEmptyProjectsLink} ↗
                </Link>
                <Link href="/about" className={styles.inlineLink}>
                  {t.writingsEmptyAboutLink} ↗
                </Link>
              </div>
            </div>
            <div className={styles.topicPanel}>
              <h3 className={styles.topicTitle}>{t.writingsEmptyTopicsTitle}</h3>
              <ul className={styles.topicList}>
                <li>{t.writingsEmptyTopicProduct}</li>
                <li>{t.writingsEmptyTopicEngineering}</li>
                <li>{t.writingsEmptyTopicAi}</li>
              </ul>
            </div>
          </section>
        ) : (
          <ul className={styles.list}>
            {writings.map((writing) => (
              <li key={writing.slug}>
                <Link href={`/writings/${writing.slug}`} className={styles.item}>
                  <div className={styles.itemDate}>{writing.date}</div>
                  <div className={styles.itemBody}>
                    <h2 className={styles.itemTitle}>{writing.title}</h2>
                    <p className={styles.itemSummary}>{writing.summary}</p>
                    {writing.tags?.length ? (
                      <div className={styles.tagRow}>
                        {writing.tags.map((tag) => (
                          <BadgeChip key={tag} size="sm" tone="muted">
                            {tag}
                          </BadgeChip>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  <span className={styles.arrow}>↗</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
