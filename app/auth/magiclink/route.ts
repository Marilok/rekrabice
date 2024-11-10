import createClientServer from "@/utils/supabase/server";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// eslint-disable-next-line import/prefer-default-export
export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = createClientServer();
    // @ts-expect-error
    await supabase.auth.exchangeCodeForSession(code);
  }

  // URL to redirect to after sign in process completes
  // return NextResponse.redirect(requestUrl.origin);
  return NextResponse.redirect(new URL("/eshop/odeslat", request.url));
}
