import type { Localized } from "@/lib/i18n";

export type NewsKind = "award" | "education" | "career" | "project" | "activity" | "writing";

export type NewsItem = {
  id: string;
  /** "YYYY-MM" */
  date: string;
  kind: NewsKind;
  title: Localized<string>;
  summary: Localized<string>;
  /** Locale-neutral internal path ("/about#awards") or an external URL */
  href?: string;
};

/**
 * Curated, newest first. The home page shows the first four; keep this list
 * short and prune it rather than letting it grow.
 */
export const news: NewsItem[] = [
  {
    id: "aiewf-2026",
    date: "2026-06",
    kind: "award",
    title: { en: "AI Engineer World's Fair Hackathon", ko: "AI Engineer World's Fair Hackathon" },
    summary: {
      en: "3rd place with Rote, a continual-learning computer automation platform.",
      ko: "지속 학습형 컴퓨터 자동화 플랫폼 Rote로 3위를 받았습니다.",
    },
    href: "/about#awards",
  },
  {
    id: "berkeley-2026",
    date: "2026-06",
    kind: "education",
    title: { en: "UC Berkeley Summer Session", ko: "UC Berkeley Summer Session" },
    summary: {
      en: "Eight weeks in Berkeley for CS161 Computer Security and CS188 Introduction to AI.",
      ko: "8주간 Berkeley에서 CS161 Computer Security와 CS188 Introduction to AI를 들었습니다.",
    },
    href: "/about#education",
  },
  {
    id: "real-lab-2026",
    date: "2026-03",
    kind: "career",
    title: { en: "Joined Real-Lab @ GIST", ko: "Real-Lab @ GIST 합류" },
    summary: {
      en: "Undergraduate research intern working on diffusion language models.",
      ko: "학부 연구 인턴으로 Diffusion Language Model 연구를 시작했습니다.",
    },
    href: "/projects/diffusion-language-models",
  },
  {
    id: "gist-chatbot-2026",
    date: "2026-01",
    kind: "project",
    title: { en: "GIST Chatbot", ko: "GIST 챗봇" },
    summary: {
      en: "Started building a chatbot over GIST's official documents with GSA InfoTeam.",
      ko: "GSA InfoTeam과 함께 GIST 공식 자료 기반 챗봇 개발을 시작했습니다.",
    },
    href: "/projects/gist-chatbot",
  },
];
