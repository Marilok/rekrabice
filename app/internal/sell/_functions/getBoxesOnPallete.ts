"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function getBoxesOnPallete(palleteIdProp: number) {
  const supabase = createServerActionClient({ cookies });

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
