"use server";

import createClientServer from "@/utils/supabase/server";

export default async function addPallete(lastPalleteId: number) {
  const supabase = createClientServer();

  const { error } = await supabase
    .from("palletes")
    .insert([{ pallete_id: lastPalleteId + 1, status: 1 }]);

  if (error) {
    throw error;
  }
}
