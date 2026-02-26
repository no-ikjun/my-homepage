import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./ui.module.css";

type ActionButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "text";
  className?: string;
  ariaLabel?: string;
  target?: string;
  rel?: string;
};

export default function ActionButton({
  href,
  children,
  variant = "secondary",
  className = "",
  ariaLabel,
  target,
  rel,
}: ActionButtonProps) {
  return (
    <Link
      href={href}
      className={[
        styles.button,
        variant === "primary" ? styles.buttonPrimary : "",
        variant === "ghost" ? styles.buttonGhost : "",
        variant === "text" ? styles.buttonText : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={ariaLabel}
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  );
}
