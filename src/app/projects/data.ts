import { type Language } from "@/types/language";

type ProjectLink = {
  type: "github" | "website";
  url: string;
  description: string;
};

type Project = {
  title: string;
  period: string;
  iamge: string;
  description: string;
  directLink: string;
  techStack: string[];
  links: ProjectLink[];
};

export const projects: Record<Language, Project[]> = {
  en: [
    {
      title: "SPRIT",
      period: "2024.3 - (ongoing)",
      iamge:
        "https://play-lh.googleusercontent.com/xc7SKBJq60amNLJMphT9QBPkfbaVXtbrhGbTuexJPtxYII_A-QC2hcLHuJ96PvHqHw=w240-h480-rw",
      description: "App service that creates a steady reading habit.",
      directLink: "https://sprit-app.me",
      techStack: ["flutter", "NextJS", "NestJS", "docker", "AWS", "Figma"],
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
      iamge:
        "https://media.disquiet.io/images/product/thumbnail/bb7531256d61c4750454e1d77de083920706f4a3b89bf4f16998f02684bcd641",
      description: "New year's Greeting Platform since 2024",
      directLink: "https://deokdam.app",
      techStack: ["NextJS", "TypeScript"],
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
      iamge: "https://analyst.ikjun.com/logo.png",
      description: "AI Financial Agent based on ChatGPT & HyperCLOVA X",
      directLink: "https://analyst.ikjun.com",
      techStack: ["React", "CloudFlare", "NestJS", "FastAPI", "AWS"],
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
      title: "SPRIT",
      period: "2024.3 - 진행 중",
      iamge:
        "https://play-lh.googleusercontent.com/xc7SKBJq60amNLJMphT9QBPkfbaVXtbrhGbTuexJPtxYII_A-QC2hcLHuJ96PvHqHw=w240-h480-rw",
      description: "꾸준한 독서 습관을 만들어주는 앱 서비스",
      directLink: "https://sprit-app.me",
      techStack: ["flutter", "NextJS", "NestJS", "docker", "AWS", "Figma"],
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
      title: "덕담 포켓",
      period: "2023.12 - 진행 중",
      iamge:
        "https://media.disquiet.io/images/product/thumbnail/bb7531256d61c4750454e1d77de083920706f4a3b89bf4f16998f02684bcd641",
      description: "2024년부터 운영 중인 새해 인사 플랫폼",
      directLink: "https://deokdam.app",
      techStack: ["NextJS", "TypeScript"],
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
      iamge: "https://analyst.ikjun.com/logo.png",
      description: "ChatGPT와 HyperCLOVA X 기반의 AI 금융 에이전트",
      directLink: "https://analyst.ikjun.com",
      techStack: ["React", "CloudFlare", "NestJS", "FastAPI", "AWS"],
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
          description: "프런트엔드 GitHub 저장소",
        },
      ],
    },
  ],
};
