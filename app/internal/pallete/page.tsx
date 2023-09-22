import PalletesTable from "./_components/PalletesTable";
import loadPalletes from "./_functions/loadPalletes";

export const dynamic = "force-dynamic";

export default async function Page() {
  const palletes = await loadPalletes();

  // @ts-ignore
  return <PalletesTable palletes={palletes} />;
}
