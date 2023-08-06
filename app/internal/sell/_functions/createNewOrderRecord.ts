export default async function createNewOrderRecord(
  retailerId: number,
  invoiceNumber: string,
  totalPrice: number,
  products: any,
  supabase: any,
) {
  const { data, error } = await supabase
    .from("retailers_orders")
    .insert({
      retailer_id: retailerId,
      invoice_number: invoiceNumber,
      products,
      total_price: totalPrice,
    })
    .select("order_id")
    .single();
  if (error) {
    throw error;
  }
  return data.order_id;
}
