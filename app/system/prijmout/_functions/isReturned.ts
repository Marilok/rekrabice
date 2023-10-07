"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "types/supabase";

export default async function isReturned(activeLoopId: number) {
  const supabase = createServerActionClient<Database>({ cookies });

  const { data: loop, error } = await supabase
    .from("loops")
    .select("return_location_id")
    .eq("loop_id", activeLoopId)
    .single();

  if (error) {
    throw error;
  }

  return Boolean(loop.return_location_id !== null);
}
