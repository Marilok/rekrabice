"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "types/supabase";

export default async function addBatchToPallete(
  palleteId: number,
  batchId: number,
) {
  const supabase = createServerActionClient<Database>({ cookies });

  const { error } = await supabase.rpc("update_palletes_boxes", {
    selected_pallete_id: palleteId,
    selected_batch_id: batchId,
  });

  if (error) {
    throw error;
  }
}
