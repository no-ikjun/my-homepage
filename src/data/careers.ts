import { type Language } from "@/types/language";

type CareerProject = {
  title: string;
  description: string;
  period: string;
  content: string[];
};

type Career = {
  title: string;
  link: string;
  image: string;
  description: string;
  subDescription: string;
  content: CareerProject[];
};

export const careers: Record<Language, Career[]> = {
  en: [
    {
      title: "Sterri Inc.",
      link: "https://sterri.io",
      image:
        "https://media.licdn.com/dms/image/v2/D560BAQE_Mp-R4WWGTg/company-logo_200_200/company-logo_200_200/0/1730446889180/sterri_logo?e=1773878400&v=beta&t=y4Ol62XBHFmTTvjDphf8URHL--p5HpUO51DIPnPVPcY",
      description: "2026.01 - (ongoing)",
      subDescription: "Product Developer (Full Stack)",
      content: [
        {
          title: "Warru (와르르)",
          description:
            "Streamer platform for effective event progression and management",
          period: "2026.01 - (ongoing)",
          content: [
            "Development of a REST API using NestJS",
            "Development of frontend using Next.js",
            "Collection and processing of streamer data for AI learning using Python",
            "Management of cloud services using AWS",
          ],
        },
      ],
    },
    {
      title: "Sigor Inc.",
      link: "",
      image:
        "https://media.disquiet.io/images/team/thumbnail/f218e93256f333abb30b02941acb4c031428022588fda00e6c0111277e7507ce",
      description: "2023.06 - 2024.02",
      subDescription: "Software Developer",
      content: [
        {
          title: "Rushhour",
          description:
            "An app service that provides real-time subway congestion information and places with many vacancies",
          period: "2023 - 2024",
          content: [
            "Development and Distribution of Cross Platform App Using Flutter",
            "Analysis of subway usage data using Python",
            "Development of a RESTful API using NestJS",
          ],
        },
        {
          title: "AI Solution Service",
          description: "AI solutions based on Sigor's own AI technology",
          period: "2024",
          content: ["Development of receipt text recognition OCR"],
        },
      ],
    },
  ],
  ko: [
    {
      title: "(주)스테리",
      link: "https://sterri.io",
      image:
        "https://media.licdn.com/dms/image/v2/D560BAQE_Mp-R4WWGTg/company-logo_200_200/company-logo_200_200/0/1730446889180/sterri_logo?e=1773878400&v=beta&t=y4Ol62XBHFmTTvjDphf8URHL--p5HpUO51DIPnPVPcY",
      description: "2026.01 - (ongoing)",
      subDescription: "제품 개발자 (Full Stack)",
      content: [
        {
          title: "스트리머를 위한 이벤트 플랫폼, 와르르",
          description: "효과적인 이벤트 진행 및 관리를 위한 스트리머 플랫폼",
          period: "2026.01 - (ongoing)",
          content: [
            "NestJS 활용 REST API 개발",
            "Next.js 활용 프론트엔드 개발",
            "AI 학습을 위한 스트리머 데이터 수집 및 처리",
            "AWS 활용 클라우드 서비스 관리",
          ],
        },
      ],
    },
    {
      title: "(주)시고르자브종",
      link: "",
      image:
        "https://media.disquiet.io/images/team/thumbnail/f218e93256f333abb30b02941acb4c031428022588fda00e6c0111277e7507ce",
      description: "2023.06 - 2024.02",
      subDescription: "소프트웨어 개발자",
      content: [
        {
          title: "러시아워: 지하철 빈자리 찾기",
          description:
            "실시간 지하철 혼잡도 정보와 여석이 많은 지하철 칸을 표시하는 앱 서비스",
          period: "2023 - 2024",
          content: [
            "Flutter를 활용한 크로스플랫폼 앱 개발 및 배포",
            "Python으로 지하철 이용 데이터 분석",
            "NestJS 기반 REST API 개발",
          ],
        },
        {
          title: "AI Solution Service",
          description: "자체 AI 기술을 활용한 AI 솔루션 구축",
          period: "2024",
          content: ["영수증 문자 인식 OCR 개발"],
        },
      ],
    },
  ],
};
