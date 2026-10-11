import type { Localized } from "@/lib/i18n";

export type SocialId = "email" | "github" | "linkedin" | "instagram";

export type SocialLink = {
  id: SocialId;
  label: string;
  href: string;
};

export const profile = {
  name: { en: "Ikjun Choi", ko: "최익준" } satisfies Localized<string>,
  avatar: "/img/profile_round3.png",
  location: {
    en: "Gwangju, South Korea",
    ko: "광주, 대한민국",
  } satisfies Localized<string>,
  affiliation: {
    en: "EECS undergraduate at GIST · Business & Economics minor",
    ko: "GIST 전기전자컴퓨터공학 전공 · 경영·경제 부전공",
  } satisfies Localized<string>,

  /** The one-line identity statement shown at the top of the home page. */
  headline: {
    en: "I build things to understand technology and the value it can create.",
    ko: "직접 만들며 기술을 이해하고, 그 기술이 만드는 가치를 탐구합니다.",
  } satisfies Localized<string>,

  /** Short paragraphs under the headline. */
  intro: {
    en: [
      "I'm an EECS undergraduate at GIST, also studying business and economics. I enjoy exploring new technologies, building products, and understanding how they can make a difference in the real world.",
      "Through software development and AI research, I've become increasingly interested in not just how technology works, but why it matters and where it can create value.",
    ],
    ko: [
      "GIST에서 전기전자컴퓨터공학을 전공하고, 경영·경제를 부전공하고 있습니다. 새로운 기술을 탐구하고 직접 구현하면서, 그것이 현실에서 어떤 변화를 만들어낼 수 있을지 고민하는 것을 좋아합니다.",
      "서비스 개발과 AI 연구를 경험하며 기술이 어떻게 작동하는지뿐 아니라, 왜 필요하고 어디에서 가치를 만들어낼 수 있는지에 점점 더 관심을 갖게 되었습니다.",
    ],
  } satisfies Localized<string[]>,

  /** The two tracks, side by side on the About page. */
  tracks: {
    research: {
      title: { en: "Research", ko: "연구" },
      items: {
        en: [
          "Exploring generative AI and diffusion language models",
          "Studying how models generate, reason, and improve",
          "Connecting technical advances with real-world usefulness",
        ],
        ko: [
          "생성형 AI와 Diffusion Language Model 탐구",
          "생성모델의 학습·추론·생성 과정 연구",
          "기술적 성능 개선과 실제 활용 가치의 연결에 대한 관심",
        ],
      },
      stack: ["PyTorch", "Hugging Face", "Python"],
    },
    engineering: {
      title: { en: "Engineering", ko: "엔지니어링" },
      items: {
        en: [
          "Building and operating products for real users",
          "Turning ideas into working systems, from prototype to deployment",
          "Iterating quickly and taking ownership of the entire product",
        ],
        ko: [
          "실제 사용자를 위한 웹·모바일 서비스 개발과 운영",
          "아이디어부터 구현·배포까지 이어지는 제품 개발",
          "빠른 실행과 반복 개선, 제품 전반에 대한 주도적인 책임",
        ],
      },
      stack: [
        "Next.js",
        "NestJS",
        "Flutter",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "AWS",
      ],
    },
  } satisfies Record<
    "research" | "engineering",
    { title: Localized<string>; items: Localized<string[]>; stack: string[] }
  >,

  /** Primary links, shown on the home page and in the footer. */
  links: [
    {
      id: "email",
      label: "choiikjun1101@gmail.com",
      href: "mailto:choiikjun1101@gmail.com",
    },
    { id: "github", label: "no-ikjun", href: "https://github.com/no-ikjun" },
    {
      id: "linkedin",
      label: "ikjunchoi",
      href: "https://www.linkedin.com/in/ikjunchoi/",
    },
  ] satisfies SocialLink[],

  /** Everything listed on the contact page, in order. */
  channels: [
    {
      id: "email",
      label: "choiikjun1101@gmail.com",
      href: "mailto:choiikjun1101@gmail.com",
    },
    {
      id: "linkedin",
      label: "linkedin.com/in/ikjunchoi",
      href: "https://www.linkedin.com/in/ikjunchoi/",
    },
    {
      id: "github",
      label: "github.com/no-ikjun",
      href: "https://github.com/no-ikjun",
    },
    {
      id: "instagram",
      label: "@__ikjun",
      href: "https://www.instagram.com/__ikjun/",
    },
  ] satisfies SocialLink[],
};

export type Profile = typeof profile;
