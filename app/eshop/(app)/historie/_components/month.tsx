"use client";

import { DateValue, MonthPickerInput } from "@mantine/dates";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import "dayjs/locale/cs";

export default function MonthPick() {
  const searchParams = useSearchParams();
  const month = searchParams.get("month");
  const year = searchParams.get("year");
  const router = useRouter();

  const [value, setValue] = useState<DateValue | null>(
    month && year
      ? new Date(parseInt(year, 10), parseInt(month, 10) - 1)
      : null,
  );

  const onChange = (dateValue: DateValue) => {
    setValue(dateValue);
    const newSearchParams = new URLSearchParams();
    newSearchParams.set("month", (dateValue!.getMonth() + 1).toString());
    newSearchParams.set("year", dateValue!.getFullYear().toString());
    router.replace(`?${newSearchParams.toString()}`);
    router.refresh();
  };

  return (
    <MonthPickerInput
      label="Vybrat měsíc"
      value={value}
      onChange={onChange}
      locale="cs"
      w={200}
    />
  );
}
