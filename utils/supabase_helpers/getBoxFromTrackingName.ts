"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function getBoxFromTrackingName(boxTrackingName: string) {
  const supabase = createServerActionClient({ cookies });

  const { data, error } = await supabase
    .from("boxes")
    .select("box_id, active_loop_id")
    .eq("tracking_id", boxTrackingName)
    .single();

  if (error) {
    throw error;
  }

  return data;
}
