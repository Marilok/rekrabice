"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "types/supabase";

export default async function getOrders() {
  const supabase = createServerActionClient<Database>({ cookies });

  const { data, error } = await supabase
    .from("retailers_orders")
    .select(
      "order_id, retailer_id(brand_name, favicon_url), status_id(description), invoice_number, issue_date, total_price)",
    )
    .order("invoice_number", { ascending: false });

  if (error) {
    throw error;
  }

  return data;
}
