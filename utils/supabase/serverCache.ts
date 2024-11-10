import { Database } from "@/types/supabase";
import { createServerClient } from "@supabase/ssr";
import { cookies, UnsafeUnwrappedCookies } from "next/headers";

// ! This is different fron server client, because it replacec the supabase fetch() function with the nextjs one
// To be used when needed to store cache

export const createFetch =
  (options: Pick<RequestInit, "next" | "cache">) =>
  (url: RequestInfo | URL, init?: RequestInit) =>
    fetch(url, {
      ...init,
      ...options,
    });

export default function createClientServerCache() {
  const cookieStore = cookies() as unknown as UnsafeUnwrappedCookies;

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        fetch: createFetch({
          next: {
            revalidate: 300, // in seconds
            tags: ["supabase"],
          },
        }),
      },
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
}
