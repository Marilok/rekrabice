import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    console.log(session)
    return res
  }

  if (req.nextUrl.pathname === "/obsluha/login") {
    return res
  }
  // if (req.nextUrl.pathname.match('/dashboard')) {
  //   return NextResponse.rewrite(new URL('/dashboard/prijmout', req.url));
  // }

  return NextResponse.redirect(new URL('/obsluha/login', req.url))
}

export const config = {
  matcher: "/obsluha/:path*",
}