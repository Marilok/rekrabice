"use server";

import createClientServer from "@/utils/supabase/server";

export default async function getRetailers() {
  const supabase = createClientServer();

  const { data, error } = await supabase
    .from("retailers")
    .select("retailer_id, brand_name, favicon_url");

  if (error) {
    throw error;
  }

  return data;
}
