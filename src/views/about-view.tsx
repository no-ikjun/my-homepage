import { AwardGrid } from "@/components/award-grid";
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
  const tracks = [profile.tracks.research, profile.tracks.engineering];

  return (
    <main className="mx-auto w-full max-w-page px-6">
      <PageHeader title={t.title} description={t.description} className="pb-10 md:pb-12" />

      <div className="max-w-content space-y-4 text-lg leading-relaxed text-pretty">
        {pick(profile.about, locale).map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <section className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
        {tracks.map((track) => (
          <div key={pick(track.title, "en")}>
            <SectionHeading className="mb-3">{pick(track.title, locale)}</SectionHeading>
            <ul className="space-y-1.5 text-sm leading-relaxed">
              {pick(track.items, locale).map((item) => (
                <li key={item} className="text-pretty">{item}</li>
              ))}
            </ul>
          </div>
        ))}
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
