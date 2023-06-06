"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function signIn(emailProp: string) {
  const supabase = createServerActionClient({ cookies });

  const { data } = await supabase.auth.signInWithOtp({
    email: emailProp,
    options: {
      emailRedirectTo: "https://rekrabice.cz/auth/callback",
    },
  });
  console.log(data);
  revalidatePath("/system");
}
