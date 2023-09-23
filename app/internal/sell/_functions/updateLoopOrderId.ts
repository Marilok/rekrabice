"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "types/supabase";

export default async function updateLoopOrderId(
  loopId: number,
  orderId: number,
) {
  const supabase = createServerActionClient<Database>({ cookies });

  const { error } = await supabase
    .from("loops")
    .update({
      order_id: orderId,
    })
    .eq("loop_id", loopId);

  if (error) {
    throw error;
  }
}
