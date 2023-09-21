"use server";

import PalletesTable from "./_components/PalletesTable";
import loadPalletes from "./_functions/loadPalletes";

export default async function Page() {
  const palletes = await loadPalletes();

  // @ts-ignore
  return <PalletesTable palletes={palletes} />;
}
