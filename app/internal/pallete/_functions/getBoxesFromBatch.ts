"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "types/supabase";

export default async function getBoxesFromBatch(batchId: number) {
  const supabase = createServerActionClient<Database>({ cookies });

  const { data, error } = await supabase
    .from("boxes")
    .select("box_id")
    .eq("batch_id", batchId);

  if (error) {
    throw error;
  }

  return data;
}
