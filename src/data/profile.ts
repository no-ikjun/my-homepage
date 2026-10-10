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
    en: "EECS undergraduate at GIST",
    ko: "GIST 전기전자컴퓨터공학과 학부생",
  } satisfies Localized<string>,

  /** The one-line identity statement shown at the top of the home page. */
  headline: {
    en: "I like building software that people find useful.",
    ko: "사람들에게 쓸모 있는 소프트웨어를 만드는 걸 좋아합니다.",
  } satisfies Localized<string>,

  /** Short paragraphs under the headline. */
  intro: {
    en: [
      "I'm an EECS undergraduate at GIST. I enjoy exploring new technology and figuring out how it can be useful in everyday life.",
      "Building things often gives me new questions to explore. I'm curious about what AI can help with, and I enjoy trying out ideas and improving them as I learn.",
    ],
    ko: [
      "GIST에서 전기전자컴퓨터공학을 공부하고 있습니다. 새로운 기술을 알아가고, 일상에서 어떻게 활용할 수 있을지 고민하는 걸 좋아합니다.",
      "직접 만들다 보면 더 알고 싶은 것들이 생깁니다. AI가 어떤 문제에 도움이 될지 궁금하고, 떠오른 아이디어를 구현하고 다듬으며 배우는 과정을 즐깁니다.",
    ],
  } satisfies Localized<string[]>,

  /** The two tracks, side by side on the About page. */
  tracks: {
    research: {
      title: { en: "Research", ko: "연구" },
      items: {
        en: [
          "Diffusion language models and their decoding",
          "Efficient training and inference for generative models",
          "Evaluation that reflects real use, not just benchmarks",
        ],
        ko: [
          "Diffusion Language Model과 디코딩 방법",
          "생성 모델의 효율적인 학습과 추론",
          "벤치마크가 아니라 실제 사용을 반영하는 평가",
        ],
      },
      stack: ["PyTorch", "Hugging Face", "Python"],
    },
    engineering: {
      title: { en: "Engineering", ko: "엔지니어링" },
      items: {
        en: [
          "Shipping and running web and mobile products people use",
          "Retrieval and LLM features that hold up with real users",
          "Small teams, fast iterations, owning the whole product",
        ],
        ko: [
          "실제 사용자가 쓰는 웹·앱 서비스 출시와 운영",
          "실제 사용자 앞에서 버티는 검색·LLM 기능",
          "작은 팀, 빠른 반복, 제품 전체를 책임지는 방식",
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
