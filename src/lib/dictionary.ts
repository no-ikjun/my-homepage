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
    updated: "Updated",
    nowKinds: {
      research: "Researching",
      building: "Building",
      learning: "Learning",
    },
    selectedWork: "Selected work",
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
    updated: "업데이트",
    nowKinds: {
      research: "연구",
      building: "개발",
      learning: "학습",
    },
    selectedWork: "대표 작업",
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
};

export const dictionary: Record<Locale, typeof en> = { en, ko };
export type Dictionary = typeof en;
