export default async function getBoxFromTrackingName(
  boxTrackingName: string,
  supabase: any,
) {
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
