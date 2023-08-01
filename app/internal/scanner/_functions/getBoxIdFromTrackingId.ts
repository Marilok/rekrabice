export default async function getBoxIdFromTrackingId(
  boxTrackingName: string,
  supabase: any,
) {
  const { data, error } = await supabase
    .from("boxes")
    .select("box_id")
    .eq("tracking_id", boxTrackingName)
    .single();

  if (error) {
    throw error;
  }

  return data.box_id;
}
