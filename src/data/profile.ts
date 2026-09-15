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
    en: "I study generative AI and build products that put it to work.",
    ko: "생성형 AI를 연구하고, 그것을 실제로 쓰이는 제품으로 만듭니다.",
  } satisfies Localized<string>,

  /** Short paragraphs under the headline. */
  intro: {
    en: [
      "I'm an undergraduate at GIST working on diffusion language models at Real-Lab, and a full-stack engineer who has shipped apps and platforms used by real people.",
      "I care about the whole loop: understanding how a model works, testing an idea in an experiment, and turning what holds up into a system someone can use.",
    ],
    ko: [
      "GIST 학부생으로 Real-Lab에서 Diffusion Language Model을 연구하고 있으며, 실제 사용자가 쓰는 앱과 플랫폼을 만들어 온 풀스택 엔지니어입니다.",
      "모델이 어떻게 동작하는지 이해하고, 아이디어를 실험으로 검증하고, 검증된 것을 누군가 쓸 수 있는 시스템으로 옮기는 전체 과정에 관심이 있습니다.",
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
