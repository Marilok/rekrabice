"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "types/supabase";

export default async function markPallete(palleteId: number, status: number) {
  const supabase = createServerActionClient<Database>({ cookies });

  const { error } = await supabase
    .from("palletes")
    .update({ status })
    .eq("pallete_id", palleteId);

  if (error) {
    throw error;
  }
}
