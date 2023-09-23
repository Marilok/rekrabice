"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "types/supabase";

export default async function getBatchBoxes(batchId: number) {
  const supabase = createServerActionClient<Database>({ cookies });
  const { data: boxes, error } = await supabase
    .from("boxes")
    .select("tracking_id")
    .eq("batch_id", batchId);

  if (error) {
    throw error;
  }
  return boxes;
}
