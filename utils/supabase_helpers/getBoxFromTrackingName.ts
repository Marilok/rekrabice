"use server";

import createClientServer from "@/utils/supabase/server";

import { Box } from "@/types/index";

export default async function getBoxFromTrackingName(
  boxTrackingName: Box["alias"],
) {
  const supabase = createClientServer();

  const { data, error } = await supabase
    .from("boxes")
    .select("box_id, active_loop_id")
    .eq("alias", boxTrackingName)
    .single();

  if (error) {
    throw error;
  }

  return data;
}
