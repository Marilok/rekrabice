"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function getPalletes() {
  const supabase = createServerActionClient({ cookies });

  const { data, error } = await supabase
    .from("palletes")
    .select("pallete_id, count, boxes")
    .eq("status", 2)
    .order("pallete_id", { ascending: true });

  if (error) {
    throw error;
  }

  return data;
}
