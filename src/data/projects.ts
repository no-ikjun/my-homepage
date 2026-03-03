import { type Language } from "@/types/language";

type ProjectLink = {
  type: "github" | "website";
  url: string;
  description: string;
};

export type Project = {
  title: string;
  period: string;
  image: string;
  summary: string;
  description: string;
  directLink: string;
  techStack: string[];
  links: ProjectLink[];
  features: string[];
  role: string[];
};

export const projects: Record<Language, Project[]> = {
  en: [
    {
      title: "SPRIT",
      period: "2024.3 - (ongoing)",
      image:
        "https://play-lh.googleusercontent.com/xc7SKBJq60amNLJMphT9QBPkfbaVXtbrhGbTuexJPtxYII_A-QC2hcLHuJ96PvHqHw=w240-h480-rw",
      summary: "App service that creates a steady reading habit.",
      description:
        "SPRIT is a mobile app that helps users build and maintain consistent reading habits. It provides features like reading tracking, goal setting, and community engagement to motivate users to read more regularly.",
      directLink: "https://sprit-app.me",
      techStack: ["flutter", "NextJS", "NestJS", "docker", "AWS", "Figma"],
      features: [
        "Reading habit tracking and statistics",
        "Goal setting and achievement system",
        "Cross-platform mobile app (Flutter)",
        "REST API backend with NestJS",
        "Deployed on AWS with Docker",
      ],
      role: ["Full-stack development", "App development"],
      links: [
        {
          type: "github",
          url: "https://github.com/no-ikjun/sprit",
          description: "APP GitHub repository",
        },
        {
          type: "github",
          url: "https://github.com/no-ikjun/sprit-be",
          description: "Backend GitHub repository",
        },
        {
          type: "website",
          url: "https://disquiet.io/product/%EC%8A%A4%ED%94%84%EB%A6%BF",
          description: "Disquiet project url",
        },
      ],
    },
    {
      title: "DeokDam Pocket",
      period: "2023.12 - (ongoing)",
      image:
        "https://media.disquiet.io/images/product/thumbnail/bb7531256d61c4750454e1d77de083920706f4a3b89bf4f16998f02684bcd641",
      summary: "New year's Greeting Platform since 2024",
      description:
        "DeokDam Pocket is a platform where users can exchange New Year's greetings (덕담) with friends and family. It allows users to look back on the past year and share meaningful messages for the new year.",
      directLink: "https://deokdam.app",
      techStack: ["NextJS", "TypeScript"],
      features: [
        "New Year's greeting card creation and sharing",
        "Year-in-review summary",
        "Social sharing and invitation system",
        "Responsive web design",
      ],
      role: ["Full-stack development", "Planning"],
      links: [
        {
          type: "github",
          url: "https://github.com/no-ikjun/deokdam-pocket",
          description: "GitHub repository",
        },
      ],
    },
    {
      title: "Wisemind",
      period: "2024.2 - 2025.7",
      image: "https://analyst.ikjun.com/logo.png",
      summary: "AI Financial Agent based on ChatGPT & HyperCLOVA X",
      description:
        "Wisemind is an AI-powered financial analysis agent that leverages ChatGPT and HyperCLOVA X to provide intelligent financial insights and recommendations. It processes financial data and delivers actionable analysis through a conversational interface.",
      directLink: "https://analyst.ikjun.com",
      techStack: ["React", "CloudFlare", "NestJS", "FastAPI", "AWS"],
      features: [
        "AI-powered financial analysis and recommendations",
        "Integration with ChatGPT and HyperCLOVA X",
        "Conversational interface for financial queries",
        "Multi-repository architecture (FE, BE, AI server)",
      ],
      role: ["Full-stack development", "AI integration"],
      links: [
        {
          type: "github",
          url: "https://github.com/no-ikjun/analyst-nest",
          description: "Backend GitHub repository",
        },
        {
          type: "github",
          url: "https://github.com/no-ikjun/wisemind-ai-server",
          description: "AI Server GitHub repository",
        },
        {
          type: "github",
          url: "https://github.com/no-ikjun/analyst-fe",
          description: "Frontend GitHub repository",
        },
      ],
    },
  ],
  ko: [
    {
      title: "스프릿",
      period: "2024.3 - 진행 중",
      image:
        "https://play-lh.googleusercontent.com/xc7SKBJq60amNLJMphT9QBPkfbaVXtbrhGbTuexJPtxYII_A-QC2hcLHuJ96PvHqHw=w240-h480-rw",
      summary: "꾸준한 독서 습관을 만들어주는 앱 서비스",
      description:
        "스프릿은 사용자가 꾸준한 독서 습관을 만들고 유지할 수 있도록 돕는 모바일 앱입니다. 독서 기록, 목표 설정, 커뮤니티 참여 등의 기능을 통해 더 자주 읽도록 동기를 부여합니다.",
      directLink: "https://sprit-app.me",
      techStack: ["flutter", "NextJS", "NestJS", "docker", "AWS", "Figma"],
      features: [
        "독서 습관 추적 및 통계",
        "목표 설정 및 달성 시스템",
        "크로스 플랫폼 모바일 앱 (Flutter)",
        "NestJS 기반 REST API 백엔드",
        "Docker와 AWS 배포",
      ],
      role: ["풀스택 개발", "앱 개발"],
      links: [
        {
          type: "github",
          url: "https://github.com/no-ikjun/sprit",
          description: "앱 GitHub 저장소",
        },
        {
          type: "github",
          url: "https://github.com/no-ikjun/sprit-be",
          description: "백엔드 GitHub 저장소",
        },
        {
          type: "website",
          url: "https://disquiet.io/product/%EC%8A%A4%ED%94%84%EB%A6%BF",
          description: "디스콰이엇 프로젝트 페이지",
        },
      ],
    },
    {
      title: "덕담 주머니",
      period: "2023.12 - 진행 중",
      image:
        "https://media.disquiet.io/images/product/thumbnail/bb7531256d61c4750454e1d77de083920706f4a3b89bf4f16998f02684bcd641",
      summary: "한 해를 되돌아보며 새해 덕담을 주고받는 덕담 플랫폼 서비스",
      description:
        "덕담 주머니는 친구와 가족과 새해 덕담을 주고받을 수 있는 플랫폼입니다. 한 해를 돌아보고 새해를 위한 의미 있는 메시지를 공유할 수 있습니다.",
      directLink: "https://deokdam.app",
      techStack: ["NextJS", "TypeScript"],
      features: [
        "새해 덕담 카드 생성 및 공유",
        "한 해 회고 요약",
        "소셜 공유 및 초대 시스템",
        "반응형 웹 디자인",
      ],
      role: ["풀스택 개발", "기획"],
      links: [
        {
          type: "github",
          url: "https://github.com/no-ikjun/deokdam-pocket",
          description: "GitHub 저장소",
        },
      ],
    },
    {
      title: "Wisemind",
      period: "2024.2 - 2025.7",
      image: "https://analyst.ikjun.com/logo.png",
      summary: "HyperCLOVA X 기반의 AI 금융 에이전트",
      description:
        "Wisemind는 ChatGPT와 HyperCLOVA X를 활용한 AI 기반 금융 분석 에이전트입니다. 금융 데이터를 처리하고 대화형 인터페이스를 통해 실행 가능한 분석 결과를 제공합니다.",
      directLink: "https://analyst.ikjun.com",
      techStack: ["React", "CloudFlare", "NestJS", "FastAPI", "AWS"],
      features: [
        "AI 기반 금융 분석 및 추천",
        "ChatGPT, HyperCLOVA X 연동",
        "금융 질의 대화형 인터페이스",
        "멀티 레포지토리 아키텍처 (FE, BE, AI 서버)",
      ],
      role: ["풀스택 개발", "AI 연동"],
      links: [
        {
          type: "github",
          url: "https://github.com/no-ikjun/analyst-nest",
          description: "백엔드 GitHub 저장소",
        },
        {
          type: "github",
          url: "https://github.com/no-ikjun/wisemind-ai-server",
          description: "AI 서버 GitHub 저장소",
        },
        {
          type: "github",
          url: "https://github.com/no-ikjun/analyst-fe",
          description: "프론트엔드 GitHub 저장소",
        },
      ],
    },
  ],
};
