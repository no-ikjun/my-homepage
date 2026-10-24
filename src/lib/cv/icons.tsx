import { Circle, Path, Rect, Svg } from "@react-pdf/renderer";
import type { Style } from "@react-pdf/stylesheet";

/**
 * A few Lucide icons redrawn for react-pdf, which has no <img> for SVG text.
 * Each entry is the icon's primitives on a 24×24 grid; stroke colour comes
 * from the caller so the same shape works in ink and in the accent colour.
 */
type Prim =
  | { t: "p"; d: string }
  | { t: "r"; x: number; y: number; w: number; h: number; rx?: number }
  | { t: "c"; cx: number; cy: number; r: number };

const ICONS = {
  mail: [
    { t: "r", x: 2, y: 4, w: 20, h: 16, rx: 2 },
    { t: "p", d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" },
  ],
  globe: [
    { t: "c", cx: 12, cy: 12, r: 10 },
    { t: "p", d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" },
    { t: "p", d: "M2 12h20" },
  ],
  github: [
    {
      t: "p",
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
    },
    { t: "p", d: "M9 18c-4.51 2-5-2-7-2" },
  ],
  linkedin: [
    { t: "p", d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" },
    { t: "r", x: 2, y: 9, w: 4, h: 12 },
    { t: "c", cx: 4, cy: 4, r: 2 },
  ],
  mapPin: [
    { t: "p", d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" },
    { t: "c", cx: 12, cy: 10, r: 3 },
  ],
  user: [
    { t: "p", d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" },
    { t: "c", cx: 12, cy: 7, r: 4 },
  ],
  briefcase: [
    { t: "p", d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" },
    { t: "r", x: 2, y: 6, w: 20, h: 14, rx: 2 },
  ],
  layers: [
    { t: "p", d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" },
    { t: "p", d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" },
    { t: "p", d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" },
  ],
  graduationCap: [
    { t: "p", d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" },
    { t: "p", d: "M22 10v6" },
    { t: "p", d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5" },
  ],
  wrench: [
    { t: "p", d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" },
  ],
  trophy: [
    { t: "p", d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6" },
    { t: "p", d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18" },
    { t: "p", d: "M4 22h16" },
    { t: "p", d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" },
    { t: "p", d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" },
    { t: "p", d: "M18 2H6v7a6 6 0 0 0 12 0V2Z" },
  ],
  users: [
    { t: "p", d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" },
    { t: "c", cx: 9, cy: 7, r: 4 },
    { t: "p", d: "M22 21v-2a4 4 0 0 0-3-3.87" },
    { t: "p", d: "M16 3.13a4 4 0 0 1 0 7.75" },
  ],
  shield: [
    { t: "p", d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" },
  ],
  arrowUpRight: [
    { t: "p", d: "M7 7h10v10" },
    { t: "p", d: "M7 17 17 7" },
  ],
} satisfies Record<string, Prim[]>;

export type IconName = keyof typeof ICONS;

export function Icon({
  name,
  size = 9,
  color = "#1a1a1a",
  strokeWidth = 2,
  style,
}: {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: Style;
}) {
  const common = { stroke: color, strokeWidth, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" style={style}>
      {(ICONS[name] as Prim[]).map((p, i) => {
        if (p.t === "p") return <Path key={i} d={p.d} {...common} />;
        if (p.t === "r") return <Rect key={i} x={p.x} y={p.y} width={p.w} height={p.h} rx={p.rx} ry={p.rx} {...common} />;
        return <Circle key={i} cx={p.cx} cy={p.cy} r={p.r} {...common} />;
      })}
    </Svg>
  );
}
