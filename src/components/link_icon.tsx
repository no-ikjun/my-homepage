import Link from "next/link";
import styles from "../app/page.module.css";
import Image from "next/image";

export enum LinkType {
  Github,
  LinkedIn,
  Instagram,
  Mail,
}

export default function LinkIcon({ linkType }: { linkType: LinkType }) {
  let href = "";
  let src = "";
  let alt = "";
  switch (linkType) {
    case LinkType.Github:
      href = "https://github.com/no-ikjun";
      src = "./img/github_icon.svg";
      alt = "Github";
      break;
    case LinkType.LinkedIn:
      href = "https://www.linkedin.com/in/ikjunchoi/";
      src = "./img/linkedin_icon.svg";
      alt = "LinkedIn";
      break;
    case LinkType.Instagram:
      href = "https://www.instagram.com/__ikjun/";
      src = "./img/instagram_icon.svg";
      alt = "Instagram";
      break;
    case LinkType.Mail:
      href = "mailto:choiikjun1101@gmail.com";
      src = "./img/mail_icon.svg";
      alt = "Mail";
      break;
  }
  return (
    <div className={styles.icon_container}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${alt} 프로필로 이동 (새 창)`}
      >
        <Image
          className={styles.icon}
          src={src}
          alt={alt}
          width={35}
          height={35}
        />
        <span className="sr-only">(새 창에서 열림)</span>
      </Link>
    </div>
  );
}
