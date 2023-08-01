export default async function updatePalleteStatus(
  palleteId: number,
  statusId: number,
  supabase: any,
) {
  const { error } = await supabase
    .from("palletes")
    .update({ status: statusId })
    .eq("pallete_id", palleteId);

  if (error) {
    throw error;
  }
}
