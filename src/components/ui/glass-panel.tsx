import type { ElementType, ReactNode } from "react";
import styles from "./ui.module.css";

type GlassPanelProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  padding?: "sm" | "md" | "lg";
};

export default function GlassPanel<T extends ElementType = "div">({
  as,
  children,
  className = "",
  interactive = false,
  padding = "md",
}: GlassPanelProps<T>) {
  const Component = (as ?? "div") as ElementType;
  const paddingClass =
    padding === "sm"
      ? styles.panelPaddingSm
      : padding === "lg"
        ? styles.panelPaddingLg
        : styles.panelPaddingMd;

  return (
    <Component
      className={[
        styles.glassPanel,
        paddingClass,
        interactive ? styles.panelInteractive : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Component>
  );
}
