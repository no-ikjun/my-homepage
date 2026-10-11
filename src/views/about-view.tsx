import Link from "next/link";
import { CodeXml, FlaskConical, GraduationCap, Mail, MapPin, Microscope } from "lucide-react";
import { AwardGrid } from "@/components/award-grid";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { TechBadge } from "@/components/tech-badge";
import { TimelineList } from "@/components/timeline-list";
import { profile } from "@/data/profile";
import { timeline, timelineByKind, type TimelineKind } from "@/data/timeline";
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
  const school = timeline.find((i) => i.id === "gist");
  const lab = timeline.find((i) => i.id === "real-lab");
  const email = profile.links.find((l) => l.id === "email");
  const facts = [
    school && { Icon: GraduationCap, text: pick(school.org, locale) },
    lab && { Icon: Microscope, text: pick(lab.org, locale) },
    { Icon: MapPin, text: pick(profile.location, locale) },
    email && { Icon: Mail, text: email.label, href: email.href },
  ].filter(Boolean) as { Icon: typeof MapPin; text: string; href?: string }[];
  const tracks = [
    { ...profile.tracks.research, Icon: FlaskConical },
    { ...profile.tracks.engineering, Icon: CodeXml },
  ];

  return (
    <main className="mx-auto w-full max-w-page px-6">
      <PageHeader title={t.title} description={t.description} className="max-w-none pb-6 md:pb-8">
        <p className="mt-5 text-base leading-relaxed text-pretty">{t.lead}</p>

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {facts.map(({ Icon, text, href }) => (
            <li key={text} className="inline-flex items-center gap-1.5">
              <Icon className="size-4 text-muted-foreground" />
              {href ? (
                <a href={href} className="hover:underline hover:underline-offset-4">{text}</a>
              ) : (
                text
              )}
            </li>
          ))}
        </ul>

        {/* Jump links: this page is long and these are its real sections. */}
        <ul className="mt-6 flex flex-wrap gap-2">
          {kinds.map((kind) => {
            const key = SECTION_KEY[kind];
            return (
              <li key={key}>
                <Link
                  href={`#${key}`}
                  className="inline-flex h-8 items-center rounded-full border border-border px-3 text-sm text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  {t[key]}
                </Link>
              </li>
            );
          })}
        </ul>
      </PageHeader>

      <section className="grid gap-4 md:grid-cols-2">
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
