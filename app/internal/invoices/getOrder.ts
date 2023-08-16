export default async function gerOrder(orderId: number, supabase: any) {
  const { data, error } = await supabase
    .from("retailers_orders")
    .select(
      "retailer_id(legal_name, address, zip, city, ico, dic, favicon_url), created_at, total_price, products, issue_date, maturity_date, invoice_number, taxable_date, status_id",
    )
    .eq("invoice_number", orderId)
    .single();

  if (error) {
    throw error;
  }

  return data;
}
