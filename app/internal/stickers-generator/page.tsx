"use client";

import { Button, NumberInput, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import generatePdf from "./_functions/generatePdf";
import getBatchBoxes from "./_functions/getBatchBoxes";

export default function Page() {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      batchId: 0,
    },
  });

  return (
    <form
      onSubmit={form.onSubmit(async (values) => {
        try {
          setLoading(true);
          generatePdf(await getBatchBoxes(values.batchId));
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      })}
    >
      <Stack gap="md">
        <NumberInput
          label="Zadej várku (batch_id)"
          {...form.getInputProps("batchId")}
        />
        <Button fullWidth type="submit" loading={loading}>
          Generovat etikety
        </Button>
      </Stack>
    </form>
  );
}
