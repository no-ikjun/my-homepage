import type { ReactNode } from "react";
import { CodeXml, FlaskConical, GraduationCap, Mail, MapPin, Microscope } from "lucide-react";
import { AwardGrid } from "@/components/award-grid";
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

const KINDS: TimelineKind[] = ["career", "education", "award", "activity"];

/** One CV row: section name on the left, content on the right. */
function Row({
  id,
  label,
  icon,
  children,
}: {
  id: string;
  label: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-label`} className="grid scroll-mt-28 gap-4 md:grid-cols-[10rem_1fr] md:gap-12">
      <h2
        id={`${id}-label`}
        className="flex items-center gap-2 text-sm font-semibold tracking-tight md:sticky md:top-28 md:self-start"
      >
        {icon}
        {label}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

export default function AboutView({ locale }: { locale: Locale }) {
  const t = dictionary[locale].pages.about;
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
    { id: "research", ...profile.tracks.research, icon: <FlaskConical className="size-4 text-muted-foreground" /> },
    { id: "engineering", ...profile.tracks.engineering, icon: <CodeXml className="size-4 text-muted-foreground" /> },
  ];

  return (
    <main className="mx-auto w-full max-w-page px-6">
      <header className="pt-6 pb-14 md:pt-10 md:pb-20">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.title}</h1>
        <p className="mt-2 max-w-content text-muted-foreground text-pretty">{t.description}</p>
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
      </header>

      <div className="space-y-16 md:space-y-20">
        {tracks.map((track) => (
          <Row key={track.id} id={track.id} label={pick(track.title, locale)} icon={track.icon}>
            <ul className="space-y-1.5 leading-relaxed">
              {pick(track.items, locale).map((item) => (
                <li key={item} className="text-pretty">{item}</li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {track.stack.map((s) => (
                <li key={s}>
                  <TechBadge name={s} />
                </li>
              ))}
            </ul>
          </Row>
        ))}

        {KINDS.map((kind) => {
          const items = timelineByKind(kind);
          if (!items.length) return null;
          const key = SECTION_KEY[kind];
          if (kind === "award") {
            return (
              <Row key={kind} id={key} label={t[key]}>
                <AwardGrid items={items} locale={locale} />
              </Row>
            );
          }
          // Timeline sections put the section name in the date column, so the
          // left column carries the dates instead of sitting empty.
          return (
            <section key={kind} id={key} className="scroll-mt-28">
              <TimelineList items={items} locale={locale} heading={{ id: `${key}-label`, text: t[key] }} />
            </section>
          );
        })}
      </div>
    </main>
  );
}
