import Link from "next/link";
import styles from "./page.module.css";
import { getPublishedWritings } from "@/lib/writings";
import { PageHero, BadgeChip } from "@/components/ui";

export default async function WritingsPage() {
  const writings = await getPublishedWritings();

  return (
    <main className={styles.main}>
      <div className={styles.shell}>
        <PageHero
          title="Writing Notes & Essays"
          description="Product building, engineering decisions, and things I am learning in the process."
        />

        {writings.length === 0 ? (
          <section className={styles.emptyState} aria-label="No writings yet">
            <p className={styles.emptyKicker}>Coming Soon</p>
            <h2 className={styles.emptyTitle}>No published writing yet</h2>
            <p className={styles.emptyDescription}>
              I am preparing this section for short technical notes and product development essays.
            </p>
            <div className={styles.emptyLinks}>
              <Link href="/projects" className={styles.inlineLink}>
                View Projects ↗
              </Link>
              <Link href="/about" className={styles.inlineLink}>
                About Me ↗
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
