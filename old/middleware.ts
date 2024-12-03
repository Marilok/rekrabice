import { type NextRequest } from "next/server";
import updateSession from "./utils/supabase/middleware";

// eslint-disable-next-line import/prefer-default-export
export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",

    "/login/:path*",
    "/auth/:path*",
    "/internal/:path*",
    "/eshop/:path*",
  ],
};
