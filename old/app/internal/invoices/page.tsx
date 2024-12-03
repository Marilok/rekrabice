"use client";

/* eslint-disable react/self-closing-comp */

import {
  Button,
  NumberInput,
  Stack,
  useMantineColorScheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconDownload, IconRefresh } from "@tabler/icons-react";
import { useState } from "react";
import UI from "./_components/UI";
import "./_components/print.css";
import getOrder from "./_functions/getOrder";

export default function Page() {
  const form = useForm({});

  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [data, setData] = useState<any>(null);
  return (
    <>
      <form
        onSubmit={form.onSubmit(async (values: any) => {
          setData(await getOrder(values.orderId));
        })}
        className="print:hidden"
      >
        <Stack gap="md">
          <NumberInput
            {...form.getInputProps("orderId")}
            label="Číslo faktury"
          />
          <Button
            type="submit"
            leftSection={<IconRefresh stroke={1.5} size="1rem" />}
          >
            Načíst fakturu
          </Button>
        </Stack>
      </form>
      {data && (
        <>
          <Button
            onClick={() => {
              const temp = colorScheme;
              setColorScheme("light");
              window.print();
              setColorScheme(temp);
            }}
            className="print:hidden"
            leftSection={<IconDownload stroke={1.5} size="1rem" />}
          >
            Stáhnout
          </Button>
          <UI data={data} />
        </>
      )}
    </>
  );
}
