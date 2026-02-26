import Link from "next/link";
import styles from "./ui.module.css";

type BackLinkProps = {
  href?: string;
  label?: string;
};

export default function BackLink({ href = "/", label = "Back" }: BackLinkProps) {
  return (
    <Link href={href} className={styles.backLink}>
      <span className={styles.backLinkIcon} aria-hidden="true">
        ←
      </span>
      <span>{label}</span>
    </Link>
  );
}
