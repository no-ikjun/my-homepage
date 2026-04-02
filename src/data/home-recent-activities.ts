import { type Language } from "@/types/language";
import type { RecentActivityItem } from "@/types/home";

export const homeRecentActivities: Record<Language, RecentActivityItem[]> = {
  ko: [
    {
      id: "real-lab-gist-research-intern",
      date: "2026.03 - (ongoing)",
      kind: "career",
      title: "Real-Lab 연구 인턴",
      summary: "GIST의 Real-Lab에서 연구 인턴을 맡게 되었습니다.",
      href: "/about#career",
      internal: true,
    },
    {
      id: "wing-club-leader",
      date: "2026.02-(ongoing)",
      kind: "activity",
      title: "GIST 전산동아리 WING 동아리장",
      summary: "GIST 전산동아리 WING의 동아리장을 맡게 되었습니다.",
      href: "/about#activities",
      internal: true,
    },
    {
      id: "gsa-infoteam-deputy-leader",
      date: "2026.01-(ongoing)",
      kind: "activity",
      title: "GSA InfoTeam 부팀장",
      summary: "GIST 개발 자치회 Infoteam의 부팀장을 맡게 되었습니다.",
      href: "/about#activities",
      internal: true,
    },
  ],
  en: [
    {
      id: "real-lab-gist-research-intern",
      date: "2026.03 - (ongoing)",
      kind: "career",
      title: "Real-Lab Research Intern",
      summary: "Research Intern in Real-Lab in GIST.",
      href: "/about#career",
      internal: true,
    },
    {
      id: "wing-club-leader",
      date: "2026.02-(ongoing)",
      kind: "activity",
      title: "GIST Computer Club WING Leader",
      summary: "WING Club Leader of GIST Computer Club.",
      href: "/about#activities",
      internal: true,
    },
    {
      id: "gsa-infoteam-deputy-leader",
      date: "2026.01-(ongoing)",
      kind: "activity",
      title: "GSA InfoTeam Deputy Leader",
      summary: "Deputy Leader of GSA InfoTeam.",
      href: "/about#activities",
      internal: true,
    },
  ],
};
