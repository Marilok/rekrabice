"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "types/supabase";

export default async function updatePorId(
  activeLoopId: string | number,
  locationId: number,
) {
  const supabase = createServerActionClient<Database>({ cookies });

  const { error } = await supabase
    .from("loops")
    .update({ return_location_id: locationId })
    .eq("loop_id", activeLoopId)
    .select();

  if (error) {
    throw error;
  }
}
