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

export type ProjectsByType = {
  team: Project[];
  individual: Project[];
};

const teamProjectsEn: Project[] = [
  {
    title: "GIST Chatbot",
    period: "2026.01 - (ongoing)",
    image: "https://chatbot.gistory.me/logo.svg",
    summary: "Intelligent chatbot service for GIST students.",
    description:
      "GIST Chatbot is an intelligent chatbot based on GIST's official information. It searches through academic notices, freshman introduction materials, academic handbooks, and other official school data to provide accurate and fast answers to school-related questions.",
    directLink: "https://chatbot.gistory.me",
    techStack: ["React", "TypeScript", "NestJS", "docker"],
    features: [
      "Iframe-based isolated structure for easy integration",
      "Fast response speed and accurate answers",
      "File upload and document chunking system",
      "Per-service dashboard functionality",
    ],
    role: [
      "Answer generation system development",
      "Full-stack development",
      "UI design",
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/gsainfoteam/chatbot-be",
        description: "Backend (MCP Client) GitHub repository",
      },
      {
        type: "github",
        url: "https://github.com/gsainfoteam/chatbot-fe",
        description: "Frontend GitHub repository",
      },
      {
        type: "github",
        url: "https://github.com/gsainfoteam/chatbot-mcp",
        description: "MCP Server GitHub repository",
      },
    ],
  },
  {
    title: "Ziggle",
    period: "2023.06 - 2024.03",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGS9Rtr8I_jmELL0ypuXR6Ykdji8VWsQhKJQ&s",
    summary: "Integrated notice management platform for GIST students.",
    description:
      "Ziggle is an integrated notice management platform developed by Infoteam for GIST students. It helps students easily check and manage notices.",
    directLink: "https://ziggle.gistory.me",
    techStack: ["React", "flutter", "NestJS", "PostgreSQL"],
    features: [
      "Notice creation and management",
      "Category-based notice browsing and search",
      "New notice notifications",
    ],
    role: ["Initial planning", "Backend development", "UI design"],
    links: [
      {
        type: "github",
        url: "https://github.com/gsainfoteam/ziggle-flutter",
        description: "App GitHub repository",
      },
      {
        type: "github",
        url: "https://github.com/gsainfoteam/ziggle-be",
        description: "Backend GitHub repository",
      },
      {
        type: "github",
        url: "https://github.com/gsainfoteam/ziggle-fe",
        description: "Frontend GitHub repository",
      },
    ],
  },
];

const teamProjectsKo: Project[] = [
  {
    title: "GIST 챗봇",
    period: "2026.01 - 진행 중",
    image: "https://chatbot.gistory.me/logo.svg",
    summary: "GIST 학생들을 위한 정보 제공 챗봇 서비스",
    description:
      "GIST 챗봇은 GIST의 공식 정보를 기반으로 한 지능형 챗봇입니다. 학사 공지, 신입생 소개 자료, 학사 편람 등 공식 자료를 검색하여 학교 관련 질문에 정확하고 빠른 답변을 제공합니다.",
    directLink: "https://chatbot.gistory.me",
    techStack: ["React", "TypeScript", "NestJS", "docker"],
    features: [
      "iframe 기반 분리 구조로 간편한 연동 지원",
      "빠른 응답 속도와 정확한 답변 제공",
      "파일 업로드 및 문서 chunking 시스템",
      "서비스별 대시보드 기능 제공",
    ],
    role: ["답변 생성 시스템 개발", "풀스택 개발", "UI 디자인"],
    links: [
      {
        type: "github",
        url: "https://github.com/gsainfoteam/chatbot-be",
        description: "Backend(MCP Client) GitHub 저장소",
      },
      {
        type: "github",
        url: "https://github.com/gsainfoteam/chatbot-fe",
        description: "Frontend GitHub 저장소",
      },
      {
        type: "github",
        url: "https://github.com/gsainfoteam/chatbot-mcp",
        description: "MCP Server GitHub 저장소",
      },
    ],
  },
  {
    title: "지글 (Ziggle) ",
    period: "2023.06 - 2024.03",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGS9Rtr8I_jmELL0ypuXR6Ykdji8VWsQhKJQ&s",
    summary: "GIST 학생들을 위한 통합 공지 관리 플랫폼",
    description:
      "지글은 Infoteam에서 개발한 GIST 학생들을 위한 통합 공지 관리 플랫폼입니다. 학생들이 공지를 쉽게 확인하고 관리할 수 있도록 돕습니다.",
    directLink: "https://ziggle.gistory.me",
    techStack: ["React", "flutter", "NestJS", "PostgreSQL"],
    features: [
      "공지 작성 및 관리 기능",
      "유형별 공지 확인 및 검색 기능",
      "신규 공지 알림",
    ],
    role: ["초기 기획", "백엔드 개발", "UI 디자인"],
    links: [
      {
        type: "github",
        url: "https://github.com/gsainfoteam/ziggle-flutter",
        description: "App GitHub 저장소",
      },
      {
        type: "github",
        url: "https://github.com/gsainfoteam/ziggle-be",
        description: "Backend GitHub 저장소",
      },
      {
        type: "github",
        url: "https://github.com/gsainfoteam/ziggle-fe",
        description: "Frontend GitHub 저장소",
      },
    ],
  },
];

