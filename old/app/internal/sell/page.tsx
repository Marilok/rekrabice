import UI from "./_components/ui";
import getBoxMetadataFromPallete from "./_functions/getBoxMetadataFromPallete";
import getPalletes from "./_functions/getPalletes";
import getRetailers from "./_functions/getRetailers";

export const dynamic = "force-dynamic";

export default async function Page() {
  const palletes = await getPalletes();

  const palletesWithMetadata = await palletes.map(async (item: any) => {
    const {
      // @ts-expect-error does not exist on type, but it does in db
      size_id: { width, depth, height },
      // @ts-expect-error does not exist on type, but it does in db
      design_id: { color },
      // @ts-expect-error does not exist on type, but it does in db
      price_id: { price },
    } = await getBoxMetadataFromPallete(item.pallete_id);
    return {
      palleteId: item.pallete_id,
      dimensions: `${width} x ${depth} x ${height}`,
      color,
      count: item.count,
      price,
      totalPrice: price * item.count,
    };
  });

  const retailers = await getRetailers();

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
