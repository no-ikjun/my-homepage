import { type Language } from "@/types/language";

type ExperienceItem = {
  title: string;
  link: string;
  image: string;
  description: string;
  subDescription: string;
  content: string[];
};

export const educations: Record<Language, ExperienceItem[]> = {
  en: [
    {
      title: "Gwangju Institute of Science and Technology",
      link: "https://www.gist.ac.kr/kr/main.html",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmHbkACkvDSPbiL-OLgmDS0X1hZzksvtBl5g&s",
      description: "2023.03 ~ Present",
      subDescription: "Undergraduate Student",
      content: [
        "School of Electrical Engineering and Computer Science",
        "Minor in Business Administration and Economics",
      ],
    },
    {
      title: "Jeonnam Science High School",
      link: "https://jeonnam-sh.hs.jne.kr/user/indexMain.action?siteId=chonnam-sh_hs",
      image: "https://d3ob3cint7tr3s.cloudfront.net/jshs.png",
      description: "2020.03 ~ 2023.01",
      subDescription: "👨‍🎓 Graduated at 2023.01",
      content: [
        "The head of the student council's IT department",
        "Developed a school management system JshsUs(과구리)",
      ],
    },
  ],
  ko: [
    {
      title: "광주과학기술원(GIST)",
      link: "https://www.gist.ac.kr/kr/main.html",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmHbkACkvDSPbiL-OLgmDS0X1hZzksvtBl5g&s",
      description: "2023.03 ~ 현재",
      subDescription: "학부 재학 중",
      content: ["전기전자컴퓨터공학부", "경영·경제 부전공"],
    },
    {
      title: "전남과학고등학교",
      link: "https://jeonnam-sh.hs.jne.kr/user/indexMain.action?siteId=chonnam-sh_hs",
      image: "https://d3ob3cint7tr3s.cloudfront.net/jshs.png",
      description: "2020.03 ~ 2023.01",
      subDescription: "👨‍🎓 2023.01 졸업",
      content: ["학생회 IT부 부장", "학교 운영 시스템 JshsUs(과구리) 개발"],
    },
  ],
};

export const awards: Record<Language, ExperienceItem[]> = {
  en: [
    {
      title: "2024 KPMG Ideathon@삼정 KPMG",
      link: "http://www.dhnews.co.kr/news/view/1065585962399224",
      image:
        "https://d3ob3cint7tr3s.cloudfront.net/portfolio/2024_kpmg_ideathon.jpg",
      description: "2024.02",
      subDescription: "🥉 3rd prize",
      content: [
        "Tools to improve work productivity with Generative AI - Docuflow",
      ],
    },
    {
      title: "Gwangju Public Data Utilization Contest",
      link: "https://ccei.creativekorea.or.kr/gwangju/custom/notice_view.do?no=28519&rnum=1361&kind=undefined&sPtime=undefinedb",
      image: "https://d3ob3cint7tr3s.cloudfront.net/portfolio/gwangju_data.png",
      description: "2023.07",
      subDescription: "🥈 2nd prize (서비스 개발 부문 우수상)",
      content: [
        "Platform for participation in the politics of the common people - Mefeto",
      ],
    },
    {
      title: "Side With Startups@KAIST",
      link: "https://docs.google.com/presentation/d/1cXm37OX8B42wRRq6S16i2StgV6BaVh9VDfI3NG8HTPo/edit?usp=sharing",
      image: "https://d3ob3cint7tr3s.cloudfront.net/portfolio/profile_1.webp",
      description: "2023.05",
      subDescription: "🥇 1st prize",
      content: ["UI/UX Improvement Solution Platform by Generative AI - U-in"],
    },
    {
      title: "2025 Impact AI Hackathon@GDG GIST",
      link: "https://gdg.community.dev/events/details/google-gdg-on-campus-gwangju-institute-of-science-and-technology-gwangju-south-korea-presents-build-with-ai-impact-ai-hackathon-1/",
      image:
        "https://d3ob3cint7tr3s.cloudfront.net/portfolio/impact_hackathon.png",
      description: "2025.05",
      subDescription: "🥈 2nd prize (GIST 인공지능연구소장상)",
      content: [
        "AI-based news article platform to solve eco chamber phenomenon - Agora",
      ],
    },
  ],
  ko: [
    {
      title: "2024 KPMG 아이디어톤@삼정 KPMG",
      link: "http://www.dhnews.co.kr/news/view/1065585962399224",
      image:
        "https://d3ob3cint7tr3s.cloudfront.net/portfolio/2024_kpmg_ideathon.jpg",
      description: "2024.02",
      subDescription: "🥉 3등",
      content: ["AI로 업무 생산성을 높이는 도구 - Docuflow"],
    },
    {
      title: "광주광역시 공공데이터 활용 창업경진대회",
      link: "https://ccei.creativekorea.or.kr/gwangju/custom/notice_view.do?no=28519&rnum=1361&kind=undefined&sPtime=undefinedb",
      image: "https://d3ob3cint7tr3s.cloudfront.net/portfolio/gwangju_data.png",
      description: "2023.07",
      subDescription: "🥈 2위 (서비스 개발 부문 우수상)",
      content: ["시민의 정치 참여를 돕는 AI 플랫폼 - Mefeto"],
    },
    {
      title: "Side With Startups@KAIST",
      link: "https://docs.google.com/presentation/d/1cXm37OX8B42wRRq6S16i2StgV6BaVh9VDfI3NG8HTPo/edit?usp=sharing",
      image: "https://d3ob3cint7tr3s.cloudfront.net/portfolio/profile_1.webp",
      description: "2023.05",
      subDescription: "🥇 1위",
      content: ["생성형 AI 기반 UI/UX 개선 솔루션 플랫폼 - U-in"],
    },
    {
      title: "2025 Impact AI Hackathon@GDG GIST",
      link: "https://gdg.community.dev/events/details/google-gdg-on-campus-gwangju-institute-of-science-and-technology-gwangju-south-korea-presents-build-with-ai-impact-ai-hackathon-1/",
      image:
        "https://d3ob3cint7tr3s.cloudfront.net/portfolio/impact_hackathon.png",
      description: "2025.05",
      subDescription: "🥈 2위 (GIST 인공지능연구소장상)",
      content: ["AI 기반 뉴스 기사 플랫폼으로 에코챔버 현상 해결 - Agora"],
    },
  ],
};

