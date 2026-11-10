import Image from "next/image";
import * as si from "simple-icons";
import type { SimpleIcon } from "simple-icons";
import { cn } from "@/lib/utils";

/** A mark simple-icons does not ship, drawn inline so it takes the chip's tint like the others. */
type CustomIcon = { viewBox: string; paths: string[] };
type Entry = { label: string; icon?: SimpleIcon; customIcon?: CustomIcon; localIcon?: string; hex?: string };

// Amplitude's circular mark (the wordmark dropped), from its 2020 logo; colour
// from amplitude.com's touch icon.
const AMPLITUDE: CustomIcon = {
  viewBox: "0 0 507 507",
  paths: [
      "M225.48,116.24c-1.38-1.82-2.95-2.78-4.7-2.78c-1.44,0-2.75,0.64-3.6,1.19 c-13.26,10.42-31.4,54.53-46.27,112.67l13.16,0.15c26,0.29,52.84,0.6,79.38,1.01c-6.99-26.63-13.61-49.45-19.67-67.88 C234.92,133.67,228.94,121.61,225.48,116.24z",
      "M254.99,4.15c-137.52,0-249,111.48-249,249c0,137.52,111.48,249,249,249s249-111.48,249-249 C503.99,115.63,392.51,4.15,254.99,4.15z M434.04,257.67c-0.02,0.02-0.04,0.03-0.06,0.05c-0.27,0.22-0.54,0.42-0.83,0.62 c-0.09,0.06-0.18,0.13-0.28,0.19c-0.19,0.12-0.39,0.24-0.58,0.35c-0.18,0.11-0.36,0.21-0.54,0.31c-0.01,0.01-0.02,0.01-0.03,0.02 c-1.83,0.96-3.92,1.51-6.13,1.51c-0.18,0-117.95,0-117.95,0c0.94,3.91,1.97,8.35,3.09,13.18c6.46,27.91,23.64,102.06,41.88,102.06 l0.36,0.01l0.2-0.03l0.35,0c14.25,0,21.52-20.6,37.46-65.74l0.19-0.55c2.56-7.25,5.45-15.43,8.58-24.08l0.8-2.21l0.01,0 c0.81-2.16,2.89-3.7,5.34-3.7c3.15,0,5.71,2.56,5.71,5.71c0,0.57-0.09,1.12-0.24,1.64l0,0l-0.66,2.22 c-1.66,5.37-3.43,12.69-5.47,21.16c-9.5,39.37-23.85,98.85-60.67,98.85l-0.27,0c-23.79-0.19-38.03-38.22-44.11-54.46 c-11.37-30.37-19.97-62.73-28.27-94.07H163.34l-22.54,72.14l-0.33-0.26c-2.06,3.24-5.68,5.32-9.67,5.32 c-6.29,0-11.44-5.12-11.47-11.41l0.02-0.39l1.36-8.16c3.11-18.54,6.84-37.78,11.1-57.23H85.97l-0.17-0.17 c-8.32-1.2-14.71-8.54-14.71-17.1c0-8.39,5.94-15.54,14.12-16.99c0.75-0.1,2.27-0.23,5.36-0.23c0.66,0,1.4,0,2.23,0.02 c14.53,0.25,29.95,0.48,46.86,0.7c23.93-97.24,51.65-146.6,82.4-146.74c32.99,0,57.47,75.12,77.06,148.61l0.08,0.29 c40.25,0.81,83.15,1.98,124.86,4.97l1.75,0.16c0.67,0.01,1.33,0.08,1.97,0.18l0.24,0.02c0.07,0.01,0.14,0.03,0.21,0.05 c0.04,0.01,0.07,0.02,0.11,0.02c6.07,1.22,10.57,6.54,10.57,12.94C438.91,251.55,437.01,255.24,434.04,257.67z"
  ],
};

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
  amplitude: { label: "Amplitude", customIcon: AMPLITUDE, hex: "1E61F0" },
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
      ) : entry?.customIcon ? (
        <svg
          viewBox={entry.customIcon.viewBox}
          aria-hidden
          className="size-3.5 shrink-0"
          style={{ fill: tint ?? "currentColor" }}
        >
          {entry.customIcon.paths.map((d) => (
            <path key={d.slice(0, 16)} d={d} />
          ))}
        </svg>
      ) : entry?.localIcon ? (
        <Image src={entry.localIcon} alt="" width={14} height={14} className="size-3.5 shrink-0" />
      ) : null}
      {label}
    </span>
  );
}
