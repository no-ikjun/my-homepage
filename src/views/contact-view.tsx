import Image from "next/image";
import styles from "./contact.module.css";
import { translations } from "@/lib/translations";
import { type Locale } from "@/lib/locale";
import { PageHero } from "@/components/ui";

const contactLinks = [
  {
    key: "email",
    label: "Email",
    href: "mailto:choiikjun1101@gmail.com",
    description: "choiikjun1101@gmail.com",
    icon: "/img/mail_icon.svg",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ikjunchoi/",
    description: "Professional profile and direct messages",
    icon: "/img/linkedin_icon.svg",
  },
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/no-ikjun",
    description: "Projects, repositories, and technical activity",
    icon: "/img/github_icon.svg",
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/__ikjun/",
    description: "Casual updates and personal posts",
    icon: "/img/instagram_icon.svg",
  },
];

export default function ContactView({ locale }: { locale: Locale }) {
  const t = translations[locale];

  return (
    <main className={styles.main}>
      <div className={styles.shell}>
        <PageHero
          title={t.contactPageTitle}
          description={t.contactPageDescription}
        />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.contactLinksTitle}</h2>
          <p className={styles.sectionDescription}>{t.contactLinksDescription}</p>

          <ul className={styles.linkList}>
            {contactLinks.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className={styles.linkRow}
                  {...(item.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className={styles.linkIcon}>
                    <Image
                      src={item.icon}
                      alt=""
                      width={22}
                      height={22}
                    />
                  </span>
                  <div className={styles.linkMain}>
                    <h3 className={styles.linkLabel}>{item.label}</h3>
                    <p className={styles.linkDescription}>{item.description}</p>
                  </div>
                  <span className={styles.linkArrow}>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
