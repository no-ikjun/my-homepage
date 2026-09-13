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
    now: "Now",
    nowKinds: {
      research: "Researching",
      building: "Building",
      learning: "Learning",
    },
    selectedWork: "Selected work",
    awards: "Awards",
    allAwards: "All awards",
    allProjects: "All projects",
    writing: "Writing",
    allWriting: "All writing",
    moreAbout: "More about me",
    contactLead: "Open to research collaboration and engineering roles.",
    emailMe: "Email me",
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
      description: "Interests, how I work, and where I've studied and worked.",
      interests: "Interests",
      principles: "How I work",
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
    now: "Now",
    nowKinds: {
      research: "연구",
      building: "개발",
      learning: "학습",
    },
    selectedWork: "대표 작업",
    awards: "수상",
    allAwards: "모든 수상",
    allProjects: "모든 프로젝트",
    writing: "글",
    allWriting: "모든 글",
    moreAbout: "더 알아보기",
    contactLead: "연구 협업과 엔지니어링 기회 모두 환영합니다.",
    emailMe: "이메일 보내기",
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
      description: "관심사, 일하는 방식, 그리고 배우고 일해 온 곳들.",
      interests: "관심 분야",
      principles: "일하는 방식",
      career: "경력",
      education: "학력",
      awards: "수상",
      activities: "활동",
    },
    projects: {
      title: "프로젝트",
      description: "연구와 제품. 각각 짧은 케이스 스터디를 담았습니다.",
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
      description: "연구, 엔지니어링, 제품 만들기에 대한 기록.",
      emptyTitle: "아직 발행한 글이 없습니다",
      emptyDescription: "짧은 기술 노트와 에세이를 준비하고 있습니다.",
      back: "모든 글",
    },
    contact: {
      title: "연락처",
      description: "이메일이 가장 빠릅니다.",
      lead: "연구 협업, 엔지니어링 기회, 혹은 만들고 있는 무엇이든 편하게 이야기 나눠요.",
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
