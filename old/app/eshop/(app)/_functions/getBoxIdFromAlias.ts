"use server";

import { Box } from "@/types/index";
import createClientServer from "@/utils/supabase/server";

export default async function getBoxIdFromAlias(alias: Box["alias"]) {
  const supabase = await createClientServer();
  const { data, error } = await supabase
    .from("boxes")
    .select("box_id")
    .eq("alias", alias)
    .single();

  if (error) {
    // @ts-expect-error
    if (error.code === "PGRST116" || !data?.box_id) {
      throw new Error(
        "Krabice neexistuje. Zkontrolujte zda jste zadali správné jméno ReKrabice.",
      );
    }

    // @ts-expect-error
    throw new Error(error.message);
  }
  return data.box_id;
}
