"use client";

import { Button, Highlight, PinInput, Stack } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";

export default function Page() {
  const form = useForm({
    initialValues: {
      word: "",
    },

    validate: {
      word: (value: string) =>
        isNotEmpty("Nesmí být prázdné") || typeof value === "string"
          ? "Označení ms."
          : null,
    },

    transformValues: (values) => ({
      pallete_id: values.word.toUpperCase(),
    }),
  });

  const handlePinChange = (value: string) => {
    form.setValues({ word: value.toUpperCase() });
  };

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        console.log(values);
        form.reset();
      })}
    >
      <Stack>
        <Highlight highlight="prosím nevkládej číslice">
          Zadej návrh nového slova, prosím nevkládej číslice
        </Highlight>
        <PinInput
          autoFocus
          size="xl"
          required
          length={8}
          {...form.getInputProps("word")}
          onChange={(event) => handlePinChange(event)}
        />
        <Button type="submit">Zkontrolovat slovo</Button>
      </Stack>
    </form>
  );
}
