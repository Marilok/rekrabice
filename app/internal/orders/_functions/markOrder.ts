"use server";

import createClientServer from "@/utils/supabase/server";

export default async function markOrder(orderId: number, status: number) {
  const supabase = createClientServer();

  const { error } = await supabase
    .from("retailers_orders")
    .update({ status_id: status })
    .eq("order_id", orderId);

  if (error) {
    throw error;
  }
}
