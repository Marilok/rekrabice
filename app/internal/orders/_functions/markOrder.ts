"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "types/supabase";

export default async function markOrder(orderId: number, status: number) {
  const supabase = createServerActionClient<Database>({ cookies });

  const { error } = await supabase
    .from("retailers_orders")
    .update({ status_id: status })
    .eq("order_id", orderId);

  if (error) {
    throw error;
  }
}
