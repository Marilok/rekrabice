"use client";

import { DateValue, MonthPickerInput } from "@mantine/dates";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import "dayjs/locale/cs";

export default function MonthPick() {
  const [value, setValue] = useState<DateValue | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (value) {
      const searchParams = new URLSearchParams();
      searchParams.set("month", (value.getMonth() + 1).toString());
      searchParams.set("year", value.getFullYear().toString());
      router.replace(`?${searchParams.toString()}`);
    }
  }, [value, router]);

  const onChange = (valueDate: DateValue) => {
    console.log(valueDate);
    setValue(valueDate);
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
