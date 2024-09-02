"use server";

import createClientServer from "@/utils/supabase/server";

export default async function updatePalleteStatus(
  palleteId: number,
  statusId: number,
) {
  const supabase = createClientServer();

  const { error } = await supabase
    .from("palletes")
    .update({ status: statusId })
    .eq("pallete_id", palleteId);

  if (error) {
    throw error;
  }
}
