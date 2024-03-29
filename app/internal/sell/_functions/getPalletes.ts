"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "types/supabase";

export default async function getPalletes() {
  const supabase = createServerActionClient<Database>({ cookies });

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
