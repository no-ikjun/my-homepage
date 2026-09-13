import type { Localized } from "@/lib/i18n";

export type NowKind = "research" | "building" | "learning";

export type NowItem = {
  id: string;
  kind: NowKind;
  title: Localized<string>;
  detail: Localized<string>;
  /** Locale-neutral internal path ("/projects/x") or external URL */
  href?: string;
};

export type SocialId = "email" | "github" | "linkedin" | "instagram";

export type SocialLink = {
  id: SocialId;
  label: string;
  href: string;
};

export const profile = {
  name: { en: "Ikjun Choi", ko: "최익준" } satisfies Localized<string>,
  avatar: "/img/profile_round3.png",
  location: { en: "Gwangju, South Korea", ko: "광주, 대한민국" } satisfies Localized<string>,
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

  /** "Now" block on the home page. Keep to 3-4 items; edit freely. */
  now: [
    {
      id: "dlm-research",
      kind: "research",
      title: {
        en: "Diffusion language models",
        ko: "Diffusion Language Model 연구",
      },
      detail: {
        en: "Undergraduate research intern at Real-Lab@GIST, advised by Prof. Kwanyoung Kim. Exploring more practical training and generation for diffusion LMs.",
        ko: "Real-Lab@GIST 학부 연구 인턴 (지도교수 김관영). Diffusion LM의 더 실용적인 학습·생성 방법을 탐구하고 있습니다.",
      },
      href: "/projects/diffusion-language-models",
    },
    {
      id: "gist-chatbot",
      kind: "building",
      title: { en: "GIST Chatbot", ko: "GIST 챗봇" },
      detail: {
        en: "A retrieval-based assistant over GIST's official documents, built with an MCP server and client.",
        ko: "GIST 공식 자료를 검색해 답하는 챗봇. MCP 서버·클라이언트 구조로 만들고 있습니다.",
      },
      href: "/projects/gist-chatbot",
    },
    {
      id: "learning",
      kind: "learning",
      title: { en: "Security and AI foundations", ko: "보안과 AI 기초" },
      detail: {
        en: "Fresh off CS161 and CS188 at UC Berkeley; digging deeper into model training infrastructure.",
        ko: "UC Berkeley에서 CS161·CS188을 마치고, 모델 학습 인프라를 더 깊게 파고 있습니다.",
      },
    },
  ] satisfies NowItem[],

  /** The About page narrative. Written in the first person; keep it personal. */
  about: {
    en: [
      "I'm Ikjun, an EECS undergraduate at GIST. I spend my weeks between a research lab and a code editor: at Real-Lab I work on diffusion language models, and outside of it I build products that people actually use.",
      "I didn't arrive at research from the theory side. I got there by shipping things. Running a campus notice platform, a reading-habit app and a chatbot over school documents kept raising the same question: why does the model behave this way, and what would make it better? Those questions are now what I study.",
      "The two sides feed each other. Building tells me which research problems matter in practice; research gives me tools and instincts that most product engineers don't have. I want to keep both, which is why I'm preparing for graduate study in generative AI while continuing to ship.",
      "Outside of that I've led GSA InfoTeam and the WING developer club at GIST, run sessions on React and Flutter for newer developers, and spent a lot of weekends at hackathons.",
    ],
    ko: [
      "GIST 전기전자컴퓨터공학과에 재학 중인 최익준입니다. 한 주를 연구실과 코드 에디터 사이에서 보냅니다. Real-Lab에서는 Diffusion Language Model을 연구하고, 그 밖의 시간에는 사람들이 실제로 쓰는 제품을 만듭니다.",
      "연구는 이론 쪽에서 출발한 게 아니라 만들다 보니 도착한 곳입니다. 교내 공지 플랫폼, 독서 습관 앱, 학교 문서 기반 챗봇을 운영하면서 같은 질문이 반복됐습니다. 모델은 왜 이렇게 동작하고, 무엇을 바꾸면 나아질까. 지금은 그 질문을 연구로 다룹니다.",
      "두 쪽은 서로를 먹여 살립니다. 만들어 보면 어떤 연구 문제가 실제로 중요한지 알게 되고, 연구는 대부분의 제품 엔지니어에게 없는 도구와 감각을 줍니다. 둘 다 놓치고 싶지 않아서, 생성형 AI 대학원 진학을 준비하면서 동시에 계속 무언가를 출시하고 있습니다.",
      "그 외에는 GSA InfoTeam과 GIST 전산 동아리 WING을 이끌었고, 후배 개발자들을 위해 React와 Flutter 세션을 열었으며, 주말은 해커톤에서 자주 보냈습니다.",
    ],
  } satisfies Localized<string[]>,

  /** The two tracks, side by side on the About page. */
  tracks: {
    research: {
      title: { en: "Research", ko: "연구" },
      body: {
        en: "Generative models for language, with a bias toward what makes them practical: training that is stable and cheap, generation that is fast and controllable.",
        ko: "언어를 위한 생성 모델, 그중에서도 실용성을 좌우하는 부분에 관심이 있습니다. 안정적이고 저렴한 학습, 빠르고 제어 가능한 생성.",
      },
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
    },
    engineering: {
      title: { en: "Engineering", ko: "엔지니어링" },
      body: {
        en: "End to end: planning, backend, frontend and app, cloud, and the part after launch where you find out what people actually do.",
        ko: "기획부터 백엔드, 프론트엔드와 앱, 클라우드, 그리고 출시 이후 사람들이 실제로 어떻게 쓰는지 알게 되는 단계까지 전부.",
      },
      items: {
        en: [
          "Next.js, NestJS and Flutter in production",
          "Retrieval and LLM features that hold up with real users",
          "Small teams, fast iterations, owning the whole product",
        ],
        ko: [
          "Next.js, NestJS, Flutter로 만든 실제 운영 서비스",
          "실제 사용자 앞에서 버티는 검색·LLM 기능",
          "작은 팀, 빠른 반복, 제품 전체를 책임지는 방식",
        ],
      },
    },
  } satisfies Record<"research" | "engineering", { title: Localized<string>; body: Localized<string>; items: Localized<string[]> }>,

  /** Primary links, shown on the home page and in the footer. */
  links: [
    { id: "email", label: "choiikjun1101@gmail.com", href: "mailto:choiikjun1101@gmail.com" },
    { id: "github", label: "no-ikjun", href: "https://github.com/no-ikjun" },
    { id: "linkedin", label: "ikjunchoi", href: "https://www.linkedin.com/in/ikjunchoi/" },
  ] satisfies SocialLink[],

  /** Everything listed on the contact page, in order. */
  channels: [
    { id: "email", label: "choiikjun1101@gmail.com", href: "mailto:choiikjun1101@gmail.com" },
    { id: "linkedin", label: "linkedin.com/in/ikjunchoi", href: "https://www.linkedin.com/in/ikjunchoi/" },
    { id: "github", label: "github.com/no-ikjun", href: "https://github.com/no-ikjun" },
    { id: "instagram", label: "@__ikjun", href: "https://www.instagram.com/__ikjun/" },
  ] satisfies SocialLink[],
};

export type Profile = typeof profile;
