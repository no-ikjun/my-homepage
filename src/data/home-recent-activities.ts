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
  ],
};
