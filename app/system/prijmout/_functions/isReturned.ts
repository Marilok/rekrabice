"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function isReturned(activeLoopId: string) {
  const supabase = createServerActionClient({ cookies });

  const { data: loop, error } = await supabase
    .from("loops")
    .select("return_location_id")
    .eq("loop_id", activeLoopId)
    .single();

  if (error) {
    throw error;
  }

  if (loop.return_location_id !== null) {
    return true;
  }
  return false;
}