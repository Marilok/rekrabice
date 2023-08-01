export default async function updateActiveLoopId(
  boxId: number,
  loopId: number,
  supabase: any,
) {
  const { error } = await supabase
    .from("boxes")
    .update({
      active_loop_id: loopId,
    })
    .eq("box_id", boxId);

  if (error) {
    throw error;
  }
}