export type ActivityEntry = {
  title: string;
  description?: string;
  period?: string;
  content: string[];
};

export type ActivityItem = {
  title: string;
  link: string;
  image: string;
  description: string;
  content: ActivityEntry[];
};

export const activities: Record<Language, ActivityItem[]> = {
  en: [
    {
      title: "GSA InfoTeam",
      link: "https://introduce.gistory.me",
      image: "https://avatars.githubusercontent.com/u/54899579?s=280&v=4",
      description: "2023.03 ~ 2024.06",
      content: [
        {
          title: "Team Leader",
          period: "2026",
          content: [
            "Contributed to the establishment and operation of a corporation",
            "Conducted internal seminars to foster organizational culture",
            "Planned the Devs' Night event for GIST developers",
          ],
        },
        {
          title: "Deputy Leader",
          period: "2026",
          content: ["Managed development activities and organized them"],
        },
        {
          title: "Full Stack Developer",
          period: "2023 - 2026",
          content: [
            "Developed the Integrated Announcement Management Platform, Ziggle",
            "Developed the GIST Chatbot service for improved information accessibility",
          ],
        },
      ],
    },
    {
      title: "WING - GIST Developer Group",
      link: "",
      image: "https://avatars.githubusercontent.com/u/129100127?s=200&v=4",
      description: "2023.03 ~ 2024.06",
      content: [
        {
          title: "Club Leader",
          period: "2026",
          content: ["Organized and managed club activities"],
        },
        {
          title: "Junior Developer",
          period: "2023",
          content: [
            "Conducted sessions about React, Next.js, Flutter, etc.",
            "Conducted a mentoring program for training junior developers",
          ],
        },
      ],
    },
    {
      title: "MOP",
      link: "",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhKrzYFHe_ov2T_37GIfbofpwVUcZi7okhA&s",
      description: "2023.03 ~ 2023.12",
      content: [
        {
          title: "Club Member",
          period: "2023",
          content: [
            "Study on the Start-up ecosystem",
            "Participated in mock start-up program",
          ],
        },
      ],
    },
  ],
  ko: [
    {
      title: "GSA InfoTeam",
      link: "https://introduce.gistory.me",
      image: "https://avatars.githubusercontent.com/u/54899579?s=280&v=4",
      description: "2023.03 ~ 2024.06",
      content: [
        {
          title: "팀 리더",
          period: "2024",
          content: [
            "법인 설립 기여 및 운영",
            "조직 문화 정착을 위한 내부 세미나 진행",
            "GIST 개발자 이벤트 Devs' Night 기획",
          ],
        },
        {
          title: "부팀장",
          period: "2026",
          content: ["개발 활동 조직 및 관리"],
        },
        {
          title: "풀스택 개발자",
          period: "2023 - 2024",
          content: [
            "통합 공지 관리 플랫폼 Ziggle 개발",
            "교내 정보 접근성 향상을 위한 GIST 챗봇 서비스 개발",
          ],
        },
      ],
    },
    {
      title: "WING - GIST 전산 동아리",
      link: "",
      image: "https://avatars.githubusercontent.com/u/129100127?s=200&v=4",
      description: "2023.03 ~ 2024.06",
      content: [
        {
          title: "동아리장",
          period: "2024",
          content: ["동아리 운영 및 관리"],
        },
        {
          title: "주니어 개발자",
          period: "2023 - 2024",
          content: [
            "React, Next.js, Flutter 등 기술 관련 오픈 세션 진행",
            "주니어 개발자 양성 멘토링 프로그램 운영",
          ],
        },
      ],
    },
    {
      title: "MOP",
      link: "",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhKrzYFHe_ov2T_37GIfbofpwVUcZi7okhA&s",
      description: "2023.03 ~ 2023.12",
      content: [
        {
          title: "동아리 부원",
          period: "2023",
          content: ["스타트업 관련 스터디", "모의 창업 프로그램 참여"],
        },
      ],
    },
  ],
};
