import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import React from "react";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}

const supabase = createPagesBrowserClient();
supabase.auth.onAuthStateChange((event, session) => {
  console.log(event, session);
  // if (event === 'SIGNED_OUT' || event === 'USER_DELETED') {
  //   // delete cookies on sign out
  //   const expires = new Date(0).toUTCString()
  //   document.cookie = `my-access-token=; path=/; expires=${expires}; SameSite=Lax; secure`
  //   document.cookie = `my-refresh-token=; path=/; expires=${expires}; SameSite=Lax; secure`
  // } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
  //   const maxAge = 100 * 365 * 24 * 60 * 60 // 100 years, never expires
  //   document.cookie = `my-access-token=${session.access_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
  //   document.cookie = `my-refresh-token=${session.refresh_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
  // }
});
