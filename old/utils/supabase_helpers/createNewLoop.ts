"use server";

import createClientServer from "@/utils/supabase/server";

export default async function createNewLoop(boxId: number) {
  const supabase = createClientServer();

  const { data, error } = await supabase
    .from("loops")
    .insert([{ box_id: boxId }])
    .select("loop_id")
    .single();

  if (error) {
    throw error;
  }

  return data.loop_id;
}
