import { type Language } from "@/types/language";
import type { RecentActivityItem } from "@/types/home";

export const homeRecentActivities: Record<Language, RecentActivityItem[]> = {
  ko: [
    {
      id: "impact-ai-2025",
      date: "2025.05",
      kind: "award",
      title: "Impact AI Hackathon 수상",
      summary: "GDG GIST 해커톤에서 AI 기반 뉴스 플랫폼 아이디어로 2위를 수상했습니다.",
      href: "/about#awards",
      internal: true,
    },
    {
      id: "wisemind-service",
      date: "2024.02-2025.07",
      kind: "project",
      title: "Wisemind 개발 운영",
      summary: "AI 금융 에이전트 서비스의 프론트엔드/백엔드/AI 서버를 분리 설계하고 운영했습니다.",
      href: "/projects",
      internal: true,
    },
    {
      id: "sigor-rushhour",
      date: "2023.06-2024.02",
      kind: "career",
      title: "시고르자브종 러시아워 앱 개발",
      summary: "Flutter 앱 개발과 NestJS API 개발, 데이터 분석 업무를 함께 수행했습니다.",
      href: "/about#career",
      internal: true,
    },
    {
      id: "gsa-infoteam",
      date: "2023.03-2024.06",
      kind: "activity",
      title: "GSA InfoTeam 리드",
      summary: "학생 대상 서비스 개발과 Ziggle 프로젝트, 개발자 커뮤니티 이벤트 운영을 진행했습니다.",
      href: "/about#activities",
      internal: true,
    },
  ],
  en: [
    {
      id: "impact-ai-2025",
      date: "2025.05",
      kind: "award",
      title: "Impact AI Hackathon Award",
      summary:
        "Won 2nd prize at the GDG GIST Impact AI Hackathon with an AI-based news platform concept.",
      href: "/about#awards",
      internal: true,
    },
    {
      id: "wisemind-service",
      date: "2024.02-2025.07",
      kind: "project",
      title: "Built and Operated Wisemind",
      summary:
        "Designed and operated the frontend, backend, and AI server architecture for an AI financial agent service.",
      href: "/projects",
      internal: true,
    },
    {
      id: "sigor-rushhour",
      date: "2023.06-2024.02",
      kind: "career",
      title: "Rushhour App Development at Sigor",
      summary:
        "Worked across Flutter app development, NestJS APIs, and subway usage data analysis.",
      href: "/about#career",
      internal: true,
    },
    {
      id: "gsa-infoteam",
      date: "2023.03-2024.06",
      kind: "activity",
      title: "Led GSA InfoTeam",
      summary:
        "Built student-facing services, worked on Ziggle, and helped run developer community events at GIST.",
      href: "/about#activities",
      internal: true,
    },
  ],
};
