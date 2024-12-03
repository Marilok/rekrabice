"use server";

import createClientServer from "@/utils/supabase/server";

export default async function getBoxesFromBatch(batchId: number) {
  const supabase = createClientServer();

  const { data, error } = await supabase
    .from("boxes")
    .select("box_id")
    .eq("batch_id", batchId);

  if (error) {
    throw error;
  }

  return data;
}
