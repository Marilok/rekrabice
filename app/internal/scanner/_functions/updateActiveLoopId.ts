"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "types/supabase";

export default async function updateActiveLoopId(
  boxId: number,
  loopId: number,
) {
  const supabase = createServerActionClient<Database>({ cookies });

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
