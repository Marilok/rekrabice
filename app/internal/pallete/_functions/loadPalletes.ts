export default async function loadPalletes(supabase: any) {
  const { data, error } = await supabase
    .from("palletes")
    .select("pallete_id, status(status_id, description), count")
    .order("pallete_id", { ascending: true });

  if (error) {
    throw error;
  }

  return data;
}
