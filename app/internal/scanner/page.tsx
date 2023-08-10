/* eslint-disable jsx-a11y/media-has-caption */

"use client";

import { Button, NativeSelect, PinInput, Stack, Text } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import scan from "./_functions/actions";

export default function Page() {
  const form = useForm({
    initialValues: {
      pallete_id: "",
      videoSrc: 0,
    },

    validate: {
      pallete_id: isNotEmpty("Chybný kód"),
    },

    transformValues: (values) => ({
      pallete_id: values.pallete_id.toUpperCase(),
      videoSrc: Number(values.videoSrc),
    }),
  });

  // TODO: handle case of not existing palleteId or trackingName

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        scan(values.pallete_id, values.videoSrc);
      })}
    >
      <Stack gap="md" maw={500} m="sm" mx="auto">
        <Text>Číslo palety</Text>
        <PinInput
          length={4}
          autoFocus
          size="xl"
          mx="auto"
          type="number"
          {...form.getInputProps("pallete_id")}
        />
        <Button type="submit" fullWidth>
          Načíst paletu
        </Button>
        <NativeSelect
          label="Zdroj skenování"
          data={["0", "1", "2", "3", "4"]}
          {...form.getInputProps("videoSrc")}
        />
        <video id="video-preview" className="w-full h-72" />
      </Stack>
    </form>
  );
}
