"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import getBoxFromTrackingName from "../../../../utils/getBoxFromTrackingName";

export default async function loadLoopRetailer(trackingName: string) {
  const supabase = createServerComponentClient({ cookies });

  const boxId = await getBoxFromTrackingName(trackingName);

  const { data, error } = await supabase
    .from("loops")
    .select("order_id(retailer_id(brand_name))")
    .eq("boxId", boxId);

  if (error) {
    throw error;
  }

  return data;
}
