import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { AwardGrid } from "@/components/award-grid";
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
      <div className="grid gap-6 pb-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:gap-16 md:pb-16">
        <PageHeader title={t.title} description={t.description} className="pb-0 md:pb-0" />
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground text-pretty md:pt-12">
          {pick(profile.intro, locale).map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>

      <section className="grid gap-10 md:grid-cols-2">
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
          <ul className="space-y-2 text-sm leading-relaxed">
            {pick(profile.principles, locale).map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden className="mt-[0.65em] size-1.5 shrink-0 rounded-full bg-border" />
                <span className="text-pretty">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mt-20 space-y-20">
        {kinds.map((kind) => {
          const items = timelineByKind(kind);
          if (!items.length) return null;
          const key = SECTION_KEY[kind];
          return (
            <section key={kind} id={key} aria-labelledby={`about-${key}`} className="scroll-mt-28">
              <SectionHeading id={`about-${key}`}>{t[key]}</SectionHeading>
              {kind === "award" ? (
                <AwardGrid items={items} locale={locale} />
              ) : (
                <TimelineList items={items} locale={locale} />
              )}
            </section>
          );
        })}
      </div>
    </main>
  );
}
