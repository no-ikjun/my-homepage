import Image from "next/image";
import Link from "next/link";
import styles from "./link_icon.module.css";

export enum LinkType {
  Github,
  LinkedIn,
  Instagram,
  Mail,
}

const linkConfig: Record<
  LinkType,
  { href: string; src: string; alt: string; label: string }
> = {
  [LinkType.Github]: {
    href: "https://github.com/no-ikjun",
    src: "/img/github_icon.svg",
    alt: "Github",
    label: "GitHub",
  },
  [LinkType.LinkedIn]: {
    href: "https://www.linkedin.com/in/ikjunchoi/",
    src: "/img/linkedin_icon.svg",
    alt: "LinkedIn",
    label: "LinkedIn",
  },
  [LinkType.Instagram]: {
    href: "https://www.instagram.com/__ikjun/",
    src: "/img/instagram_icon.svg",
    alt: "Instagram",
    label: "Instagram",
  },
  [LinkType.Mail]: {
    href: "mailto:choiikjun1101@gmail.com",
    src: "/img/mail_icon.svg",
    alt: "Mail",
    label: "Email",
  },
};

export default function LinkIcon({
  linkType,
  showLabel = false,
}: {
  linkType: LinkType;
  showLabel?: boolean;
}) {
  const { href, src, alt, label } = linkConfig[linkType];

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={showLabel ? styles.itemWithLabel : styles.item}
      aria-label={showLabel ? undefined : `${alt} 프로필로 이동 (새 창)`}
    >
      <Image className={styles.icon} src={src} alt="" width={20} height={20} />
      {showLabel && <span className={styles.itemLabel}>{label}</span>}
      <span className="sr-only">(새 창에서 열림)</span>
    </Link>
  );
}
