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

  /** "YYYY-MM" - bump whenever the Now block changes. */
  nowUpdated: "2026-09",

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

  interests: {
    en: [
      "Diffusion and autoregressive language models",
      "Practical training and inference for generative models",
      "Turning research ideas into products",
    ],
    ko: [
      "Diffusion·Autoregressive 언어 모델",
      "생성 모델의 실용적인 학습과 추론",
      "연구 아이디어를 제품으로 옮기기",
    ],
  } satisfies Localized<string[]>,

  principles: {
    en: [
      "Define the problem first, then design the simplest solution that works.",
      "Ship small, validate fast, iterate.",
      "Form a hypothesis and test it with an experiment before committing.",
      "Decide from both the product and the engineering side.",
    ],
    ko: [
      "문제를 먼저 정의하고, 해결책은 가능한 단순하게 설계합니다.",
      "작게 만들고 빠르게 검증하는 반복을 선호합니다.",
      "가설을 세우고 실험으로 검증한 뒤에 결정합니다.",
      "제품 관점과 개발 관점을 함께 보고 의사결정합니다.",
    ],
  } satisfies Localized<string[]>,

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
