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
import getEshopId from "../_functions/getEshopId";
import MonthPick from "./_components/month";

export default async function Page({ searchParams }: { searchParams: any }) {
  const supabase = createClientServer();

  const eshopId = await getEshopId();

  const pickedMonth = searchParams.month;
  const pickedYear = searchParams.year;

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const startOfMonth = new Date(
    Number(pickedYear) || currentYear,
    Number(pickedMonth) !== undefined && !Number.isNaN(Number(pickedMonth))
      ? Number(pickedMonth) - 1
      : currentMonth,
    1,
  );

  const endOfMonth = new Date(
    Number(pickedYear) || currentYear,
    Number(pickedMonth) !== undefined && !Number.isNaN(Number(pickedMonth))
      ? Number(pickedMonth)
      : currentMonth + 1,
    0,
  );

  const { data: eshops_sent, error } = await supabase
    .from("eshops_sent")
    .select("box_id(tracking_id), shipped_at")
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
    <TableTr key={element.box_id.tracking_id}>
      <TableTd>{transformTimestamp(element.shipped_at)}</TableTd>
      {/* @ts-expect-error} */}
      <TableTd>{element.box_id?.tracking_id}</TableTd>
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
