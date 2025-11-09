import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { UserRole } from './lib/auth-utils';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { cookies } from 'next/headers';

type RouteConfig = {
  exact: string[];
  pattersn: RegExp[];
};

const authRoutes = [
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
];

const commonProtectedRoutes: RouteConfig = {
  exact: ['/my-profile', '/settings'],
  pattersn: [],
};

const doctorProtectedRoutes: RouteConfig = {
  pattersn: [/^\/doctor/],
  exact: [],
};

const adminProtectedRoutes: RouteConfig = {
  pattersn: [/^\/admin/],
  exact: [],
};

const patientProtectedRoutes: RouteConfig = {
  pattersn: [/^\/dashboard/],
  exact: [],
};

const isAuthRoute = (pathname: string) => {
  return authRoutes.some((route: string) => route === pathname);
};

const isRouteMatches = (pathname: string, routes: RouteConfig): boolean => {
  if (routes.exact.includes(pathname)) {
    return true;
  }
  return routes.pattersn.some((pattern: RegExp) => pattern.test(pathname));
};

const getRouteOwner = (
  pathname: string
): 'ADMIN' | 'DOCTOR' | 'PATIENT' | 'COMMON' | null => {
  if (isRouteMatches(pathname, adminProtectedRoutes)) {
    return 'ADMIN';
  }
  if (isRouteMatches(pathname, doctorProtectedRoutes)) {
    return 'DOCTOR';
  }
  if (isRouteMatches(pathname, patientProtectedRoutes)) {
    return 'PATIENT';
  }
  if (isRouteMatches(pathname, commonProtectedRoutes)) {
    return 'COMMON';
  }
  return null;
};

const getDefaultDashboardRoute = (role: UserRole): string => {
  if (role === 'ADMIN') {
    return '/admin/dashboard';
  }
  if (role === 'DOCTOR') {
    return '/doctor/dashboard';
  }
  if (role === 'PATIENT') {
    return '/patient/dashboard';
  }
  return '/';
};

export async function proxy(request: NextRequest) {
  const cookieStore = await cookies();
  const pathname = request.nextUrl.pathname;
  const accessToken = request.cookies.get('accessToken')?.value || null;

  let userRole: UserRole | null = null;

  if (accessToken) {
    const verifiedToken: JwtPayload | string = jwt.verify(
      accessToken,
      process.env.JWT_SECRET as string
    );

    if (typeof verifiedToken === 'string') {
      cookieStore.delete('accessToken');
      cookieStore.delete('refreshToken');
      return NextResponse.redirect(new URL('/login', request.url));
    }

    userRole = verifiedToken.role;
  }

  const routerOwner = getRouteOwner(pathname);

  const isAuth = isAuthRoute(pathname);

  //  rule 1 : User is logged in and trying to access auth route. redirect to default dashboard

  if (accessToken && isAuth) {
    return NextResponse.redirect(
      new URL(getDefaultDashboardRoute(userRole as UserRole), request.url)
    );
  }

  // Rule 2 : user is trying to access open public route
  if (routerOwner === null) {
    return NextResponse.next();
  }

  //  Rule 1 & 2 for open public routes and auth routes

  if (!accessToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // rule 3 : user is trying to access common protected route

  if (routerOwner === 'COMMON') {
    return NextResponse.next();
  }

  //  Rule 4 : User is trying to access role based protected route
  if (
    routerOwner === 'ADMIN' ||
    routerOwner === 'DOCTOR' ||
    routerOwner === 'PATIENT'
  ) {
    if (userRole !== routerOwner) {
      return NextResponse.redirect(
        new URL(getDefaultDashboardRoute(userRole as UserRole), request.url)
      );
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher:
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)',
};
