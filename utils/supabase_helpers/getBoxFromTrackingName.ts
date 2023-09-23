"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "types/supabase";

export default async function getBoxFromTrackingName(boxTrackingName: string) {
  const supabase = createServerActionClient<Database>({ cookies });

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
