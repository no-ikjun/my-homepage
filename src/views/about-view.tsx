import { CodeXml, FlaskConical, GraduationCap, Mail, MapPin, Microscope } from "lucide-react";
import { TechBadge } from "@/components/tech-badge";
import { TimelineStory } from "@/components/timeline-story";
import { profile } from "@/data/profile";
import { timeline, type TimelineKind } from "@/data/timeline";
import { dictionary } from "@/lib/dictionary";
import { pick } from "@/lib/i18n";
import { type Locale } from "@/lib/locale";

export default function AboutView({ locale }: { locale: Locale }) {
  const t = dictionary[locale].pages.about;
  const school = timeline.find((i) => i.id === "gist");
  const lab = timeline.find((i) => i.id === "real-lab");
  const email = profile.links.find((l) => l.id === "email");

  const facts = [
    school && { Icon: GraduationCap, text: `${pick(school.org, locale)}` , sub: pick(school.title, locale) },
    lab && { Icon: Microscope, text: pick(lab.org, locale), sub: pick(lab.title, locale) },
    { Icon: MapPin, text: pick(profile.location, locale) },
    email && { Icon: Mail, text: email.label, href: email.href },
  ].filter(Boolean) as { Icon: typeof MapPin; text: string; sub?: string; href?: string }[];

  const tracks = [
    { ...profile.tracks.research, Icon: FlaskConical },
    { ...profile.tracks.engineering, Icon: CodeXml },
  ];

  const kindLabels: Record<TimelineKind, string> = {
    career: t.career,
    education: t.education,
    award: t.awards,
    activity: t.activities,
  };

  return (
    <main className="mx-auto w-full max-w-page px-6">
      <div className="grid gap-12 pt-6 md:pt-10 lg:grid-cols-[19rem_1fr] lg:gap-20">
        {/* --------------------------------------------------- fact sheet */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.title}</h1>
          <p className="mt-2 text-muted-foreground text-pretty">{t.description}</p>

          <ul className="mt-8 space-y-3">
            {facts.map(({ Icon, text, sub, href }) => (
              <li key={text} className="flex gap-3 text-sm">
                <Icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                <span className="min-w-0">
                  {href ? (
                    <a href={href} className="hover:underline hover:underline-offset-4">{text}</a>
                  ) : (
                    <span className="block">{text}</span>
                  )}
                  {sub ? <span className="block text-muted-foreground">{sub}</span> : null}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-8">
            {tracks.map(({ Icon, ...track }) => (
              <section key={pick(track.title, "en")}>
                <h2 className="flex items-center gap-2 font-semibold tracking-tight">
                  <Icon className="size-4 text-muted-foreground" />
                  {pick(track.title, locale)}
                </h2>
                <ul className="mt-2 space-y-1 text-sm leading-relaxed text-muted-foreground">
                  {pick(track.items, locale).map((item) => (
                    <li key={item} className="text-pretty">{item}</li>
                  ))}
                </ul>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {track.stack.map((s) => (
                    <li key={s}>
                      <TechBadge name={s} />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </aside>

        {/* ------------------------------------------------------- story */}
        <section aria-label={t.timeline} className="min-w-0 pt-2 lg:pt-3">
          <TimelineStory items={timeline} locale={locale} kindLabels={kindLabels} />
        </section>
      </div>
    </main>
  );
}
