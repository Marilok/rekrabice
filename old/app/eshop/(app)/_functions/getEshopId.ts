"use server";

import createClientServer from "@/utils/supabase/server";

export default async function getEshopId() {
  const supabase = createClientServer();

  const { data: eshop, error } = await supabase
    .from("eshops_users")
    .select("eshop_id")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return eshop.eshop_id;
}
