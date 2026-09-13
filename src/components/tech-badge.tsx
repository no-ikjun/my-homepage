import Image from "next/image";
import * as si from "simple-icons";
import type { SimpleIcon } from "simple-icons";
import { cn } from "@/lib/utils";

type Entry = { label: string; icon?: SimpleIcon; localIcon?: string; hex?: string };

/**
 * Stack names as written in content -> brand mark and colour.
 * Names not listed here fall back to a neutral chip, so content can use any string.
 */
const STACK: Record<string, Entry> = {
  react: { label: "React", icon: si.siReact },
  typescript: { label: "TypeScript", icon: si.siTypescript },
  nestjs: { label: "NestJS", icon: si.siNestjs },
  "next.js": { label: "Next.js", icon: si.siNextdotjs },
  nextjs: { label: "Next.js", icon: si.siNextdotjs },
  docker: { label: "Docker", icon: si.siDocker },
  flutter: { label: "Flutter", icon: si.siFlutter },
  postgresql: { label: "PostgreSQL", icon: si.siPostgresql },
  fastapi: { label: "FastAPI", icon: si.siFastapi },
  cloudflare: { label: "Cloudflare", icon: si.siCloudflare },
  figma: { label: "Figma", icon: si.siFigma },
  pytorch: { label: "PyTorch", icon: si.siPytorch },
  "hugging face": { label: "Hugging Face", icon: si.siHuggingface, hex: "FF9D00" },
  python: { label: "Python", icon: si.siPython },
  mcp: { label: "MCP", icon: si.siModelcontextprotocol },
  aws: { label: "AWS", localIcon: "/img/aws_icon.svg", hex: "FF9900" },
};

function luminance(hex: string) {
  const n = parseInt(hex, 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => c / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function TechBadge({ name, className }: { name: string; className?: string }) {
  const entry = STACK[name.trim().toLowerCase()];
  const label = entry?.label ?? name;
  const hex = entry?.hex ?? entry?.icon?.hex;
  // Near-black marks (Next.js, MCP) get no tint and follow the text colour so
  // they stay visible in dark mode.
  const tint = hex && luminance(hex) > 0.12 ? `#${hex}` : undefined;

  return (
    <span
      style={tint ? ({ "--tech": tint } as React.CSSProperties) : undefined}
      className={cn(
        "inline-flex h-6 items-center gap-1.5 rounded-md px-2 text-xs font-medium text-foreground/90",
        tint ? "bg-[color-mix(in_srgb,var(--tech)_14%,transparent)]" : "bg-muted",
        className,
      )}
    >
      {entry?.icon ? (
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className="size-3.5 shrink-0"
          style={{ fill: tint ?? "currentColor" }}
        >
          <path d={entry.icon.path} />
        </svg>
      ) : entry?.localIcon ? (
        <Image src={entry.localIcon} alt="" width={14} height={14} className="size-3.5 shrink-0" />
      ) : null}
      {label}
    </span>
  );
}
