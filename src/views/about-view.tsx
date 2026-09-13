import Image from "next/image";
import { CodeXml, FlaskConical, GraduationCap, MapPin } from "lucide-react";
import { AwardGrid } from "@/components/award-grid";
import { SectionHeading } from "@/components/section-heading";
import { TechBadge } from "@/components/tech-badge";
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
  const tracks = [
    { ...profile.tracks.research, Icon: FlaskConical },
    { ...profile.tracks.engineering, Icon: CodeXml },
  ];

  return (
    <main className="mx-auto w-full max-w-page px-6">
      {/* Profile block doubles as the page header. */}
      <header className="flex flex-col gap-6 pt-6 sm:flex-row sm:items-start sm:gap-8 md:pt-10">
        <Image
          src={profile.avatar}
          alt={pick(profile.name, locale)}
          width={112}
          height={112}
          priority
          className="size-24 shrink-0 rounded-full object-cover sm:size-28"
        />
        <div className="min-w-0 max-w-content">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {pick(profile.name, locale)}
          </h1>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <li className="inline-flex items-center gap-1.5">
              <GraduationCap className="size-4" />
              {pick(profile.affiliation, locale)}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <MapPin className="size-4" />
              {pick(profile.location, locale)}
            </li>
          </ul>
          <div className="mt-5 space-y-3 text-lg leading-relaxed text-pretty">
            {pick(profile.about, locale).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </header>

      <section className="mt-12 grid gap-4 md:grid-cols-2">
        {tracks.map(({ Icon, ...track }) => (
          <div
            key={pick(track.title, "en")}
            className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6"
          >
            <h2 className="flex items-center gap-2.5 text-lg font-semibold tracking-tight">
              <span className="flex size-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                <Icon className="size-[18px]" />
              </span>
              {pick(track.title, locale)}
            </h2>
            <ul className="flex-1 space-y-2 text-sm leading-relaxed">
              {pick(track.items, locale).map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden className="mt-[0.7em] size-1 shrink-0 rounded-full bg-muted-foreground/60" />
                  <span className="text-pretty">{item}</span>
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-1.5">
              {track.stack.map((s) => (
                <li key={s}>
                  <TechBadge name={s} />
                </li>
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
