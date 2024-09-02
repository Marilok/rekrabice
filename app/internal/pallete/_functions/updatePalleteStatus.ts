"use server";

import createClientServer from "@/utils/supabase/server";

export default async function updatePalleteStatus(
  palleteId: number,
  status: number,
) {
  const supabase = createClientServer();

  const { error } = await supabase
    .from("palletes")
    .update({ status })
    .eq("pallete_id", palleteId);

  if (error) {
    throw error;
  }
}
