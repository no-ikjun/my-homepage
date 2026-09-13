import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { TimelineList } from "@/components/timeline-list";
import { profile } from "@/data/profile";
import { timelineByKind, type TimelineKind } from "@/data/timeline";
import { dictionary } from "@/lib/dictionary";
import { pick } from "@/lib/i18n";
import { type Locale } from "@/lib/locale";

const SECTION_KEY: Record<TimelineKind, "career" | "education" | "awards" | "activities"> = {
  career: "career",
  education: "education",
  award: "awards",
  activity: "activities",
};

export default function AboutView({ locale }: { locale: Locale }) {
  const t = dictionary[locale].pages.about;
  const kinds: TimelineKind[] = ["career", "education", "award", "activity"];

  return (
    <main className="mx-auto w-full max-w-page px-6">
      <PageHeader title={t.title} description={t.description}>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground text-pretty">
          {pick(profile.intro, locale).map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </PageHeader>

      <section className="grid gap-10 border-t border-border pt-10 md:grid-cols-2">
        <div>
          <SectionHeading>{t.interests}</SectionHeading>
          <ul className="space-y-2 text-sm leading-relaxed">
            {pick(profile.interests, locale).map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden className="mt-[0.65em] size-1.5 shrink-0 rounded-full bg-brand" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeading>{t.principles}</SectionHeading>
          <ol className="space-y-2 text-sm leading-relaxed">
            {pick(profile.principles, locale).map((item, i) => (
              <li key={item} className="flex gap-3">
                <span className="w-4 shrink-0 font-mono text-xs text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-pretty">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="mt-20 space-y-20">
        {kinds.map((kind) => {
          const items = timelineByKind(kind);
          if (!items.length) return null;
          const key = SECTION_KEY[kind];
          return (
            <section key={kind} id={key} aria-labelledby={`about-${key}`} className="scroll-mt-28">
              <SectionHeading id={`about-${key}`} aside={items.length}>
                {t[key]}
              </SectionHeading>
              <TimelineList items={items} locale={locale} />
            </section>
          );
        })}
      </div>
    </main>
  );
}
