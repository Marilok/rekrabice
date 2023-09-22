"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function markPallete(palleteId: number, status: number) {
  const supabase = createServerActionClient({ cookies });

  const { error } = await supabase
    .from("palletes")
    .update({ status })
    .eq("pallete_id", palleteId);

  if (error) {
    throw error;
  }
}
