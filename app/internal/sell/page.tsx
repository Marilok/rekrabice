"use server";

/* eslint-disable camelcase */

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import getBoxMetadataFromPallete from "./_functions/getBoxMetadataFromPallete";
import getPalletes from "./_functions/getPalletes";
// import getRetailers from "./_functions/getRetailers";
import UI from "./ui";

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });
  const palletes = await getPalletes(supabase);

  // This transformation is needed because of mandatory value prop in Select component of Mantine
  const palletesWithMetadata = await palletes.map(async (item: any) => {
    const {
      size_id: { width, depth, height },
      design_id: { color },
    } = await getBoxMetadataFromPallete(item.pallete_id, supabase);
    return {
      value: item.pallete_id.toString(), // Convert value to string, because it is transformed to lowercase and filtered
      count: item.count,
      dimensions: `${width} x ${depth} x ${height}`,
      color,
      price: 10, // TODO: load price from database
    };
  });

  // const retailers = await getRetailers(supabase);

  // This transformation is needed because of mandatory value prop in Select component of Mantine
  // const formattedRetailers = retailers.map((item: any) => ({
  //   value: item.retailer_id,
  //   label: item.brand_name,
  //   favicon: item.favicon_url,
  // }));

  return (
    <UI
      allPalletes={await Promise.all(palletesWithMetadata)}
      // retailers={formattedRetailers}
    />
  );
}
