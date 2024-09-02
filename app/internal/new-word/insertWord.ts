"use server";

import createClientServer from "@/utils/supabase/server";

export default async function insertWord(word: string) {
  const supabase = createClientServer();

  const { error } = await supabase.from("words").insert({
    word,
  });

  if (error) {
    throw error;
  }
}
