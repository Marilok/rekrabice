"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "types/supabase";

export default async function getBoxActiveLoopId(boxId: number) {
  const supabase = createServerActionClient<Database>({ cookies });

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
