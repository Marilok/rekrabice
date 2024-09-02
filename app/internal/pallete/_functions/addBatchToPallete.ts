"use server";

import createClientServer from "@/utils/supabase/server";

export default async function addBatchToPallete(
  palleteId: number,
  batchId: number,
) {
  const supabase = createClientServer();

  const { error } = await supabase.rpc("update_palletes_boxes", {
    selected_pallete_id: palleteId,
    selected_batch_id: batchId,
  });

  if (error) {
    throw error;
  }
}
