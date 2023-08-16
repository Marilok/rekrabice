export default async function markOrder(
  orderId: number,
  status: number,
  supabase: any,
) {
  const { error } = await supabase
    .from("retailers_orders")
    .update({ status_id: status })
    .eq("order_id", orderId);

  if (error) {
    throw error;
  }
}
