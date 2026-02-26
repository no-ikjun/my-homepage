"use client";

import Image from "next/image";
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
    icon: "/img/mail_icon.svg",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ikjunchoi/",
    description: "Professional profile and direct messages",
    external: true,
    icon: "/img/linkedin_icon.svg",
  },
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/no-ikjun",
    description: "Projects, repositories, and technical activity",
    external: true,
    icon: "/img/github_icon.svg",
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/__ikjun/",
    description: "Casual updates and personal posts",
    external: true,
    icon: "/img/instagram_icon.svg",
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
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
