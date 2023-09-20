"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function getRetailers() {
  const supabase = createServerActionClient({ cookies });

  const { data, error } = await supabase
    .from("retailers")
    .select("retailer_id, brand_name, favicon_url");

  if (error) {
    throw error;
  }

  return data;
}
