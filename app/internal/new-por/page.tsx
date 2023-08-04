"use client";

import { Button } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function Page() {
  const form = useForm({
    initialValues: {
      word: "",
    },
  });

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        console.log(values);
        form.reset();
      })}
    >
      V přípravě...
      <Button type="submit">Odeslat</Button>
    </form>
  );
}
