"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "types/supabase";

export default async function insertWord(word: string) {
  const supabase = createServerActionClient<Database>({ cookies });

  // see https://app.clickup.com/14356223/v/dc/dp3qz-2061 for documentation and explanation
  function getMaxFrequency(length: number) {
    if (length === 3) {
      return 300;
    }
    if (length === 4) {
      return 20001;
    }
    if (length === 5) {
      return 2000;
    }
    if (length === 6) {
      return 200;
    }
    if (length === 7) {
      return 20;
    }
    if (length === 8) {
      return 20;
    }
    return null;
  }

  const { error } = await supabase.from("words").insert({
    word,
    length: word.length,
    max_frequency: getMaxFrequency(word.length),
  });

  if (error) {
    throw error;
  }
}
