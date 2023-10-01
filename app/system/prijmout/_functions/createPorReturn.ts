"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "types/supabase";

export default async function createPorReturn(
  location_id: number,
  loop_id: number,
  cash_paid: number | null,
) {
  const supabase = createServerActionClient<Database>({ cookies });

  const { data, error } = await supabase
    .from("por_returns")
    .insert([
      {
        loop_id,
        location_id,
        cash_paid: cash_paid || null,
      },
    ])
    .select();

  if (error) {
    throw error;
  }
  return data;
}
