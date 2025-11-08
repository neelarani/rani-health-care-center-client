import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  console.log('pathname', request.nextUrl.pathname);
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher:
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)',
};
