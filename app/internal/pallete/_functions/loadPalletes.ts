"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function loadPalletes() {
  const supabase = createServerActionClient({ cookies });

  const { data, error } = await supabase
    .from("palletes")
    .select("pallete_id, status(status_id, description), count")
    .order("pallete_id", { ascending: true });

  if (error) {
    throw error;
  }

  return data;
}
