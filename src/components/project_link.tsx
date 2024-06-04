import Link from "next/link";
import styles from "../app/projects/page.module.css";
import Image from "next/image";

export interface ProjectLinkProps {
  type: string;
  url: string;
  description: string;
}

export default function ProjectLink({
  type,
  url,
  description,
}: ProjectLinkProps) {
  let href = "";
  let src = "";
  let alt = "";
  switch (type) {
    case "github":
      href = url;
      src = "./img/github_icon.svg";
      alt = "Github";
      break;
    case "website":
      href = url;
      src = "./img/link.svg";
      alt = "Website";
      break;
  }

  return (
    <div className={styles.icon_container}>
      <Link href={href} target="_blank">
        <Image
          className={styles.icon_button}
          src={src}
          alt={alt}
          width={32}
          height={32}
        />
      </Link>
    </div>
  );
}
