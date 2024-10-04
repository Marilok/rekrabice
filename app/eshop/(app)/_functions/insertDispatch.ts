"use server";

import { Box, Eshop } from "@/types/index";
import createClientServer from "@/utils/supabase/server";

export default async function insertDispatch(
  box_id: Box["box_id"],
  eshop_id: Eshop["eshop_id"],
) {
  const supabase = createClientServer();

  const { error } = await supabase.from("eshops_sent").insert([
    {
      eshop_id,
      box_id,
    },
  ]);

  if (error) {
    throw new Error(error.message);
  }
}
