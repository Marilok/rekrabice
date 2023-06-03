import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const {
    data: { session },
  } = await supabase.auth.getSession()
console.log((await supabase.auth.getSession()).data)

  if (session) {
    if (req.nextUrl.pathname.match('/system')) {
      return NextResponse.rewrite(new URL('/system/prijmout', req.url));
    }
    return res
  }

  if (req.nextUrl.pathname === "/system/login") {
    return res
  }

  return NextResponse.redirect(new URL('/system/login', req.url))
}

export const config = {
  matcher: "/system/:path*",
}