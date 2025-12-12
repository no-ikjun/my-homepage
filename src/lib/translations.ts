import { type Language } from "@/types/language";

type Translations = {
  navCareers: string;
  navExperiences: string;
  navProjects: string;
  homeRole: string;
  homeDescription: string;
  ctaViewProjects: string;
  ctaContactMe: string;
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
  activityMoreInfo: string;
  languageToggleLabel: string;
};

export const translations: Record<Language, Translations> = {
  en: {
    navCareers: "Careers",
    navExperiences: "Experiences",
    navProjects: "Projects",
    homeRole: "Software Developer",
    homeDescription:
      "A founder-minded developer passionate about startups, focused on solving problems and executing fast. I build services end-to-end—from idea and planning to launch and continuous iteration.",
    ctaViewProjects: "View Projects",
    ctaContactMe: "Contact Me",
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
    activityMoreInfo: "More Info →",
    languageToggleLabel: "Switch language",
  },
  ko: {
    navCareers: "실무경력",
    navExperiences: "활동경험",
    navProjects: "프로젝트",
    homeRole: "소프트웨어 개발자",
    homeDescription:
      "창업가 마인드를 가진 개발자로서 문제 해결과 빠른 실행에 집중합니다. 아이템 구상과 기획부터 출시 및 지속적인 개선까지, 엔드 투 엔드로 서비스를 구축합니다.",
    ctaViewProjects: "프로젝트 보기",
    ctaContactMe: "이메일 보내기",
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
    activityMoreInfo: "자세히 보기 →",
    languageToggleLabel: "언어 변경",
  },
};
