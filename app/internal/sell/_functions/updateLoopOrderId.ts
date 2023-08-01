export default async function updateLoopOrderId(
  loopId: number,
  orderId: number,
  supabase: any,
) {
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
