"use client";

import { Button, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import insertWord from "./insertWord";

export default function Page() {
  const form = useForm({
    initialValues: {
      word: "",
    },

    // TODO: get rif of ternary operator
    /* eslint no-nested-ternary: 0 */ // --> OFF
    validate: (values) => ({
      word:
        values.word === ""
          ? "Nesmí být prázdné"
          : values.word.length > 8
          ? "Musí být maximálně 8 znaků dlouhé"
          : typeof values.word !== "string"
          ? "Musí být slovo"
          : // CHECK if it has letter such as ěščřžýáíé
          values.word.match(/[ěščřžýáíéóúůťďň]/gi)
          ? "Nesmí obsahovat diakritiku"
          : null,
    }),

    transformValues: (values) => ({
      word: values.word.toUpperCase().trim(),
    }),
  });

  const handlePinChange = (value: string) => {
    form.setValues({ word: value.toUpperCase() });
  };

  return (
    <form
      onSubmit={form.onSubmit(async (values) => {
        try {
          await insertWord(values.word);
          notifications.show({
            title: "Úspěch",
            message: "Slovo bylo úspěšně vloženo do databáze",
            color: "green",
            autoClose: 5000,
          });
        } catch (error) {
          console.log(error);
          notifications.show({
            title: "Chyba",
            message: "Slovo se nepodařilo vložit do databáze",
            color: "red",
            autoClose: 5000,
          });
        }
        form.reset();
      })}
    >
      <Stack>
        <TextInput
          label="Nové slovo"
          description="Pouze maximálně 8 písmen bez diakritiky."
          type="text"
          size="lg"
          pattern="[A-Za-z]+"
          autoFocus
          maxLength={8}
          {...form.getInputProps("word")}
          onChange={(event) => handlePinChange(event.target.value)}
        />
        <Button type="submit">Zkontrolovat a vložit do databáze</Button>
      </Stack>
    </form>
  );
}
