"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "types/supabase";

export default async function createNewOrderRecord(
  retailerId: number,
  invoiceNumber: number,
  totalPrice: number,
  products: any,
) {
  const supabase = createServerActionClient<Database>({ cookies });

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
