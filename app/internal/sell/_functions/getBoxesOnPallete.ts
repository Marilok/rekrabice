"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "types/supabase";

export default async function getBoxesOnPallete(palleteIdProp: number) {
  const supabase = createServerActionClient<Database>({ cookies });

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
