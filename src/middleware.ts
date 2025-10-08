import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SUPPORTED_LOCALES } from "./types/locales";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore internal Next.js and public assets
  if (pathname.startsWith("/_next") || pathname.includes(".")) return;

  // Already localized? (e.g., /en/about)
  const isLocalized = SUPPORTED_LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (isLocalized) return;

  // Optional: detect browser locale
  const preferred = request.headers
    .get("accept-language")
    ?.split(",")[0]
    ?.slice(0, 2);

  const defaultLocale =
    SUPPORTED_LOCALES.find((loc) => loc.startsWith(preferred || "")) || "en";

  // Redirect to locale-prefixed path (e.g., /about → /en/about)
  const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

// Run middleware for all routes under /
export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
