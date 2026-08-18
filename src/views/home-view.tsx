import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";
import { BadgeChip, IconWithText } from "@/components/ui";
import { translations } from "@/lib/translations";
import { localePath, type Locale } from "@/lib/locale";
import { homeRecentActivities } from "@/data/home-recent-activities";

const kindLabel: Record<"ko" | "en", Record<string, string>> = {
  ko: {
    career: "실무",
    project: "프로젝트",
    award: "수상",
    activity: "활동",
    education: "학업",
    writing: "글",
  },
  en: {
    career: "Career",
    project: "Project",
    award: "Award",
    activity: "Activity",
    education: "Education",
    writing: "Writing",
  },
};

const quickLinkIcons = {
  about: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  ),
  projects: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  ),
  writings: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  ),
  contact: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
};

export default function HomeView({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const lang = locale;
  const recentItems = homeRecentActivities[lang];

  const quickLinks = [
    {
      path: "/about",
      icon: quickLinkIcons.about,
      label: t.navAbout,
      text: t.aboutPageDescription,
    },
    {
      path: "/projects",
      icon: quickLinkIcons.projects,
      label: t.navProjects,
      text: t.projectsPageDescription,
    },
    {
      path: "/writings",
      icon: quickLinkIcons.writings,
      label: t.navWritings,
      text: t.writingsPageDescription,
    },
    {
      path: "/contact",
      icon: quickLinkIcons.contact,
      label: t.navContact,
      text: t.contactPageDescription,
    },
  ];

  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className={styles.heroCard}>
          <div className={styles.heroTop}>
            <Image
              className={styles.profileImage}
              src="/img/profile_round3.png"
              alt="Ikjun Choi"
              width={300}
              height={300}
              priority
              sizes="(max-width: 700px) 96px, 128px"
            />
            <div className={styles.heroIdentity}>
              <BadgeChip tone="accent" size="sm" className={styles.heroBadge}>
                {t.homeRole}
              </BadgeChip>
              {/* <p className={styles.heroTagline}>{t.homeResearchInterest}</p> */}
              <h1 className={styles.heroName}>Ikjun Choi</h1>
              <p className={styles.heroNameKr}>최익준</p>
            </div>
            <div className={styles.heroMeta}>
              <IconWithText icon="location-pin">{t.homeLocation}</IconWithText>
              <IconWithText icon="graduation-cap">
                {t.homeEducation}
              </IconWithText>
              <IconWithText icon="mail" href="mailto:choiikjun1101@gmail.com">
                {t.homeLinkEmail}
              </IconWithText>
              <IconWithText
                icon="github"
                href="https://github.com/no-ikjun"
                external
              >
                {t.homeLinkGithub}
              </IconWithText>
              <IconWithText
                icon="linkedin"
                href="https://www.linkedin.com/in/ikjunchoi/"
                external
              >
                {t.homeLinkLinkedIn}
              </IconWithText>
            </div>
          </div>

          <div className={styles.heroAboutSection}>
            <div className={styles.heroAboutHead}>
              <h2 className={styles.heroAboutTitle}>{t.homeAboutTitle}</h2>
              <span className={styles.heroAboutLine} aria-hidden />
            </div>
            <div className={styles.heroDescriptionWrap}>
              {t.homeDescription
                .split(/\n\n+/)
                .filter(Boolean)
                .map((paragraph, i) => (
                  <p key={i} className={styles.heroDescription}>
                    {paragraph.trim()}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className={styles.section}
        aria-labelledby="recent-activity-title"
      >
        <div className={styles.sectionHead}>
          <h2 id="recent-activity-title" className={styles.sectionTitle}>
            {t.homeRecentTitle}
          </h2>
        </div>

        <ul className={styles.recentList}>
          {recentItems.map((item) => {
            const body = (
              <>
                <div className={styles.recentBody}>
                  <div className={styles.recentTopLine}>
                    <BadgeChip size="sm" tone="muted">
                      {kindLabel[lang][item.kind] ?? item.kind}
                    </BadgeChip>
                    <h3 className={styles.recentTitle}>{item.title}</h3>
                  </div>
                  <p className={styles.recentSummary}>{item.summary}</p>
                </div>
                <span className={styles.recentArrow}>↗</span>
              </>
            );

            return (
              <li key={item.id} className={styles.recentItem}>
                <span className={styles.recentDate}>{item.date}</span>
                <span className={styles.timelineDot} aria-hidden="true" />
                {item.internal ? (
                  <Link
                    href={localePath(locale, item.href)}
                    className={styles.recentLink}
                  >
                    {body}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={styles.recentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {body}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="quick-links-title">
        <div className={styles.sectionHead}>
          <h2 id="quick-links-title" className={styles.sectionTitle}>
            {t.homeQuickLinksTitle}
          </h2>
        </div>

        <ul className={styles.quickLinkList}>
          {quickLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={localePath(locale, link.path)}
                className={styles.quickLinkCard}
              >
                <span className={styles.quickLinkIcon}>{link.icon}</span>
                <div className={styles.quickLinkMain}>
                  <h3 className={styles.quickLinkLabel}>{link.label}</h3>
                  <p className={styles.quickLinkText}>{link.text}</p>
                </div>
                <span className={styles.quickLinkArrow}>↗</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
