"use server";

import createClientServer from "@/utils/supabase/server";

export default async function getBatchBoxes(batchId: number) {
  const supabase = createClientServer();
  const { data: boxes, error } = await supabase
    .from("boxes")
    .select("alias")
    .eq("batch_id", batchId)
    .order("box_id", { ascending: true });

  if (error) {
    throw error;
  }
  return boxes;
}
