"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "types/supabase";

export default async function createLoopUpdate(
  loopId: number,
  updateType: number,
) {
  const supabase = createServerActionClient<Database>({ cookies });

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
