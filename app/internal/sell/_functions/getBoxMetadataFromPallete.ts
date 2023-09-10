import getBoxesOnPallete from "./getBoxesOnPallete";

export default async function getBoxMetadataFromPallete(
  palleteId: any,
  supabase: any,
) {
  const boxes = await getBoxesOnPallete(palleteId, supabase);

  const { data, error } = await supabase
    .from("boxes")
    .select("design_id(color), size_id(width, height, depth), price_id(price)")
    .eq("box_id", boxes[0])
    .single();

  if (error) {
    throw error;
  }

  return data;
}
