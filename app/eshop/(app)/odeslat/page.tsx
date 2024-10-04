"use client";

import {
  Box,
  Button,
  InputWrapper,
  LoadingOverlay,
  PinInput,
  Stack,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import getBoxIdFromAlias from "../_functions/getBoxIdFromAlias";
import getEshopId from "../_functions/getEshopId";
import insertDispatch from "../_functions/insertDispatch";

export default function Page() {
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    initialValues: { alias: "" },

    validate: (values: FormValues) => ({
      alias: values.alias.length !== 8 ? "Nesprávný formát jména" : null,
    }),

    transformValues: (values: FormValues) => ({
      alias: values.alias.toLocaleUpperCase(),
    }),
  });

  const handlePinChange = (value: FormValues["alias"]) => {
    form.setValues({ alias: value.toUpperCase() });

    if (value.length === 8) {
      form.onSubmit(handleSubmit)();
    }
  };

  const handlePaste = (event: any) => {
    const pastedData = event.clipboardData.getData("text");
    if (pastedData.length > 8) {
      event.preventDefault();
      const aliasMatch = pastedData.match(/alias=([A-Z0-9]{8})/);
      const sanitizedValue = aliasMatch
        ? aliasMatch[1]
        : pastedData.toUpperCase();

      form.setValues({ alias: sanitizedValue });
      form.onSubmit(handleSubmit)();
    }
  };

  const handleSubmit = async (values: FormValues) => {
    setLoading(true);
    try {
      const boxId = await getBoxIdFromAlias(values.alias);
      const eshopId = await getEshopId();
      await insertDispatch(boxId, eshopId);
      notifications.show({
        title: "ReKrabice odeslána 🎉",
        message: "ReKrabice byla úspěšně odeslána.",
        color: "green",
        autoClose: 5000,
      });
    } catch (error: any) {
      console.log(error);
      notifications.show({
        title: "Nastala chyba 😕",
        message: error.message,
        color: "red",
        autoClose: false,
      });
    }

    setLoading(false);
    form.reset();
  };

  return (
    <Box p="md" pos="relative">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <LoadingOverlay
          visible={loading}
          zIndex={100}
          overlayProps={{ radius: "sm" }}
        />
        <Stack>
          <InputWrapper
            label="Zadejte 8-ciferné jméno ReKrabice"
            size="md"
            error={form.errors.alias}
            description="Můžete zadat manuálně nebo pomocí čtečky."
          >
            <PinInput
              length={8}
              autoFocus
              size="xl"
              classNames={{ root: "mt-2" }}
              {...form.getInputProps("alias")}
              disabled={loading}
              onChange={(event) => handlePinChange(event)}
              onPaste={(event) => handlePaste(event)}
            />
          </InputWrapper>
          <Button type="submit" size="md" disabled={loading}>
            Odeslat ReKrabici
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

interface FormValues {
  alias: string;
}
