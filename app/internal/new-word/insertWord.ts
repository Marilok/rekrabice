"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function insertWord(word: string) {
  const supabase = createServerActionClient({ cookies });

  const { error } = await supabase
    .from("words")
    .insert({ word, length: word.length });

  if (error) {
    throw error;
  }

  
}
