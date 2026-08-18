import { type Language } from "@/types/language";

type Translations = {
  navHome: string;
  navAbout: string;
  navProjects: string;
  navWritings: string;
  navContact: string;
  homeRole: string;
  homeResearchInterest: string;
  homeDescription: string;
  homeLocation: string;
  homeEducation: string;
  homeLinkEmail: string;
  homeLinkGithub: string;
  homeLinkLinkedIn: string;
  homeAboutTitle: string;
  homeRecentTitle: string;
  homeQuickLinksTitle: string;
  sectionCareersTitle: string;
  copyright: string;
  educationsTitle: string;
  awardsTitle: string;
  activitiesTitle: string;
  projectsPageTitle: string;
  projectsPageDescription: string;
  aboutPageTitle: string;
  aboutPageDescription: string;
  writingsPageDescription: string;
  aboutInterestsTitle: string;
  aboutInterestsDescription: string;
  aboutInterestsContent: string;
  aboutWorkingStyleTitle: string;
  contactPageTitle: string;
  contactPageDescription: string;
  contactLinksTitle: string;
  contactLinksDescription: string;
  activityMoreInfo: string;
  languageToggleLabel: string;
  themeToggleLabel: string;
  projectDetailFeatures: string;
  projectDetailVisitSite: string;
  projectDetailRole: string;
  projectDetailLinks: string;
  projectsTeamTitle: string;
  projectsIndividualTitle: string;
};

export const translations: Record<Language, Translations> = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navProjects: "Projects",
    navWritings: "Blog",
    navContact: "Contact",
    homeRole: "Product Engineer",
    homeResearchInterest: "Interested in AI Research",
    homeDescription:
      "I research generative AI and diffusion language models, exploring more effective and practical approaches to language model training and generation.\n\nBeyond understanding how models work, I am interested in validating research ideas through experiments and translating them into real systems. My experience across frontend, backend, and infrastructure enables me to connect AI research with real-world problems.",
    homeLocation: "Gwangju, South Korea",
    homeEducation: "GIST(Gwangju Institute of Science and Technology)",
    homeLinkEmail: "choiikjun1101@gmail.com",
    homeLinkGithub: "no-ikjun",
    homeLinkLinkedIn: "ikjunchoi",
    homeAboutTitle: "About Me",
    homeRecentTitle: "Recent Activity",
    homeQuickLinksTitle: "Quick Links",
    sectionCareersTitle: "Careers",
    copyright: "© 2026 Ikjun Choi. All Rights Reserved.",
    educationsTitle: "Educations",
    awardsTitle: "Awards",
    activitiesTitle: "Activities",
    projectsPageTitle: "Projects",
    projectsPageDescription: "My Own Projects Since 2023",
    aboutPageTitle: "About",
    aboutPageDescription:
      "A consolidated view of my career path, education, awards, and activities.",
    writingsPageDescription:
      "A writing archive for technical notes and product-building lessons.",
    aboutInterestsTitle: "Interests",
    aboutInterestsDescription:
      "I am interested in translating AI technologies into real-world services through rapid execution and product development.",
    aboutInterestsContent:
      "I am interested in building services that solve real user problems, leveraging AI technologies to enhance the usefulness and scalability of products.\n\nI work across the full lifecycle from product planning to development, launch, and iteration, primarily focusing on web and mobile while expanding into backend, data, and AI domains as needed to translate technology into real-world services.",
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
    projectDetailFeatures: "Key Features",
    projectDetailVisitSite: "Visit Site",
    projectDetailRole: "My Role",
    projectDetailLinks: "Links",
    projectsTeamTitle: "Team Projects",
    projectsIndividualTitle: "Individual Projects",
  },
  ko: {
    navHome: "홈",
    navAbout: "소개",
    navProjects: "프로젝트",
    navWritings: "블로그",
    navContact: "연락처",
    homeRole: "Product Engineer",
    homeResearchInterest: "AI 연구에 관심",
    homeDescription:
      "생성형 AI와 Diffusion Language Model을 연구하며, 더 효과적이고 실용적인 언어 모델의 학습과 생성 방법을 탐구하고 있습니다.\n\n모델의 동작 원리를 이해하는 데서 그치지 않고, 연구 아이디어를 실험으로 검증하고 실제 시스템으로 구현하는 과정에도 관심이 있습니다. 프론트엔드, 백엔드, 인프라를 아우르는 개발 경험을 바탕으로 AI 연구와 현실의 문제 사이를 연결하고자 합니다.",
    homeLocation: "광주, 대한민국",
    homeEducation: "GIST(광주과학기술원)",
    homeLinkEmail: "choiikjun1101@gmail.com",
    homeLinkGithub: "no-ikjun",
    homeLinkLinkedIn: "ikjunchoi",
    homeAboutTitle: "About Me",
    homeRecentTitle: "최근 활동",
    homeQuickLinksTitle: "바로가기",
    sectionCareersTitle: "실무경력",
    copyright: "© 2026 Ikjun Choi. All Rights Reserved.",
    educationsTitle: "학력",
    awardsTitle: "수상",
    activitiesTitle: "대외활동",
    projectsPageTitle: "프로젝트",
    projectsPageDescription: "웹·앱 서비스 등 개인 프로젝트 모음",
    aboutPageTitle: "소개",
    aboutPageDescription:
      "커리어, 학력, 수상, 대외활동을 한 페이지에서 볼 수 있도록 정리했습니다.",
    writingsPageDescription:
      "개발과 제품 개발 과정에서 배운 점을 정리하는 글 아카이브입니다.",
    aboutInterestsTitle: "관심 분야",
    aboutInterestsDescription:
      "빠른 실행과 제품 개발을 통해 AI 기술을 실제 서비스로 연결하는 데 관심이 있습니다.",
    aboutInterestsContent:
      "실제 사용자 문제를 해결하는 서비스를 구현하는 과정에 관심이 있으며, AI 기술을 활용해 서비스의 효용과 확장성을 극대화하는 방향을 탐구하고 있습니다.\n\n제품 기획부터 개발·출시·개선까지의 전 과정을 다루며 웹·모바일을 중심으로 필요에 따라 백엔드·데이터·AI 영역까지 확장해 기술을 실제 서비스로 연결하는 경험을 쌓고 있습니다.",
    aboutWorkingStyleTitle: "일하는 방식",
    contactPageTitle: "연락처",
    contactPageDescription:
      "이메일이 가장 빠르며, 아래 링크를 통해 연락할 수 있습니다.",
    contactLinksTitle: "연락처 및 링크",
    contactLinksDescription:
      "제품 개발, 스타트업 협업, 기술 관련 이야기 모두 환영합니다.",
    activityMoreInfo: "자세히 보기 →",
    languageToggleLabel: "언어 변경",
    themeToggleLabel: "다크모드 전환",
    projectDetailFeatures: "주요 기능",
    projectDetailVisitSite: "사이트 방문",
    projectDetailRole: "맡은 역할",
    projectDetailLinks: "링크",
    projectsTeamTitle: "팀 프로젝트",
    projectsIndividualTitle: "개인 프로젝트",
  },
};
