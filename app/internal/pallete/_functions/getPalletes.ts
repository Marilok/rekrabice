"use server";

import createClientServer from "@/utils/supabase/server";

export default async function getPalletes() {
  const supabase = createClientServer();

  const { data, error } = await supabase
    .from("palletes")
    .select("pallete_id, status(status_id, description), count")
    .order("pallete_id", { ascending: true });

  if (error) {
    throw error;
  }

  return data;
}
