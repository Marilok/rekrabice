"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function createNewLoop(boxId: string) {
  const supabase = createServerActionClient({ cookies });

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
