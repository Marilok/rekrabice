"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

/* eslint-disable camelcase */
export default async function createPorReturn(
  location_id: string,
  loop_id: string,
  cash_paid: number | null,
) {
  const supabase = createServerActionClient({ cookies });

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
