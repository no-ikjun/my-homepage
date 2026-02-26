import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { LanguageProvider } from "@/contexts/language-context";
import { ThemeProvider } from "@/contexts/theme-context";
const SITE_URL = "https://ikjun.com";
const themeBootstrapScript = `
(function () {
  try {
    var key = "preferredTheme";
    var stored = window.localStorage.getItem(key);
    var theme = (stored === "light" || stored === "dark")
      ? stored
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // 한국어 우선 + 영어 병기
  title: {
    default: "최익준 | Ikjun Choi",
    template: "%s | 최익준 | Ikjun Choi",
  },
  // 한국어 1문장 + 영어 1문장 (160자 안팎)
  description:
    "SW 개발자 최익준의 포트폴리오(웹·모바일). 프로젝트와 사례를 확인하세요. Portfolio of Ikjun Choi",
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
    title: "최익준 | Ikjun Choi",
    description:
      "최익준의 포트폴리오. 프로젝트와 사례를 확인하세요. Portfolio of Ikjun Choi",
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
    title: "최익준 | Ikjun Choi",
    description:
      "최익준의 포트폴리오. 프로젝트와 사례를 확인하세요. Portfolio of Ikjun Choi",
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
    <html lang="ko" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: themeBootstrapScript,
          }}
        />
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            {children}
            <Footer />
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>

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
                "https://github.com/no-ikjun",
                "https://www.linkedin.com/in/ikjunchoi/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
