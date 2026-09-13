import Image from "next/image";
import { cn } from "@/lib/utils";

/** Project mark: the logo when there is one, otherwise the first letter. */
export function ProjectIcon({
  src,
  title,
  size = 40,
  className,
}: {
  src?: string;
  title: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-card font-semibold text-muted-foreground",
        className,
      )}
      style={{ width: size, height: size, fontSize: size * 0.4 }}
    >
      {src ? (
        <Image src={src} alt="" fill sizes={`${size}px`} className="object-cover" />
      ) : (
        <span aria-hidden>{title.slice(0, 1)}</span>
      )}
    </span>
  );
}
