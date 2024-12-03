"use server";

import createClientServer from "@/utils/supabase/server";

export default async function createNewOrderRecord(
  retailerId: number,
  invoiceNumber: number,
  totalPrice: number,
  products: any,
) {
  const supabase = createClientServer();

  const { data, error } = await supabase
    .from("retailers_orders")
    .insert({
      retailer_id: retailerId,
      invoice_number: invoiceNumber,
      products,
      total_price: totalPrice,
      status_id: 1,
    })
    .select("order_id")
    .single();
  if (error) {
    throw error;
  }
  return data.order_id;
}
