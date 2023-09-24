"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "types/supabase";

export default async function insertWord(word: string) {
  const supabase = createServerActionClient<Database>({ cookies });

  const { error } = await supabase.from("words").insert({
    word,
  });

  if (error) {
    throw error;
  }
}
