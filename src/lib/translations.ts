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
  homeLocation: string;
  homeEducation: string;
  homeLinkEmail: string;
  homeLinkGithub: string;
  homeLinkLinkedIn: string;
  homeAboutTitle: string;
  homeRecentTitle: string;
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
      "I am a developer who builds services by treating problem identification, planning, design, development, deployment, and operation as one continuous flow. Rather than focusing solely on feature implementation, I prioritize understanding the root of a problem and identifying the fastest way to validate a solution through rapid execution and user feedback.\n\nI have built and operated multiple services end to end in individual and small team environments, making high-impact decisions under limited resources. I focus on testability over perfection early on, and continuously improve structure and features after launch based on user behavior, working across frontend, backend, and infrastructure.",
    ctaViewProjects: "View Projects",
    ctaContactMe: "Contact Me",
    homeLocation: "Gwangju, South Korea",
    homeEducation: "GIST(Gwangju Institute of Science and Technology)",
    homeLinkEmail: "choiikjun1101@gmail.com",
    homeLinkGithub: "no-ikjun",
    homeLinkLinkedIn: "ikjunchoi",
    homeAboutTitle: "About Me",
    homeRecentTitle: "Recent Activity",
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
      "문제 인식부터 기획, 설계, 개발, 배포, 운영까지를 하나의 연속된 흐름으로 바라보며 서비스를 만드는 개발자입니다. 기능 구현 자체에 집중하기보다 문제의 본질을 이해하고, 빠른 실행과 사용자 피드백을 통해 해결책을 가장 빠르게 검증하는 방식을 우선합니다.\n\nimage.png개인 및 소규모 팀 환경에서 여러 서비스를 엔드 투 엔드로 구축·운영하며, 제한된 자원 속에서 높은 임팩트를 내는 선택을 해왔습니다. 초기에는 완성도보다 검증 가능성을 중시하고, 출시 이후에는 사용자 행동을 바탕으로 구조와 기능을 지속적으로 개선하며 프론트엔드·백엔드·인프라 전반을 다룹니다.",
    ctaViewProjects: "프로젝트 보기",
    ctaContactMe: "이메일 보내기",
    homeLocation: "광주, 대한민국",
    homeEducation: "GIST(광주과학기술원)",
    homeLinkEmail: "choiikjun1101@gmail.com",
    homeLinkGithub: "no-ikjun",
    homeLinkLinkedIn: "ikjunchoi",
    homeAboutTitle: "About Me",
    homeRecentTitle: "최근 활동",
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
