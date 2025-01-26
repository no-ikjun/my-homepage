import Image from "next/image";
import styles from "../app/projects/page.module.css";

export interface TechStackProps {
  name: string;
}

export default function TechStack({ name }: TechStackProps) {
  let src = "";
  let alt = "";
  switch (name) {
    case "React":
      src = "./img/react_icon.svg";
      alt = "React";
      break;
    case "NextJS":
      src = "./img/nextjs_icon.svg";
      alt = "NextJS";
      break;
    case "NestJS":
      src = "./img/nestjs_icon.svg";
      alt = "NestJS";
      break;
    case "docker":
      src = "./img/docker_icon.svg";
      alt = "Docker";
      break;
    case "AWS":
      src = "./img/aws_icon.svg";
      alt = "AWS";
      break;
    case "CloudFlare":
      src = "./img/cloudflare_icon.svg";
      alt = "CloudFlare";
      break;
    case "flutter":
      src = "./img/flutter_icon.svg";
      alt = "Flutter";
      break;
  }
  return (
    <div className={styles.icon_container}>
      <Image
        className={styles.icon}
        src={src}
        alt={alt}
        width={32}
        height={32}
      />
    </div>
  );
}
