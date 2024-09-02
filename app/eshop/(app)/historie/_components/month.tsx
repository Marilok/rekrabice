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
    month && year ? new Date(parseInt(year), parseInt(month) - 1) : null,
  );

  const onChange = (value: DateValue) => {
    setValue(value);
    const searchParams = new URLSearchParams();
    searchParams.set("month", (value!.getMonth() + 1).toString());
    searchParams.set("year", value!.getFullYear().toString());
    router.replace(`?${searchParams.toString()}`);
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
