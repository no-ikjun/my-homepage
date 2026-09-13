import type { Localized } from "@/lib/i18n";

export type TimelineKind = "education" | "career" | "award" | "activity";

export type TimelineEntry = {
  title: Localized<string>;
  /** "YYYY-MM" */
  start?: string;
  end?: string;
  highlights: Localized<string[]>;
};

export type TimelineItem = {
  id: string;
  kind: TimelineKind;
  /** Organisation, school, or competition */
  org: Localized<string>;
  orgUrl?: string;
  logo?: string;
  /** Schools mostly use circular seals; "round" crops the logo to a circle. */
  logoShape?: "square" | "round";
  /** Role, degree, or placement */
  title: Localized<string>;
  /** "YYYY-MM" */
  start: string;
  /** "YYYY-MM"; omit while ongoing */
  end?: string;
  highlights?: Localized<string[]>;
  /** Sub-roles or projects within the same organisation */
  entries?: TimelineEntry[];
};

export const timeline: TimelineItem[] = [
  // ---------------------------------------------------------------- career
  {
    id: "real-lab",
    kind: "career",
    org: { en: "Real-Lab @ GIST", ko: "Real-Lab @ GIST" },
    orgUrl: "https://real-lab-gist.framer.website",
    logo: "https://d3ob3cint7tr3s.cloudfront.net/portfolio/gist_white.jpg",
    title: { en: "Undergraduate Research Intern", ko: "학부 연구 인턴" },
    start: "2026-03",
    highlights: {
      en: ["Generative AI research on diffusion language models, advised by Prof. Kwanyoung Kim"],
      ko: ["김관영 교수님 지도 아래 Diffusion Language Model 연구"],
    },
  },
  {
    id: "sterri",
    kind: "career",
    org: { en: "Sterri Inc.", ko: "(주)스테리" },
    orgUrl: "https://sterri.io",
    logo: "https://d3ob3cint7tr3s.cloudfront.net/sterri_logo.jpeg",
    title: { en: "Product Developer (Full Stack)", ko: "제품 개발자 (Full Stack)" },
    start: "2026-01",
    end: "2026-03",
    entries: [
      {
        title: { en: "Warru — event platform for streamers", ko: "와르르 — 스트리머 이벤트 플랫폼" },
        highlights: {
          en: [
            "REST API with NestJS and a Next.js frontend",
            "Streamer data collection and processing in Python for analytics and an ML pipeline",
            "Cloud operations on AWS",
          ],
          ko: [
            "NestJS REST API와 Next.js 프론트엔드 개발",
            "분석·ML 파이프라인을 위한 스트리머 데이터 수집·처리 (Python)",
            "AWS 기반 클라우드 운영",
          ],
        },
      },
    ],
  },
  {
    id: "sigor",
    kind: "career",
    org: { en: "Sigor Inc.", ko: "(주)시고르자브종" },
    logo: "https://d3ob3cint7tr3s.cloudfront.net/portfolio/sigor.jpg",
    title: { en: "Software Developer", ko: "소프트웨어 개발자" },
    start: "2023-06",
    end: "2024-02",
    entries: [
      {
        title: { en: "Rushhour — real-time subway congestion app", ko: "러시아워 — 실시간 지하철 혼잡도 앱" },
        start: "2023-06",
        end: "2024-02",
        highlights: {
          en: [
            "Cross-platform app built and shipped with Flutter",
            "Subway usage data analysis in Python",
            "RESTful API with NestJS",
          ],
          ko: [
            "Flutter 크로스플랫폼 앱 개발 및 배포",
            "Python으로 지하철 이용 데이터 분석",
            "NestJS 기반 REST API 개발",
          ],
        },
      },
      {
        title: { en: "AI solution service", ko: "AI 솔루션 서비스" },
        start: "2024-01",
        end: "2024-02",
        highlights: {
          en: ["Receipt OCR built on the company's in-house AI stack"],
          ko: ["자체 AI 기술 기반 영수증 문자 인식 OCR 개발"],
        },
      },
    ],
  },

  // ------------------------------------------------------------- education
  {
    id: "gist",
    kind: "education",
    org: { en: "Gwangju Institute of Science and Technology", ko: "광주과학기술원 (GIST)" },
    orgUrl: "https://www.gist.ac.kr",
    logo: "/img/logo_gist.png",
    logoShape: "round",
    title: { en: "B.S. in Electrical Engineering and Computer Science", ko: "전기전자컴퓨터공학 학사 과정" },
    start: "2023-03",
    highlights: {
      en: ["Minor in Business Administration and Economics"],
      ko: ["경영·경제 부전공"],
    },
  },
  {
    id: "berkeley",
    kind: "education",
    org: { en: "University of California, Berkeley", ko: "UC Berkeley" },
    orgUrl: "https://www.berkeley.edu/",
    logo: "https://d3ob3cint7tr3s.cloudfront.net/portfolio/Seal_of_University_of_California,_Berkeley.svg",
    logoShape: "round",
    title: { en: "Summer Session, EECS", ko: "Summer Session, EECS" },
    start: "2026-06",
    end: "2026-08",
    highlights: {
      en: ["CS161 Computer Security", "CS188 Introduction to Artificial Intelligence"],
      ko: ["CS161 Computer Security", "CS188 Introduction to Artificial Intelligence"],
    },
  },
  {
    id: "jshs",
    kind: "education",
    org: { en: "Jeonnam Science High School", ko: "전남과학고등학교" },
    orgUrl: "https://jeonnam-sh.hs.jne.kr",
    logo: "https://d3ob3cint7tr3s.cloudfront.net/jshs.png",
    logoShape: "round",
    title: { en: "Graduated", ko: "졸업" },
    start: "2020-03",
    end: "2023-01",
    highlights: {
      en: [
        "Head of the student council's IT department",
        "Built the school management system JshsUs",
      ],
      ko: ["학생회 정보부장", "학교 관리 시스템 JshsUs(과구리) 개발"],
    },
  },

  // ---------------------------------------------------------------- awards
  {
    id: "aiewf-2026",
    kind: "award",
    org: { en: "AI Engineer World's Fair Hackathon", ko: "AI Engineer World's Fair Hackathon" },
    orgUrl: "https://cerebralvalley.ai/e/aiewf-hackathon-2026",
    logo: "https://d3ob3cint7tr3s.cloudfront.net/portfolio/ai_world_fair_hackathon.webp",
    title: { en: "3rd place", ko: "3위" },
    start: "2026-06",
    end: "2026-06",
    highlights: {
      en: ["Rote — a continual-learning computer automation platform powered by generative AI"],
      ko: ["Rote — 생성형 AI 기반 지속 학습형 컴퓨터 자동화 플랫폼"],
    },
  },
  {
    id: "impact-ai-2025",
    kind: "award",
    org: { en: "Impact AI Hackathon · GDG GIST", ko: "Impact AI Hackathon · GDG GIST" },
    orgUrl: "https://gdg.community.dev/events/details/google-gdg-on-campus-gwangju-institute-of-science-and-technology-gwangju-south-korea-presents-build-with-ai-impact-ai-hackathon-1/",
    logo: "https://d3ob3cint7tr3s.cloudfront.net/portfolio/impact_hackathon.png",
    title: { en: "2nd place · GIST AI Institute Director's Award", ko: "2위 · GIST 인공지능연구소장상" },
    start: "2025-05",
    end: "2025-05",
    highlights: {
      en: ["Agora — an AI news platform that counters echo chambers"],
      ko: ["Agora — 에코챔버 현상을 완화하는 AI 뉴스 플랫폼"],
    },
  },
  {
    id: "kpmg-2024",
    kind: "award",
    org: { en: "KPMG Ideathon · Samjong KPMG", ko: "KPMG 아이디어톤 · 삼정 KPMG" },
    orgUrl: "http://www.dhnews.co.kr/news/view/1065585962399224",
    logo: "https://d3ob3cint7tr3s.cloudfront.net/portfolio/2024_kpmg_ideathon.jpg",
    title: { en: "3rd prize", ko: "3등" },
    start: "2024-02",
    end: "2024-02",
    highlights: {
      en: ["Docuflow — generative AI tools for office productivity"],
      ko: ["Docuflow — 생성형 AI로 업무 생산성을 높이는 도구"],
    },
  },
  {
    id: "gwangju-data-2023",
    kind: "award",
    org: { en: "Gwangju Public Data Utilization Contest", ko: "광주광역시 공공데이터 활용 창업경진대회" },
    orgUrl: "https://ccei.creativekorea.or.kr/gwangju/custom/notice_view.do?no=28519&rnum=1361",
    logo: "https://d3ob3cint7tr3s.cloudfront.net/portfolio/gwangju_data.png",
    title: { en: "2nd prize · Service Development", ko: "2위 · 서비스 개발 부문 우수상" },
    start: "2023-07",
    end: "2023-07",
    highlights: {
      en: ["Mefeto — a civic participation platform"],
      ko: ["Mefeto — 시민의 정치 참여를 돕는 AI 플랫폼"],
    },
  },
  {
    id: "sws-kaist-2023",
    kind: "award",
    org: { en: "Side With Startups · KAIST", ko: "Side With Startups · KAIST" },
    orgUrl: "https://docs.google.com/presentation/d/1cXm37OX8B42wRRq6S16i2StgV6BaVh9VDfI3NG8HTPo/edit?usp=sharing",
    logo: "https://d3ob3cint7tr3s.cloudfront.net/portfolio/profile_1.webp",
    title: { en: "1st prize", ko: "1위" },
    start: "2023-05",
    end: "2023-05",
    highlights: {
      en: ["U-in — a generative-AI UI/UX improvement platform"],
      ko: ["U-in — 생성형 AI 기반 UI/UX 개선 솔루션 플랫폼"],
    },
  },

  // ------------------------------------------------------------ activities
  {
    id: "infoteam",
    kind: "activity",
    org: { en: "GSA InfoTeam", ko: "GSA InfoTeam" },
    orgUrl: "https://introduce.gistory.me",
    logo: "https://avatars.githubusercontent.com/u/54899579?s=280&v=4",
    title: { en: "Team Leader · Full-stack Developer", ko: "팀 리더 · 풀스택 개발자" },
    start: "2023-03",
    entries: [
      {
        title: { en: "Team Leader", ko: "팀 리더" },
        start: "2024-01",
        end: "2024-12",
        highlights: {
          en: [
            "Helped establish and run the incorporated team",
            "Ran internal seminars to build the team culture",
            "Planned Devs' Night for GIST developers",
          ],
          ko: ["법인 설립 기여 및 운영", "조직 문화 정착을 위한 내부 세미나 진행", "GIST 개발자 이벤트 Devs' Night 기획"],
        },
      },
      {
        title: { en: "Deputy Leader", ko: "부팀장" },
        start: "2026-01",
        highlights: {
          en: ["Organises and manages the team's development activities"],
          ko: ["개발 활동 조직 및 관리"],
        },
      },
      {
        title: { en: "Full-stack Developer", ko: "풀스택 개발자" },
        start: "2023-03",
        highlights: {
          en: ["Built Ziggle, the integrated notice platform", "Built the GIST Chatbot"],
          ko: ["통합 공지 관리 플랫폼 Ziggle 개발", "GIST 챗봇 서비스 개발"],
        },
      },
    ],
  },
  {
    id: "wing",
    kind: "activity",
    org: { en: "WING — GIST Developer Group", ko: "WING — GIST 전산 동아리" },
    logo: "https://avatars.githubusercontent.com/u/129100127?s=200&v=4",
    title: { en: "Club Leader", ko: "동아리장" },
    start: "2023-03",
    entries: [
      {
        title: { en: "Club Leader", ko: "동아리장" },
        start: "2026-01",
        highlights: { en: ["Organises and runs club activities"], ko: ["동아리 운영 및 관리"] },
      },
      {
        title: { en: "Junior Developer", ko: "주니어 개발자" },
        start: "2023-03",
        end: "2024-12",
        highlights: {
          en: [
            "Ran open sessions on React, Next.js and Flutter",
            "Ran a mentoring programme for junior developers",
          ],
          ko: ["React, Next.js, Flutter 등 기술 오픈 세션 진행", "주니어 개발자 양성 멘토링 프로그램 운영"],
        },
      },
    ],
  },
  {
    id: "mop",
    kind: "activity",
    org: { en: "MOP", ko: "MOP" },
    logo: "/img/logo_mop.png",
    title: { en: "Member", ko: "동아리 부원" },
    start: "2023-03",
    end: "2023-12",
    highlights: {
      en: ["Startup ecosystem study group", "Took part in a mock start-up programme"],
      ko: ["스타트업 관련 스터디", "모의 창업 프로그램 참여"],
    },
  },
];

export function timelineByKind(kind: TimelineKind): TimelineItem[] {
  return timeline
    .filter((item) => item.kind === kind)
    .sort((a, b) => b.start.localeCompare(a.start));
}
