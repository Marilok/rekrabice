import createClientServer from "@/utils/supabase/server";
import {
  Flex,
  ScrollArea,
  Table,
  TableCaption,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
} from "@mantine/core";
import { redirect } from "next/navigation";
import getEshopId from "../_functions/getEshopId";
import MonthPick from "./_components/month";

export default async function Page({ searchParams }: { searchParams: any }) {
  if (!searchParams.month || !searchParams.year) {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const newSearchParams = new URLSearchParams();
    newSearchParams.set("month", (currentMonth + 1).toString());
    newSearchParams.set("year", currentYear.toString());

    redirect(`?${newSearchParams.toString()}`);
  }
  const supabase = createClientServer();

  const eshopId = await getEshopId();

  const pickedMonth = searchParams.month;
  const pickedYear = searchParams.year;

  const startOfMonth = new Date(
    parseInt(pickedYear, 10),
    parseInt(pickedMonth, 10) - 1,
    1,
  );

  const endOfMonth = new Date(
    parseInt(pickedYear, 10),
    parseInt(pickedMonth, 10),
    0,
  );

  const { data: eshops_sent, error } = await supabase
    .from("eshops_sent")
    .select("id, box_id(alias), shipped_at")
    .eq("eshop_id", eshopId)
    .order("shipped_at", { ascending: false })
    .gte("shipped_at", startOfMonth.toISOString())
    .lte("shipped_at", endOfMonth.toISOString());

  if (error) {
    console.log(error);
  }

  const transformTimestamp = (timestamp: any) => {
    const date = new Date(timestamp);
    return date.toLocaleString("cs-CZ", { timeZone: "UTC" });
  };

  const rows = eshops_sent?.map((element) => (
    // @ts-expect-error
    <TableTr key={element.box_id.id}>
      <TableTd>{transformTimestamp(element.shipped_at)}</TableTd>
      {/* @ts-expect-error} */}
      <TableTd>{element.box_id?.alias}</TableTd>
    </TableTr>
  ));

  return (
    <Flex dir="row" gap="200">
      <MonthPick />
      <ScrollArea h={400} type="auto" styles={{ scrollbar: { top: 40 } }}>
        <Table maw={400} stickyHeader>
          <TableThead>
            <TableTr>
              <TableTh>Datum odeslání</TableTh>
              <TableTh>Jméno ReKrabice</TableTh>
            </TableTr>
          </TableThead>
          <TableTbody>{rows}</TableTbody>
          <TableCaption>
            Celkem {rows?.length ?? 0} ReKrabic použito za tento měsíc
          </TableCaption>
        </Table>
      </ScrollArea>
    </Flex>
  );
}