export const projects: Record<Language, ProjectsByType> = {
  en: {
    team: teamProjectsEn,
    individual: [
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
          "Reading time reminder",
          "Share reading status via social posts",
        ],
        role: [
          "Service planning",
          "App development",
          "Backend development",
          "UI design",
        ],
        links: [
          {
            type: "github",
            url: "https://github.com/no-ikjun/sprit",
            description: "App GitHub repository",
          },
          {
            type: "github",
            url: "https://github.com/no-ikjun/sprit-be",
            description: "Backend GitHub repository",
          },
          {
            type: "website",
            url: "https://disquiet.io/product/%EC%8A%A4%ED%94%84%EB%A6%BF",
            description: "Disquiet project page",
          },
        ],
      },
      {
        title: "DeokDam Pocket",
        period: "2023.12 - (ongoing)",
        image:
          "https://media.disquiet.io/images/product/thumbnail/bb7531256d61c4750454e1d77de083920706f4a3b89bf4f16998f02684bcd641",
        summary: "New Year's greeting platform since 2024",
        description:
          "DeokDam Pocket is a platform where users can exchange New Year's greetings (Deokdam) with friends and family. It allows users to look back on the past year and share meaningful messages for the new year.",
        directLink: "https://deokdam.app",
        techStack: ["NextJS", "TypeScript", "PostgreSQL"],
        features: [
          "Deokdam sharing group creation and management",
          "Deokdam sharing and viewing",
          "Year-in-review and New Year's resolutions",
          "Talk to future me (AI)",
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
        summary: "LLM-powered financial analysis assistant based on ChatGPT & HyperCLOVA X",
        description:
          "Wisemind is an LLM-powered financial analysis assistant that leverages ChatGPT and HyperCLOVA X APIs to provide intelligent financial insights and recommendations. It processes financial data and delivers actionable analysis through a conversational interface.",
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
  },
  ko: {
    team: teamProjectsKo,
    individual: [
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
          "독서 시간 알림 기능",
          "소셜 게시물을 통한 독서 상황 공유",
        ],
        role: ["서비스 기획", "앱 개발", "백엔드 개발", "UI 디자인"],
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
        techStack: ["NextJS", "TypeScript", "PostgreSQL"],
        features: [
          "덕담 공유 그룹 생성 및 관리",
          "덕담 공유 및 조회",
          "한 해 회고 및 새해 계획 작성",
          "미래의 나와 대화하기 (AI)",
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
        summary: "ChatGPT·HyperCLOVA X 기반 LLM 금융 분석 어시스턴트",
        description:
          "Wisemind는 ChatGPT와 HyperCLOVA X API를 활용한 LLM 기반 금융 분석 어시스턴트입니다. 금융 데이터를 처리하고 대화형 인터페이스를 통해 실행 가능한 분석 결과를 제공합니다.",
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
  },
};
