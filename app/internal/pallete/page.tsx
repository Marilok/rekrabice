"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import PalletesTable from "./_components/PalletesTable";
import loadPalletes from "./_functions/loadPalletes";

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });

  const palletes = await loadPalletes(supabase);

  console.log(palletes);

  return <PalletesTable palletes={palletes} />;
}
