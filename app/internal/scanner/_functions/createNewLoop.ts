export default async function createNewLoop(boxId: string, supabase: any) {
  const { data, error } = await supabase
    .from("loops")
    .insert([{ box_id: boxId }])
    .select("loop_id")
    .single();

  if (error) {
    throw error;
  }

  return data.loop_id;
}
