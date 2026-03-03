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
  homeResearchInterest: string;
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
  projectDetailIntro: string;
  projectDetailRole: string;
  projectDetailLinks: string;
  projectViewDetails: string;
};

export const translations: Record<Language, Translations> = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navCareers: "Careers",
    navExperiences: "Experiences",
    navProjects: "Projects",
    navWritings: "Blog",
    navContact: "Contact",
    homeRole: "Product Engineer",
    homeResearchInterest: "Interested in AI Research",
    homeDescription:
      "I am a developer who builds services by viewing problem identification, planning, design, development, deployment, and operation as a continuous process. Recently, I have been actively planning and implementing projects that leverage large language models (LLMs), with a strong interest in how AI technologies can be applied to solve real user problems. Rather than simply utilizing models, I focus on understanding how AI can translate into meaningful value in real-world environments and on bridging the gap between advanced AI capabilities and practical applications.\n\nIn individual and small team environments, I have built and operated multiple services end to end, validating ideas through rapid experimentation and user feedback even under limited resources. Through implementing systems for information analysis, content generation, and recommendation, I prioritize real-world usefulness and continuous improvement over model performance alone. I work across frontend, backend, and infrastructure, gaining experience in translating technology into practical, user-facing services.",
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
    copyright: "© 2026 Ikjun Choi. All Rights Reserved.",
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
    projectDetailIntro: "Service Introduction",
    projectDetailRole: "My Role",
    projectDetailLinks: "Links",
    projectViewDetails: "View Details",
  },
  ko: {
    navHome: "홈",
    navAbout: "소개",
    navCareers: "실무경력",
    navExperiences: "활동경험",
    navProjects: "프로젝트",
    navWritings: "블로그",
    navContact: "연락처",
    homeRole: "Product Engineer",
    homeResearchInterest: "AI 연구에 관심",
    homeDescription:
      "문제 인식부터 기획, 설계, 개발, 배포, 운영까지를 하나의 연속된 흐름으로 바라보며 서비스를 만드는 개발자입니다. 최근에는 LLM을 활용한 다양한 프로젝트를 직접 기획하고 구현하며, 인공지능 기술이 실제 사용자 문제 해결 과정에 어떻게 적용될 수 있는지에 큰 관심을 가지고 있습니다. 단순히 모델을 활용하는 데 그치지 않고, AI 기술이 현실 환경에서 의미 있는 가치로 이어지기까지의 과정과 그 사이의 간극을 줄이는 방법을 고민합니다.\n\n개인 및 소규모 팀 환경에서 여러 서비스를 엔드 투 엔드로 구축·운영하며, 제한된 자원 속에서도 빠른 실험과 사용자 피드백을 통해 아이디어를 검증해왔습니다. 특히 정보 분석, 콘텐츠 생성, 추천 시스템 등을 구현하며 모델 성능 자체보다 실제 사용 맥락에서의 유용성과 지속적인 개선 가능성을 중요하게 생각합니다. 프론트엔드·백엔드·인프라 전반을 아우르며 기술을 실제 서비스로 연결하는 경험을 쌓아가고 있습니다.",
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
    copyright: "© 2026 Ikjun Choi. All Rights Reserved.",
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
    projectDetailIntro: "서비스 소개",
    projectDetailRole: "맡은 역할",
    projectDetailLinks: "링크",
    projectViewDetails: "자세히 보기",
  },
};
