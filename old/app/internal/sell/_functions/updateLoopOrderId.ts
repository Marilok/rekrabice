"use server";

import createClientServer from "@/utils/supabase/server";

export default async function updateLoopOrderId(
  loopId: number,
  orderId: number,
) {
  const supabase = createClientServer();

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
