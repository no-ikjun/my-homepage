import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });
const SITE_URL = "https://ikjun.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // 한국어 우선 + 영어 병기
  title: {
    default: "최익준 | Ikjun Choi",
    template: "%s | 최익준 | Ikjun Choi",
  },
  // 한국어 1문장 + 영어 1문장 (160자 안팎)
  description:
    "SW 개발자 최익준의 포트폴리오(웹·모바일). React/Next.js, Node.js 기반 프로젝트와 사례를 확인하세요. Portfolio of Ikjun Choi, full-stack web & mobile apps.",
  // 한국어/영어 키워드
  keywords: [
    "최익준",
    "풀스택 개발자",
    "소프트웨어 개발자",
    "프론트엔드 개발자",
    "웹 개발자",
    "모바일 앱",
    "React",
    "Next.js",
    "Node.js",
    "Ikjun Choi",
    "SW 개발자",
    "Full-stack developer",
    "Portfolio",
  ],
  icons: { icon: "/favicon.ico" },
  // 잘못된 hreflang 제거: 서로 다른 URL 없으면 languages 넣지 말기
  alternates: {
    canonical: SITE_URL,
    languages: {
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    // 한국어 우선 타이틀/설명 + 영어 병기
    title: "최익준 | Ikjun Choi — SW 개발자",
    description:
      "웹·모바일 SW 포트폴리오. React/Next.js, Node.js 프로젝트와 사례 소개. Portfolio of Ikjun Choi (full-stack web & mobile).",
    siteName: "Ikjun Choi Portfolio",
    images: [
      { url: `${SITE_URL}/profile_round3.png`, alt: "최익준 Ikjun Choi" },
      { url: `${SITE_URL}/profile_round.png`, alt: "최익준 Ikjun Choi" },
    ],
    locale: "ko_KR",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "최익준 | Ikjun Choi — 풀스택 개발자 포트폴리오",
    description:
      "React/Next.js, Node.js 기반 웹·모바일 프로젝트 포트폴리오. Portfolio of Ikjun Choi (full-stack).",
    images: [`${SITE_URL}/profile_round3.png`],
  },
  robots: { index: true, follow: true },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 한국어 기본(코어 타겟이 한국어라면 ko 권장)
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        {children}
        <Analytics />

        {/* JSON-LD: Person + (선택) Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "최익준 (Ikjun Choi)",
              alternateName: ["Ikjun Choi", "최익준"],
              jobTitle: "Full-Stack Developer",
              url: SITE_URL,
              knowsLanguage: ["ko", "en"],
              sameAs: [
                // 실제 프로필 URL들 (GitHub/LinkedIn 등) 넣으면 신뢰도↑
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
