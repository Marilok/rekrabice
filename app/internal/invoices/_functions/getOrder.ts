"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "types/supabase";

export default async function gerOrder(orderId: number) {
  const supabase = createServerActionClient<Database>({ cookies });
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
