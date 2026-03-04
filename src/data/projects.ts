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
    period: "2024 - (ongoing)",
    image: "https://chatbot.gistory.me/logo.svg",
    summary: "Intelligent chatbot service for GIST students.",
    description:
      "GIST Chatbot is an intelligent chatbot based on GIST's official information. It learns from academic notices, freshman introduction materials, academic handbooks, and other official school data to provide the most accurate and fast answers to school-related questions. The iframe-based widget ensures stable service without CSS/JS conflicts with the host page.",
    directLink: "https://chatbot.gistory.me",
    techStack: ["NextJS", "React", "TypeScript"],
    features: [
      "Simple installation with a single script tag",
      "Fully isolated iframe structure for zero CSS/JS conflicts",
      "Flexible customization via data attributes",
      "Powerful JavaScript API for real-time widget control",
      "Secure communication with postMessage and origin verification",
    ],
    role: ["Frontend development", "Widget development"],
    links: [
      {
        type: "website",
        url: "https://chatbot.gistory.me",
        description: "Service website",
      },
    ],
  },
  {
    title: "Project Beta",
    period: "2023.9 - 2024.6",
    image: "https://placehold.co/120x120/6366f1/ffffff?text=Beta",
    summary: "AI-powered analytics dashboard for business insights.",
    description:
      "Project Beta provides an AI-powered analytics dashboard that helps businesses visualize and interpret their data. It features predictive analytics and customizable report generation.",
    directLink: "#",
    techStack: ["React", "Python", "FastAPI", "PostgreSQL"],
    features: [
      "Real-time data visualization",
      "Predictive analytics with ML models",
      "Custom report builder",
      "Team sharing and permissions",
    ],
    role: ["Backend development", "Data pipeline"],
    links: [{ type: "github", url: "#", description: "GitHub repository" }],
  },
  {
    title: "Project Gamma",
    period: "2024.3 - (ongoing)",
    image: "https://placehold.co/120x120/4f46e5/ffffff?text=Gamma",
    summary: "Mobile-first health tracking application.",
    description:
      "Project Gamma is a mobile-first application that helps users track their health metrics, set fitness goals, and connect with wellness communities.",
    directLink: "#",
    techStack: ["React", "Flutter", "Node.js", "MongoDB"],
    features: [
      "Health metrics tracking",
      "Goal setting and reminders",
      "Community challenges",
      "Wearable device integration",
    ],
    role: ["Full-stack development", "Mobile app"],
    links: [{ type: "github", url: "#", description: "GitHub repository" }],
  },
];

const teamProjectsKo: Project[] = [
  {
    title: "GIST 챗봇",
    period: "2024 - (진행 중)",
    image: "https://chatbot.gistory.me/logo.svg",
    summary: "GIST 학생들을 위한 정보 제공 챗봇 서비스",
    description:
      "GIST 챗봇은 GIST의 공식 정보를 기반으로 한 지능형 챗봇입니다. 학사 공지, 신입생 소개 자료, 학사 편람 등 공식 자료를 직접 학습하여 학교 관련 질문에 가장 정확하고 빠른 답변을 제공합니다. iframe 기반 위젯으로 호스트 페이지와 CSS/JS 충돌 없이 안정적인 서비스를 제공합니다.",
    directLink: "https://chatbot.gistory.me",
    techStack: ["NextJS", "React", "TypeScript"],
    features: [
      "스크립트 한 줄로 간편 설치",
      "iframe 기반 완전 분리 구조로 CSS/JS 충돌 없음",
      "data 속성으로 유연한 커스터마이징",
      "위젯 상태·메시지 실시간 제어를 위한 JavaScript API",
      "postMessage와 origin 검증으로 안전한 통신",
    ],
    role: ["프론트엔드 개발", "위젯 개발"],
    links: [
      {
        type: "website",
        url: "https://chatbot.gistory.me",
        description: "서비스 웹사이트",
      },
    ],
  },
  {
    title: "프로젝트 베타",
    period: "2023.9 - 2024.6",
    image: "https://placehold.co/120x120/6366f1/ffffff?text=Beta",
    summary: "비즈니스 인사이트를 위한 AI 기반 분석 대시보드",
    description:
      "프로젝트 베타는 기업이 데이터를 시각화하고 해석할 수 있도록 돕는 AI 기반 분석 대시보드를 제공합니다. 예측 분석과 맞춤형 리포트 생성 기능을 포함합니다.",
    directLink: "#",
    techStack: ["React", "Python", "FastAPI", "PostgreSQL"],
    features: [
      "실시간 데이터 시각화",
      "ML 모델 기반 예측 분석",
      "맞춤형 리포트 빌더",
      "팀 공유 및 권한 관리",
    ],
    role: ["백엔드 개발", "데이터 파이프라인"],
    links: [{ type: "github", url: "#", description: "GitHub 저장소" }],
  },
  {
    title: "프로젝트 감마",
    period: "2024.3 - 진행 중",
    image: "https://placehold.co/120x120/4f46e5/ffffff?text=Gamma",
    summary: "모바일 기반 건강 추적 애플리케이션",
    description:
      "프로젝트 감마는 사용자가 건강 지표를 추적하고, 운동 목표를 설정하며, 웰니스 커뮤니티와 연결할 수 있는 모바일 우선 애플리케이션입니다.",
    directLink: "#",
    techStack: ["React", "Flutter", "Node.js", "MongoDB"],
    features: [
      "건강 지표 추적",
      "목표 설정 및 알림",
      "커뮤니티 챌린지",
      "웨어러블 기기 연동",
    ],
    role: ["풀스택 개발", "모바일 앱"],
    links: [{ type: "github", url: "#", description: "GitHub 저장소" }],
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
  },
};
