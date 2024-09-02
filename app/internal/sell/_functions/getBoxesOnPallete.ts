"use server";

import createClientServer from "@/utils/supabase/server";

export default async function getBoxesOnPallete(palleteIdProp: number) {
  const supabase = createClientServer();

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
