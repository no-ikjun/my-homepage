import { type Language } from "@/types/language";
import type { RecentActivityItem } from "@/types/home";

export const homeRecentActivities: Record<Language, RecentActivityItem[]> = {
  ko: [
    {
      id: "wing-club-leader",
      date: "2026.02-(ongoing)",
      kind: "activity",
      title: "GIST 전산동아리 WING 동아리장",
      summary: "GIST 전산동아리 WING의 동아리장을 맡게 되었습니다.",
      href: "/about#experiences",
      internal: true,
    },
    {
      id: "gsa-infoteam-sub-leader",
      date: "2026.01-(ongoing)",
      kind: "activity",
      title: "GSA InfoTeam 부팀장",
      summary: "GIST 개발 자치회 Infoteam의 부팀장을 맡게 되었습니다.",
      href: "/about#experiences",
      internal: true,
    },
    {
      id: "sterri-product-developer",
      date: "2026.01-(ongoing)",
      kind: "career",
      title: "(주)스테리 제품 개발자",
      summary: "(주)스테리의 제품 개발자로 활동하고 있습니다.",
      href: "/about#careers",
      internal: true,
    },
    {
      id: "impact-ai-hackathon",
      date: "2025.05",
      kind: "award",
      title: "2025 Impact AI 해커톤",
      summary: "Impact AI 해커톤에서 GIST 인공지능연구소장상을 수상했습니다.",
      href: "/about#awards",
      internal: true,
    },
  ],
  en: [
    {
      id: "wing-club-leader",
      date: "2026.02-(ongoing)",
      kind: "activity",
      title: "GIST Computer Club WING Leader",
      summary: "WING Club Leader of GIST Computer Club.",
      href: "/about#experiences",
      internal: true,
    },
    {
      id: "gsa-infoteam-sub-leader",
      date: "2026.01-(ongoing)",
      kind: "activity",
      title: "GSA InfoTeam Sub-Leader",
      summary: "Sub-Leader of GSA InfoTeam.",
      href: "/about#experiences",
      internal: true,
    },
    {
      id: "sterri-product-developer",
      date: "2026.01-(ongoing)",
      kind: "career",
      title: "Sterri Inc. Product Developer",
      summary: "Product Developer of Sterri Inc.",
      href: "/about#careers",
      internal: true,
    },
    {
      id: "impact-ai-hackathon",
      date: "2025.05",
      kind: "award",
      title: "2025 Impact AI Hackathon",
      summary:
        "Won the GIST AI Research Institute Director's Award at the Impact AI Hackathon.",
      href: "/about#awards",
      internal: true,
    },
  ],
};
