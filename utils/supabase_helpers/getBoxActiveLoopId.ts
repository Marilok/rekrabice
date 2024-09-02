"use server";

import createClientServer from "@/utils/supabase/server";

export default async function getBoxActiveLoopId(boxId: number) {
  const supabase = createClientServer();

  const { data, error } = await supabase
    .from("boxes")
    .select("active_loop_id")
    .eq("box_id", boxId)
    .single();

  if (error) {
    throw error;
  }
  return data.active_loop_id;
}
