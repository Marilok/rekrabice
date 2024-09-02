"use server";

import createClientServer from "@/utils/supabase/server";

import { Box } from "@/types/index";

export default async function getBoxFromTrackingName(
  boxTrackingName: Box["tracking_id"],
) {
  const supabase = createClientServer();

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
