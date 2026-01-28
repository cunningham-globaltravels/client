// src/middleware.ts

import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { countryLanguageMap } from './i18n/countryLanguageMap';
import { routing } from './i18n/routing';
import { isValidLocale } from './i18n/isValidLocale';
import { getLocaleFromAcceptLanguage } from './i18n/acceptLanguage';

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  //const url = request.nextUrl.clone();
  const { pathname } = request.nextUrl;

  /* -----------------------------------------
   * 1️⃣ Locale already in URL
   * --------------------------------------- */
  const localeInPath = routing.locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (localeInPath) {
    if (!isValidLocale(localeInPath)) {
      return NextResponse.redirect(new URL(`/${routing.defaultLocale}`, request.url));
    }
    return intlMiddleware(request);
  }

  /* -----------------------------------------
   * 2️⃣ Cookie-based locale
   * --------------------------------------- */
  const cookieLocale = request.cookies.get('locale')?.value;
  if (cookieLocale && isValidLocale(cookieLocale)) {
    return redirectWithLocale(request, cookieLocale);
  }

  /* -----------------------------------------
   * 3️⃣ Accept-Language header
   * --------------------------------------- */
  const acceptLanguage = request.headers.get('accept-language');
  const headerLocale = getLocaleFromAcceptLanguage(acceptLanguage);

  if (headerLocale) {
    return redirectWithLocale(request, headerLocale);
  }

  /* -----------------------------------------
   * 4️⃣ Geo-IP fallback
   * --------------------------------------- */
  const country = request.headers.get('x-vercel-ip-country') ?? request.headers.get('cf-ipcountry') ?? '';

  const geoLocale = countryLanguageMap[country] ?? routing.defaultLocale;

  return redirectWithLocale(request, geoLocale);
}

/* -----------------------------------------
 * Shared redirect helper
 * --------------------------------------- */
function redirectWithLocale(request: NextRequest, locale: string) {
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${url.pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - API routes
     * - Next.js internals
     * - Static files (images, icons, fonts, etc)
     */
    '/((?!api|_next|favicon.ico|images|icons|fonts|.*\\..*).*)',
  ],
};
