import { routing } from "@/i18n/routing";
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Explicitly redirect root to default locale
  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${routing.defaultLocale}`, request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  // Run on root and all localized paths
  matcher: ["/", "/(en|ko)/:path*"],
};
