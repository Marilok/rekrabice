"use server";

import createClientServer from "@/utils/supabase/server";

export default async function createLoopUpdate(
  loopId: number,
  updateType: number,
) {
  const supabase = createClientServer();

  const { error } = await supabase.from("loops_updates").insert([
    {
      loop_id: loopId,
      update_type: updateType,
    },
  ]);

  if (error) {
    throw error;
  }
}
