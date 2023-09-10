"use server";

/* eslint-disable camelcase */

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import UI from "./_components/ui";
import getBoxMetadataFromPallete from "./_functions/getBoxMetadataFromPallete";
import getPalletes from "./_functions/getPalletes";
import getRetailers from "./_functions/getRetailers";

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });
  const palletes = await getPalletes(supabase);

  const palletesWithMetadata = await palletes.map(async (item: any) => {
    const {
      size_id: { width, depth, height },
      design_id: { color },
      price_id: { price },
    } = await getBoxMetadataFromPallete(item.pallete_id, supabase);
    return {
      palleteId: item.pallete_id,
      dimensions: `${width} x ${depth} x ${height}`,
      color,
      count: item.count,
      price,
      totalPrice: price * item.count,
    };
  });

  const retailers = await getRetailers(supabase);

  // This transformation is needed because of mandatory value prop in Select component of Mantine
  const formattedRetailers = retailers.map((item: any) => ({
    retailerId: item.retailer_id,
    brandName: item.brand_name,
    favicon: item.favicon_url,
  }));

  return (
    <UI
      avaiablePalletes={await Promise.all(palletesWithMetadata)}
      retailers={formattedRetailers}
    />
  );
}
