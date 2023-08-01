export default async function getBoxesOnPallete(
  palleteIdProp: number,
  supabase: any,
) {
  const { data, error } = await supabase
    .from("palletes")
    .select("boxes")
    .eq("pallete_id", palleteIdProp)
    .single();

  if (error) {
    throw error;
  }

  return data.boxes;
}
