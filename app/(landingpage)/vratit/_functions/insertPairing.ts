"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "types/supabase";

export default async function insertPairing(
  loopId: number,
  email: string,
  bankAccountPrefix: string,
  bankAccountNumber: string,
  bankCode: string,
) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data, error } = await supabase.from("loops_pairings").insert([
    {
      loop_id: loopId,
      email,
      bank_account_prefix: bankAccountPrefix,
      bank_account_number: bankAccountNumber,
      bank_code: bankCode,
    },
  ]);

  if (error) {
    throw error;
  }

  return data;
}
