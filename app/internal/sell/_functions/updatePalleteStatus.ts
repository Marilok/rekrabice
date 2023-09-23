"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "types/supabase";

export default async function updatePalleteStatus(
  palleteId: number,
  statusId: number,
) {
  const supabase = createServerActionClient<Database>({ cookies });

  const { error } = await supabase
    .from("palletes")
    .update({ status: statusId })
    .eq("pallete_id", palleteId);

  if (error) {
    throw error;
  }
}
