"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "types/supabase";
import getBoxesOnPallete from "./getBoxesOnPallete";

export default async function getBoxMetadataFromPallete(palleteId: any) {
  const supabase = createServerActionClient<Database>({ cookies });

  const boxes = await getBoxesOnPallete(palleteId);

  const { data, error } = await supabase
    .from("boxes")
    .select("design_id(color), size_id(width, height, depth), price_id(price)")
    .eq("box_id", boxes![0])
    .single();

  if (error) {
    throw error;
  }

  return data;
}
