"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "types/supabase";

export default async function getRetailers() {
  const supabase = createServerActionClient<Database>({ cookies });

  const { data, error } = await supabase
    .from("retailers")
    .select("retailer_id, brand_name, favicon_url");

  if (error) {
    throw error;
  }

  return data;
}
