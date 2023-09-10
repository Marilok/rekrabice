export default async function markPallete(
  palleteId: number,
  status: number,
  supabase: any,
) {
  const { error } = await supabase
    .from("palletes")
    .update({ status })
    .eq("pallete_id", palleteId);

  if (error) {
    throw error;
  }
}
