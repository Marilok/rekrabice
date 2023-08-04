export default async function getRetailers(supabase: any) {
  const { data, error } = await supabase
    .from("retailers")
    .select("retailer_id, brand_name, favicon_url");

  if (error) {
    throw error;
  }

  return data;
}
