import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";

/**
 * Latin text is set in Geist; Korean glyphs fall through to Pretendard.
 * Both are exposed as CSS variables and composed in globals.css (`--font-sans`).
 */
const pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/pretendard/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/pretendard/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/pretendard/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/pretendard/Pretendard-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
  preload: true,
});

export const fontVariables = [
  GeistSans.variable,
  GeistMono.variable,
  pretendard.variable,
].join(" ");
