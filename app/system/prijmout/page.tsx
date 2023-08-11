"use client";

import { Button, PinInput, Stack, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import translations from "../../../translations/translations";

export default function Page() {
  const form = useForm<FormValues>({
    initialValues: { packaging_id: "" },

    validate: {
      packaging_id: (value: string) =>
        value.length < 8 ? "Označení má přesně 8 znaků." : null,
    },

    transformValues: (values) => ({
      packaging_id: values.packaging_id.toLocaleUpperCase(),
    }),
  });

  const handlePinChange = (value: string) => {
    form.setValues({ packaging_id: value.toUpperCase() });
  };

  return (
    <form
      onSubmit={form.onSubmit((values: any) => {
        console.log(values);
        form.reset();
      })}
    >
      <Stack>
        <Text>{translations.systemReceive.code}</Text>
        <PinInput
          length={8}
          autoFocus
          size="xl"
          {...form.getInputProps("packaging_id")}
          onChange={(event) => handlePinChange(event)}
        />
        <Button type="submit">{translations.systemReceive.button}</Button>
      </Stack>
    </form>
  );
}

interface FormValues {
  packaging_id: string;
}
