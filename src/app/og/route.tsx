import fs from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { profile } from "@/data/profile";
import { OG_IMAGE_SIZE } from "@/lib/metadata";

/**
 * Social card: GET /og?t=<title>&s=<eyebrow>&d=<description>&l=<locale>
 *
 * Every page's og:image points here (see pageMetadata), so link previews on
 * Slack, X, KakaoTalk and the like show the page title in the site's type
 * instead of a cropped profile photo. Without `t` it renders the site card.
 */

export const runtime = "nodejs";

const NAME = "Ikjun Choi";
const HOST = "ikjun.com";

const ROLE = {
  en: "Undergraduate researcher · Software engineer",
  ko: "학부 연구원 · 소프트웨어 엔지니어",
} as const;

const MAX_TITLE = 120;
const MAX_EYEBROW = 60;
const MAX_DESCRIPTION = 180;

// Pretendard is subset to Latin + Hangul and read once per cold start. The
// files sit next to this route; next.config.mjs lists them in
// outputFileTracingIncludes so the deployed function bundles them.
const ASSET_DIR = path.join(process.cwd(), "src", "app", "og");
const asset = (name: string) => fs.readFile(path.join(ASSET_DIR, name));
let assets: Promise<{ bold: ArrayBuffer; regular: ArrayBuffer; avatar: string }> | undefined;
function loadAssets() {
  assets ??= Promise.all([asset("Pretendard-Bold.ttf"), asset("Pretendard-Regular.ttf"), asset("avatar.png")]).then(
    ([bold, regular, avatar]) => ({
      bold: toArrayBuffer(bold),
      regular: toArrayBuffer(regular),
      avatar: `data:image/png;base64,${avatar.toString("base64")}`,
    }),
  );
  return assets;
}
const toArrayBuffer = (b: Buffer) => b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength) as ArrayBuffer;

/** Larger type for short titles; long ones step down so three lines still fit. */
function titleSize(title: string) {
  const len = [...title].length;
  if (len <= 20) return 84;
  if (len <= 40) return 72;
  if (len <= 70) return 60;
  return 52;
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = (searchParams.get("t") ?? "").trim().slice(0, MAX_TITLE);
  const eyebrow = (searchParams.get("s") ?? "").trim().slice(0, MAX_EYEBROW);
  const description = (searchParams.get("d") ?? "").trim().slice(0, MAX_DESCRIPTION);
  const locale = searchParams.get("l") === "ko" ? "ko" : "en";
  const { bold, regular, avatar } = await loadAssets();

  // The site card is role / name / affiliation under the same avatar-and-name header.
  const heading = title || profile.name[locale];
  const sub = title ? eyebrow : ROLE[locale];
  const body = title ? description : profile.affiliation[locale];

  return new ImageResponse(
    (
      <div
        lang={locale}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "56px 72px",
          background: "#fcfcfc",
          color: "#1a1a1a",
          fontFamily: "Pretendard",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={avatar} width={60} height={60} alt="" style={{ borderRadius: 9999 }} />
          <span style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.2 }}>{NAME}</span>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 20,
            maxWidth: 1020,
          }}
        >
          {sub ? (
            <span style={{ fontSize: 30, color: "#6b6b6b", lineHeight: 1.3 }}>{sub}</span>
          ) : null}
          <span
            style={{
              fontSize: titleSize(heading),
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              wordBreak: locale === "ko" ? "keep-all" : "normal",
              display: "block",
              // Satori's line clamp: an ellipsis after three lines.
              lineClamp: 3,
            }}
          >
            {heading}
          </span>
          {body ? (
            <span
              style={{
                fontSize: 30,
                color: "#5c5c5c",
                lineHeight: 1.4,
                wordBreak: locale === "ko" ? "keep-all" : "normal",
                display: "block",
                lineClamp: 2,
                marginTop: 6,
              }}
            >
              {body}
            </span>
          ) : null}
        </div>

        <span style={{ fontSize: 26, color: "#8a8a8a", lineHeight: 1.2 }}>{HOST}</span>
      </div>
    ),
    {
      ...OG_IMAGE_SIZE,
      fonts: [
        { name: "Pretendard", data: bold, weight: 700, style: "normal" },
        { name: "Pretendard", data: regular, weight: 400, style: "normal" },
      ],
    },
  );
}
