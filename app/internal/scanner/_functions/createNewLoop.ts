"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "types/supabase";

export default async function createNewLoop(boxId: number) {
  const supabase = createServerActionClient<Database>({ cookies });

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
