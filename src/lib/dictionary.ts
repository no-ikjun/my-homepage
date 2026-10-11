import { type Locale } from "@/lib/locale";

/** UI copy for the rebuilt shell and views. Content lives in src/data and content/. */
const en = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    writings: "Writing",
    contact: "Contact",
  },
  a11y: {
    primaryNav: "Primary",
    themeToggle: "Toggle dark mode",
    localeSwitch: "한국어로 보기",
    goHome: "Go to home",
  },
  home: {
    recent: "Recent",
    newsKinds: {
      award: "Award",
      education: "Education",
      career: "Career",
      project: "Project",
      activity: "Activity",
      writing: "Writing",
    },
    selectedWork: "Selected work",
    allProjects: "All projects",
    writing: "Writing",
    allWriting: "All writing",
    moreAbout: "More about me",
  },
  project: {
    kind: { research: "Research", product: "Product" },
    status: { active: "Active", completed: "Completed", archived: "Archived" },
    present: "Present",
  },
  footer: {
    rights: "All rights reserved.",
    email: "Email",
  },
  meta: {
    siteDescription:
      "Ikjun Choi — GIST undergraduate researching generative AI and diffusion language models, and a full-stack engineer.",
  },
  pages: {
    about: {
      title: "About",
      description: "What I work on, what I've learned, and what I'm curious about.",
      lead: "My interests span software engineering, AI research, and the intersection of technology and business.",
      timeline: "Timeline",
      career: "Experience",
      education: "Education",
      awards: "Awards",
      activities: "Activities",
    },
    projects: {
      title: "Projects",
      description: "Research and products, each with a short case study.",
      research: "Research",
      product: "Products",
      empty: "Nothing here yet.",
    },
    projectDetail: {
      back: "All projects",
      role: "Role",
      stack: "Stack",
      links: "Links",
      affiliation: "With",
      period: "Period",
    },
    writings: {
      title: "Writing",
      description: "Notes on research, engineering and building products.",
      emptyTitle: "Nothing published yet",
      emptyDescription: "Short technical notes and essays are on the way.",
      back: "All writing",
      onThisPage: "On this page",
      onlyIn: { en: "This post is only available in English.", ko: "This post is only available in Korean." },
      all: "All",
      categories: { research: "Research", engineering: "Engineering", notes: "Notes" },
    },
    contact: {
      title: "Contact",
      description: "Email is the fastest way to reach me.",
      lead: "Happy to talk about research collaboration, engineering roles, or anything you're building.",
      channels: {
        email: "For anything — I reply within a couple of days.",
        linkedin: "Professional profile and messages.",
        github: "Code, repositories and activity.",
        instagram: "The occasional personal update.",
      },
    },
  },
};

const ko: typeof en = {
  nav: {
    home: "홈",
    about: "소개",
    projects: "프로젝트",
    writings: "글",
    contact: "연락처",
  },
  a11y: {
    primaryNav: "주 메뉴",
    themeToggle: "다크모드 전환",
    localeSwitch: "View in English",
    goHome: "홈으로",
  },
  home: {
    recent: "최근 소식",
    newsKinds: {
      award: "수상",
      education: "학업",
      career: "경력",
      project: "프로젝트",
      activity: "활동",
      writing: "글",
    },
    selectedWork: "대표 작업",
    allProjects: "모든 프로젝트",
    writing: "글",
    allWriting: "모든 글",
    moreAbout: "더 알아보기",
  },
  project: {
    kind: { research: "연구", product: "제품" },
    status: { active: "진행 중", completed: "완료", archived: "보관" },
    present: "현재",
  },
  footer: {
    rights: "All rights reserved.",
    email: "이메일",
  },
  meta: {
    siteDescription:
      "최익준 — 생성형 AI와 Diffusion Language Model을 연구하는 GIST 학부생이자 풀스택 엔지니어.",
  },
  pages: {
    about: {
      title: "소개",
      description: "경력, 학력, 수상과 활동을 정리했습니다.",
      lead: "소프트웨어 개발과 AI 연구를 경험하며, 기술과 비즈니스가 만나는 지점에도 관심을 넓혀가고 있습니다.",
      timeline: "타임라인",
      career: "경력",
      education: "학력",
      awards: "수상",
      activities: "활동",
    },
    projects: {
      title: "프로젝트",
      description: "연구와 제품 개발 프로젝트를 소개합니다.",
      research: "연구",
      product: "제품",
      empty: "아직 항목이 없습니다.",
    },
    projectDetail: {
      back: "모든 프로젝트",
      role: "역할",
      stack: "기술",
      links: "링크",
      affiliation: "소속",
      period: "기간",
    },
    writings: {
      title: "글",
      description: "연구와 개발 과정에서 배운 것을 기록합니다.",
      emptyTitle: "아직 발행한 글이 없습니다",
      emptyDescription: "짧은 기술 노트와 에세이를 준비하고 있습니다.",
      back: "모든 글",
      onThisPage: "목차",
      onlyIn: { en: "이 글은 영어로만 작성되었습니다.", ko: "이 글은 한국어로만 작성되었습니다." },
      all: "전체",
      categories: { research: "연구", engineering: "엔지니어링", notes: "노트" },
    },
    contact: {
      title: "연락처",
      description: "이메일로 연락 주시면 가장 빠르게 답할 수 있습니다.",
      lead: "연구 협업, 개발 관련 제안, 기타 문의 모두 환영합니다.",
      channels: {
        email: "무엇이든. 며칠 안에 답장합니다.",
        linkedin: "경력 프로필과 메시지.",
        github: "코드, 저장소, 활동.",
        instagram: "가끔 올리는 개인적인 소식.",
      },
    },
  },
};

export const dictionary: Record<Locale, typeof en> = { en, ko };
export type Dictionary = typeof en;
