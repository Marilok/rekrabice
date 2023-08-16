"use client";

/* eslint-disable react/self-closing-comp */

import {
  Button,
  NumberInput,
  Stack,
  useMantineColorScheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import UI from "./_components/UI";
import getOrder from "./getOrder";

export default function Page() {
  const supabase = createClientComponentClient();

  const form = useForm({});

  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [data, setData] = useState(null);
  return (
    <>
      <form
        onSubmit={form.onSubmit(async (values: any) => {
          setData(await getOrder(values.orderId, supabase));
        })}
        className="print:hidden"
      >
        <Stack gap="md">
          <NumberInput
            {...form.getInputProps("orderId")}
            label="Číslo faktury"
          />
          <Button type="submit">Načíst fakturu</Button>
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
          >
            Stáhnout
          </Button>
          <UI data={data} />
        </>
      )}
    </>
  );
}
