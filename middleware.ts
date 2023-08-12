import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse, type NextRequest } from "next/server";

// export async function middleware(req: NextRequest) {
// const res = NextResponse.next();
// const supabase = createMiddlewareClient({ req, res });
// const { data } = await supabase.auth.getSession();
// const { pathname } = req.nextUrl;
// // const { pathname, searchParams } = req.nextUrl;

// if (pathname.startsWith("/system") && !data.session) {
//   return NextResponse.redirect(new URL("/login", req.url));
// }

// if (pathname === "/system" && data.session) {
//   return NextResponse.redirect(new URL("/system/prijmout", req.url));
// }

// if (pathname === "/login" && data.session) {
//   return NextResponse.redirect(new URL("/system/prijmout", req.url));
// }

// if (pathname === "/auth/callback" && searchParams.get("code")) {
//   return NextResponse.redirect(
//     new URL(`/login?code=${searchParams.get("code")}`, req.url),
//   );
// }

//   return res;
// }

// export const config = {
//   matcher: [
//     "/system/:path*",
//     "/login/:path*",
//     "/auth/:path*",
//     "/internal/:path*",
//   ],
// };

// import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
// import { NextResponse } from "next/server";

// import type { NextRequest } from "next/server";

// eslint-disable-next-line import/prefer-default-export
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession();
  console.log(await supabase.auth.getSession());

  const { pathname } = req.nextUrl;
  const { data } = await supabase.auth.getSession();

  if (pathname.startsWith("/internal") && !data.session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (pathname === "/internal" && data.session) {
    return NextResponse.redirect(new URL("/internal/scanner", req.url));
  }

  return res;
}
