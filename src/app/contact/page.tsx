"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useTranslations } from "@/contexts/language-context";
import { PageHero } from "@/components/ui";

const contactLinks = [
  {
    key: "email",
    label: "Email",
    href: "mailto:choiikjun1101@gmail.com",
    description: "choiikjun1101@gmail.com",
    external: true,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ikjunchoi/",
    description: "Professional profile and direct messages",
    external: true,
  },
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/no-ikjun",
    description: "Projects, repositories, and technical activity",
    external: true,
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/__ikjun/",
    description: "Casual updates and personal posts",
    external: true,
  },
];

export default function ContactPage() {
  const t = useTranslations();

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
                <Link
                  href={item.href}
                  className={styles.linkRow}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  <div className={styles.linkMain}>
                    <h3 className={styles.linkLabel}>{item.label}</h3>
                    <p className={styles.linkDescription}>{item.description}</p>
                  </div>
                  <span className={styles.linkArrow}>↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
