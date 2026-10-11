import localFont from "next/font/local";

/**
 * Pretendard covers both Latin and Korean (its Latin is derived from Inter),
 * so a single family keeps the two scripts consistent in weight and rhythm.
 */
const pretendard = localFont({
  src: [
    { path: "../../public/fonts/pretendard/Pretendard-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/pretendard/Pretendard-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/pretendard/Pretendard-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/pretendard/Pretendard-ExtraBold.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-pretendard",
  display: "swap",
  preload: true,
});

export const fontVariables = pretendard.variable;
