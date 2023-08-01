export default async function getBoxActiveLoopId(boxId: number, supabase: any) {
  const { data, error } = await supabase
    .from("boxes")
    .select("active_loop_id")
    .eq("box_id", boxId)
    .single();

  if (error) {
    throw error;
  }
  return data.active_loop_id;
}
