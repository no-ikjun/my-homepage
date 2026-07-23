"use client";

import { useMemo, useState } from "react";
import styles from "./ui.module.css";

type ProjectVisualProps = {
  title: string;
  image?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

function getInitials(title: string) {
  const words = title
    .replace(/[()]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  if (words.length === 0) return "P";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return `${words[0][0]}${words[1][0]}`.toUpperCase();
}

export default function ProjectVisual({
  title,
  image,
  alt,
  size = "md",
  className = "",
}: ProjectVisualProps) {
  const [failed, setFailed] = useState(false);
  const initials = useMemo(() => getInitials(title), [title]);
  const showImage = image && !failed;

  return (
    <span
      className={[
        styles.projectVisual,
        size === "sm" ? styles.projectVisualSm : "",
        size === "lg" ? styles.projectVisualLg : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden={!alt}
    >
      {showImage ? (
        // Remote project thumbnails come from product sites and app stores.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt={alt ?? ""} onError={() => setFailed(true)} />
      ) : (
        <span className={styles.projectVisualFallback}>{initials}</span>
      )}
    </span>
  );
}
