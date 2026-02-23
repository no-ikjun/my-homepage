import { type Language } from "@/types/language";

type Translations = {
  navHome: string;
  navAbout: string;
  navCareers: string;
  navExperiences: string;
  navProjects: string;
  navWritings: string;
  navContact: string;
  homeRole: string;
  homeDescription: string;
  ctaViewProjects: string;
  ctaContactMe: string;
  homeRecentTitle: string;
  homeRecentDescription: string;
  homeQuickLinksTitle: string;
  sectionCareersTitle: string;
  sectionCareersDescription: string;
  sectionExperiencesTitle: string;
  sectionExperiencesDescription: string;
  sectionProjectsTitle: string;
  sectionProjectsDescription: string;
  copyright: string;
  experiencesPageTitle: string;
  experiencesPageDescription: string;
  educationsTitle: string;
  awardsTitle: string;
  activitiesTitle: string;
  projectsPageTitle: string;
  projectsPageDescription: string;
  careersPageTitle: string;
  careersPageDescription: string;
  aboutPageTitle: string;
  aboutPageDescription: string;
  aboutSummaryTitle: string;
  aboutSummaryDescription: string;
  aboutWorkingStyleTitle: string;
  contactPageTitle: string;
  contactPageDescription: string;
  contactLinksTitle: string;
  contactLinksDescription: string;
  activityMoreInfo: string;
  languageToggleLabel: string;
  themeToggleLabel: string;
};

export const translations: Record<Language, Translations> = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navCareers: "Careers",
    navExperiences: "Experiences",
    navProjects: "Projects",
    navWritings: "Writings",
    navContact: "Contact",
    homeRole: "Product Engineer",
    homeDescription:
      "A founder-minded developer passionate about startups, focused on solving problems and executing fast. I build services end-to-end—from idea and planning to launch and continuous iteration.",
    ctaViewProjects: "View Projects",
    ctaContactMe: "Contact Me",
    homeRecentTitle: "Recent Activity",
    homeRecentDescription:
      "A curated log of recent work, awards, and projects I have been focused on.",
    homeQuickLinksTitle: "Quick Links",
    sectionCareersTitle: "Careers",
    sectionCareersDescription:
      "My careers since 2021.\nIncluding internships and full-time jobs",
    sectionExperiencesTitle: "Experiences",
    sectionExperiencesDescription:
      "My experiences including educations, awards, and extra activities",
    sectionProjectsTitle: "Projects",
    sectionProjectsDescription:
      "These are my own projects.\nWeb/App services and ongoing projects",
    copyright: "© 2023 Ikjun Choi. All Rights Reserved.",
    experiencesPageTitle: "Experiences",
    experiencesPageDescription: "Experiences and activities that I have done",
    educationsTitle: "Educations",
    awardsTitle: "Awards",
    activitiesTitle: "Activities",
    projectsPageTitle: "Projects",
    projectsPageDescription: "My Own Projects Since 2023",
    careersPageTitle: "Careers",
    careersPageDescription: "My career path and professional experiences",
    aboutPageTitle: "About",
    aboutPageDescription:
      "A consolidated view of my career path, education, awards, and activities.",
    aboutSummaryTitle: "Summary",
    aboutSummaryDescription:
      "I build products end-to-end with a strong bias toward shipping and iteration, especially in startup-like environments.",
    aboutWorkingStyleTitle: "How I Work",
    contactPageTitle: "Contact",
    contactPageDescription:
      "The fastest way to reach me is email. You can also find me on the platforms below.",
    contactLinksTitle: "Links",
    contactLinksDescription:
      "Open to product engineering, startup collaboration, and technical conversations.",
    activityMoreInfo: "More Info →",
    languageToggleLabel: "Switch language",
    themeToggleLabel: "Toggle dark mode",
  },
  ko: {
    navHome: "홈",
    navAbout: "소개",
    navCareers: "실무경력",
    navExperiences: "활동경험",
    navProjects: "프로젝트",
    navWritings: "글",
    navContact: "연락",
    homeRole: "Product Engineer",
    homeDescription:
      "창업가 마인드를 가진 개발자로서 문제 해결과 빠른 실행에 집중합니다. 아이템 구상과 기획부터 출시 및 지속적인 개선까지, 엔드 투 엔드로 서비스를 구축합니다.",
    ctaViewProjects: "프로젝트 보기",
    ctaContactMe: "이메일 보내기",
    homeRecentTitle: "최근 활동",
    homeRecentDescription:
      "최근에 집중했던 프로젝트, 수상, 실무/대외활동을 간단히 정리했습니다.",
    homeQuickLinksTitle: "바로가기",
    sectionCareersTitle: "실무경력",
    sectionCareersDescription:
      "2021년부터의 실무경력을 정리했습니다.\n인턴십과 계약직, 정규직 경험을 포함합니다.",
    sectionExperiencesTitle: "활동경험",
    sectionExperiencesDescription:
      "학력, 수상, 대외활동 등 다양한 경험을 모았습니다.",
    sectionProjectsTitle: "프로젝트",
    sectionProjectsDescription:
      "직접 진행한 개인 프로젝트입니다.\n웹·앱 서비스 등 진행 중인 프로젝트를 포함합니다.",
    copyright: "© 2023 최익준. All Rights Reserved.",
    experiencesPageTitle: "활동경험",
    experiencesPageDescription: "지금까지의 학력, 수상, 대외활동 등 활동 경험",
    educationsTitle: "학력",
    awardsTitle: "수상",
    activitiesTitle: "대외활동",
    projectsPageTitle: "프로젝트",
    projectsPageDescription: "웹·앱 서비스 등 개인 프로젝트 모음",
    careersPageTitle: "실무경력",
    careersPageDescription: "커리어와 전문적인 실무 경험",
    aboutPageTitle: "소개",
    aboutPageDescription:
      "커리어, 학력, 수상, 대외활동을 한 페이지에서 볼 수 있도록 정리했습니다.",
    aboutSummaryTitle: "요약",
    aboutSummaryDescription:
      "빠른 실행과 반복 개선을 중요하게 생각하며, 아이디어부터 출시까지 엔드 투 엔드로 제품을 만듭니다.",
    aboutWorkingStyleTitle: "일하는 방식",
    contactPageTitle: "연락",
    contactPageDescription:
      "이메일이 가장 빠르며, 아래 링크드인/깃허브/인스타그램으로도 연락할 수 있습니다.",
    contactLinksTitle: "연락처 및 링크",
    contactLinksDescription:
      "제품 개발, 스타트업 협업, 기술 관련 이야기 모두 환영합니다.",
    activityMoreInfo: "자세히 보기 →",
    languageToggleLabel: "언어 변경",
    themeToggleLabel: "다크모드 전환",
  },
};
