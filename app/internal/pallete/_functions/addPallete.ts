"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "types/supabase";

export default async function addPallete(lastPalleteId: number) {
  const supabase = createServerActionClient<Database>({ cookies });

  const { error } = await supabase
    .from("palletes")
    .insert([{ pallete_id: lastPalleteId + 1, status: 1 }]);

  if (error) {
    throw error;
  }
}
