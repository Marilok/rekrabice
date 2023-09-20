"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function createNewOrderRecord(
  retailerId: number,
  invoiceNumber: string,
  totalPrice: number,
  products: any,
) {
  const supabase = createServerActionClient({ cookies });

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
