import Image from "next/image";
import { cn } from "@/lib/utils";

/** Project mark: the logo when there is one, otherwise the first letter, on a tint of the project colour. */
export function ProjectIcon({
  src,
  title,
  accent,
  size = 40,
  className,
}: {
  src?: string;
  title: string;
  accent?: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl border font-semibold",
        accent
          ? "border-[color-mix(in_srgb,var(--accent-color)_25%,transparent)] bg-[color-mix(in_srgb,var(--accent-color)_12%,var(--card))] text-[var(--accent-color)]"
          : "border-border bg-card text-muted-foreground",
        className,
      )}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.4,
        ...(accent ? ({ "--accent-color": accent } as React.CSSProperties) : {}),
      }}
    >
      {src ? (
        <Image src={src} alt="" fill sizes={`${size}px`} className="object-cover" />
      ) : (
        <span aria-hidden>{title.slice(0, 1)}</span>
      )}
    </span>
  );
}
