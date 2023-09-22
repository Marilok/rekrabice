"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function createLoopUpdate(
  loopId: number,
  updateType: number,
) {
  const supabase = createServerActionClient({ cookies });

  const { error } = await supabase.from("loops_updates").insert([
    {
      loop_id: loopId,
      update_type: updateType,
    },
  ]);

  if (error) {
    throw error;
  }
}
