import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const intl = createMiddleware({
  locales: ["ko", "en"],
  defaultLocale: "ko",
  localePrefix: "never",
  localeDetection: false,
});

export default function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const to = url.searchParams.get("locale");
  if (to === "ko" || to === "en") {
    const redirectUrl = new URL(url.pathname, request.url);
    const response = NextResponse.redirect(redirectUrl);
    response.cookies.set("NEXT_LOCALE", to, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }
  return intl(request);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
