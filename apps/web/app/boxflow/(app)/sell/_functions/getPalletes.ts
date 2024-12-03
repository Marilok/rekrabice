"use server";

import createClientServer from "@/utils/supabase/server";

export default async function getPalletes() {
  const supabase = createClientServer();

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
