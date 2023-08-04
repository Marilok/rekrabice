/* eslint-disable camelcase */

"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import getPalletes from "./_functions/getPalletes";
import getRetailers from "./_functions/getRetailers";
import UI from "./ui";

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });
  const palletes = await getPalletes(supabase);

  // This transformation is needed because of mandatory value prop in Select component of Mantine
  const formattedPalletes = palletes.map((item: any) => ({
    value: item.pallete_id.toString(), // Convert value to string, because it is transformed to lowercase and filtered
    count: item.count,
    dimensions: "1200 x 800 x 150",
    color: "SKYDIVE BLUE",
  }));

  const retailers = await getRetailers(supabase);

  // This transformation is needed because of mandatory value prop in Select component of Mantine
  const formattedRetailers = retailers.map((item: any) => ({
    value: item.retailer_id,
    label: item.brand_name,
    favicon: item.favicon_url,
  }));

  // TODO: Make this realtime, so if 2 orders are made at the same time, the second one will be rejected

  return <UI palletes={formattedPalletes} retailers={formattedRetailers} />;
}
