"use server";

import createClientServer from "@/utils/supabase/server";

export default async function login(email: string) {
  const supabase = createClientServer();

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: false,
      emailRedirectTo: `${process.env.NEXT_PUBLIC_URL}/auth/magiclink/eshop`,
    },
  });

  if (error) {
    console.log(error);
  }
}
