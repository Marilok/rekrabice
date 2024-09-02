"use server";

import createClientServer from "@/utils/supabase/server";

export default async function assignLoopToBox(boxId: number, loopId: number) {
  const supabase = createClientServer();

  const { error } = await supabase
    .from("boxes")
    .update({
      active_loop_id: loopId,
    })
    .eq("box_id", boxId);

  if (error) {
    throw error;
  }
}
