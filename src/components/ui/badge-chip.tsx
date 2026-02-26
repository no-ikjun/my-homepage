import type { ReactNode } from "react";
import styles from "./ui.module.css";

type BadgeChipProps = {
  children: ReactNode;
  tone?: "default" | "accent" | "muted";
  size?: "sm" | "md";
  className?: string;
};

const toneClass: Record<string, string> = {
  accent: styles.badgeAccent,
  muted: styles.badgeMuted,
};

const sizeClass: Record<string, string> = {
  sm: styles.badgeSm,
};

export default function BadgeChip({
  children,
  tone = "default",
  size = "md",
  className = "",
}: BadgeChipProps) {
  return (
    <span
      className={[
        styles.badge,
        toneClass[tone] ?? "",
        sizeClass[size] ?? "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
