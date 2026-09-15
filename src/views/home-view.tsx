import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { news } from "@/data/news";
import { profile } from "@/data/profile";
import { getFeaturedProjects } from "@/lib/content/projects";
import { getPublishedWritings } from "@/lib/content/writings";
import { dictionary } from "@/lib/dictionary";
import { formatMonth } from "@/lib/format";
import { pick } from "@/lib/i18n";
import { localePath, type Locale } from "@/lib/locale";

const LINK_ICON = {
  email: Mail,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
} as const;

export default async function HomeView({ locale }: { locale: Locale }) {
  const t = dictionary[locale];
  const [featured, writings] = await Promise.all([
    getFeaturedProjects(locale, 3),
    getPublishedWritings(),
  ]);
  const recentWritings = writings.slice(0, 3);

  return (
    <main className="mx-auto w-full max-w-page px-6">
      {/* ---------------------------------------------------------- hero */}
      <Reveal
        as="section"
        className="grid items-center gap-10 pt-6 md:grid-cols-[1fr_auto] md:gap-16 md:pt-14"
      >
        <div className="order-2 max-w-content md:order-1">
          <p className="font-medium">{pick(profile.name, locale)}</p>
          <p className="text-sm text-muted-foreground">
            {pick(profile.affiliation, locale)}
          </p>

          <h1 className="mt-6 text-4xl leading-[1.08] font-semibold tracking-tight text-balance md:text-5xl">
            {pick(profile.headline, locale)}
          </h1>

          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            {pick(profile.intro, locale).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            {profile.links.map((link) => {
              const Icon = LINK_ICON[link.id];
              const external = link.href.startsWith("http");
              return (
                <Button
                  key={link.id}
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                >
                  <a
                    href={link.href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <Icon data-icon="inline-start" />
                    {link.label}
                  </a>
                </Button>
              );
            })}
            <Button asChild variant="ghost" size="sm" className="rounded-full">
              <Link href={localePath(locale, "/about")}>
                {t.home.moreAbout}
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </div>

        <Image
          src={profile.avatar}
          alt={pick(profile.name, locale)}
          width={288}
          height={288}
          priority
          className="order-1 size-32 rounded-full object-cover md:order-2 md:size-60 lg:size-72"
        />
      </Reveal>

      {/* -------------------------------------------------------- recent */}
      <Reveal as="section" delay={0.08} className="mt-20" aria-labelledby="recent-heading">
        <SectionHeading id="recent-heading">{t.home.recent}</SectionHeading>
        <ul className="grid gap-4 sm:grid-cols-2">
          {news.slice(0, 4).map((item) => {
            const external = item.href?.startsWith("http");
            const inner = (
              <>
                <span className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="tabular-nums">{formatMonth(item.date, locale)}</span>
                  <span aria-hidden>·</span>
                  <span>{t.home.newsKinds[item.kind]}</span>
                  {item.href ? (
                    <ArrowUpRight className="ml-auto size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  ) : null}
                </span>
                <span className="mt-2 block font-medium text-balance">{pick(item.title, locale)}</span>
                <span className="mt-1 block text-sm leading-relaxed text-muted-foreground text-pretty">
                  {pick(item.summary, locale)}
                </span>
              </>
            );
            const cls =
              "group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-[border-color,transform,box-shadow]";
            const linkCls = `${cls} hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_16px_40px_-20px_oklch(0_0_0/0.3)]`;
            return (
              <li key={item.id}>
                {!item.href ? (
                  <div className={cls}>{inner}</div>
                ) : external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className={linkCls}>
                    {inner}
                  </a>
                ) : (
                  <Link href={localePath(locale, item.href)} className={linkCls}>
                    {inner}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </Reveal>

      {/* ------------------------------------------------- selected work */}
      {featured.length ? (
        <Reveal
          as="section"
          delay={0.16}
          className="mt-20"
          aria-labelledby="work-heading"
        >
          <SectionHeading
            id="work-heading"
            action={{
              href: localePath(locale, "/projects"),
              label: t.home.allProjects,
            }}
          >
            {t.home.selectedWork}
          </SectionHeading>
          <ul className="grid gap-4 md:grid-cols-3">
            {featured.map((p) => (
              <li key={p.slug} className="flex">
                <ProjectCard project={p} locale={locale} className="flex-1" />
              </li>
            ))}
          </ul>
        </Reveal>
      ) : null}

      {/* -------------------------------------------------------- writing */}
      {recentWritings.length ? (
        <Reveal
          as="section"
          delay={0.24}
          className="mt-20"
          aria-labelledby="writing-heading"
        >
          <SectionHeading
            id="writing-heading"
            action={{
              href: localePath(locale, "/writings"),
              label: t.home.allWriting,
            }}
          >
            {t.home.writing}
          </SectionHeading>
          <ul className="divide-y divide-border">
            {recentWritings.map((w) => (
              <li key={w.slug}>
                <Link
                  href={`/writings/${w.slug}`}
                  lang={w.lang}
                  className="group -mx-3 flex items-baseline justify-between gap-4 rounded-lg px-3 py-3 transition-colors hover:bg-foreground/[0.03]"
                >
                  <span className="min-w-0">
                    <span className="block font-medium">{w.title}</span>
                    {w.summary ? (
                      <span className="mt-0.5 line-clamp-1 block text-sm text-muted-foreground">
                        {w.summary}
                      </span>
                    ) : null}
                  </span>
                  <span className="shrink-0 text-sm text-muted-foreground tabular-nums">
                    {w.date}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      ) : null}

      {/* -------------------------------------------------------- contact */}
      <Reveal as="section" delay={0.3} className="mt-24 max-w-content">
        <p className="text-lg leading-relaxed text-pretty">
          {t.home.contactLead}{" "}
          <a
            href={profile.links[0].href}
            className="underline decoration-border underline-offset-4 transition-colors hover:decoration-brand"
          >
            {t.home.emailMe}
          </a>
        </p>
      </Reveal>
    </main>
  );
}
