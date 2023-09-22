"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function getLocationId() {
  const supabase = createServerActionClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("por_employees")
    .select("location_id")
    .eq("id", user!.id)
    .single();

  if (error) {
    throw error;
  }
  return data.location_id;
}
