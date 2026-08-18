import Link from "next/link";
import styles from "./writings.module.css";
import { getPublishedWritings } from "@/lib/writings";
import { PageHero, BadgeChip } from "@/components/ui";
import { translations } from "@/lib/translations";
import { localePath, type Locale } from "@/lib/locale";

export default async function WritingsView({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const writings = await getPublishedWritings();

  return (
    <main className={styles.main}>
      <div className={styles.shell}>
        <PageHero
          title={t.writingsPageTitle}
          description={t.writingsPageDescription}
        />

        {writings.length === 0 ? (
          <section className={styles.emptyState} aria-label={t.writingsEmptyTitle}>
            <p className={styles.emptyKicker}>{t.writingsEmptyKicker}</p>
            <h2 className={styles.emptyTitle}>{t.writingsEmptyTitle}</h2>
            <p className={styles.emptyDescription}>{t.writingsEmptyDescription}</p>
            <div className={styles.emptyLinks}>
              <Link
                href={localePath(locale, "/projects")}
                className={styles.inlineLink}
              >
                {t.navProjects} ↗
              </Link>
              <Link
                href={localePath(locale, "/about")}
                className={styles.inlineLink}
              >
                {t.navAbout} ↗
              </Link>
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
