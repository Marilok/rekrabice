// @ts-nocheck

import AddBatchForm from "./_components/AddBatchForm";
import AddButton from "./_components/AddButton";
import PalletesTable from "./_components/PalletesTable";
import getPalletes from "./_functions/getPalletes";

export const dynamic = "force-dynamic";

export default async function Page() {
  const palletes = await getPalletes();

  return (
    <>
      <PalletesTable palletes={palletes} />
      <AddButton palletes={palletes} />
      <AddBatchForm />
    </>
  );
}
