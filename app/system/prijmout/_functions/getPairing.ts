"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function getPairing(activeLoopId: string) {
  const supabase = createServerActionClient({ cookies });

  const { data: pairing, error } = await supabase
    .from("loops_pairings")
    .select(
      "loop_id, pairing_id, bank_account_number, bank_code, bank_account_prefix, email",
    )
    .eq("loop_id", activeLoopId)
    .order("pairing_id", { ascending: false });

  if (error) {
    throw error;
  }

  if (pairing) {
    return pairing[0];
  }
  return null;
}
