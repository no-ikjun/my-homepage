import { type Language } from "@/types/language";
import type { RecentActivityItem } from "@/types/home";

export const homeRecentActivities: Record<Language, RecentActivityItem[]> = {
  ko: [
    {
      id: "ai-world-fair-hackathon-2026",
      date: "2026.06",
      kind: "award",
      title: "AI Engineer World's Fair Hackathon 2026",
      summary: "AI Engineer WF Hackathon에서 3위를 수상했습니다.",
      href: "/about#awards",
      internal: true,
    },
    {
      id: "uc-berkeley-summer-session",
      date: "2026.06 - 2026.08",
      kind: "education",
      title: "UC Berkeley Summer Session",
      summary: "8주 간 UC Berkeley Summer Session에 참가하였습니다.",
      href: "/about#education",
      internal: true,
    },
    {
      id: "real-lab-gist-research-intern",
      date: "2026.03 - (ongoing)",
      kind: "career",
      title: "Real-Lab 연구 인턴",
      summary: "GIST의 Real-Lab에서 연구 인턴을 맡게 되었습니다.",
      href: "/about#career",
      internal: true,
    },
  ],
  en: [
    {
      id: "ai-world-fair-hackathon-2026",
      date: "2026.06",
      kind: "award",
      title: "AI Engineer World's Fair Hackathon 2026",
      summary: "Won 3rd place in AI Engineer WF Hackathon.",
      href: "/about#awards",
      internal: true,
    },
    {
      id: "uc-berkeley-summer-session",
      date: "2026.06 - 2026.08",
      kind: "education",
      title: "UC Berkeley Summer Session",
      summary: "8 weeks in UC Berkeley Summer Session.",
      href: "/about#education",
      internal: true,
    },
    {
      id: "real-lab-gist-research-intern",
      date: "2026.03 - (ongoing)",
      kind: "career",
      title: "Real-Lab Research Intern",
      summary: "Research Intern in Real-Lab in GIST.",
      href: "/about#career",
      internal: true,
    },
  ],
};
