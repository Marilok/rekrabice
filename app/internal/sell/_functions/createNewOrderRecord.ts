export default async function createNewOrderRecord(
  retailerIdProp: number,
  invoiceNumber: string,
  supabase: any,
) {
  const { data, error } = await supabase
    .from("retailers_orders")
    .insert({
      retailer_id: retailerIdProp,
      invoice_number: invoiceNumber,
    })
    .select("order_id")
    .single();
  if (error) {
    throw error;
  }
  return data.order_id;
}
