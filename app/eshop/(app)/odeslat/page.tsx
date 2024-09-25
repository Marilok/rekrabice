"use client";

import createClientBrowser from "@/utils/supabase/client";
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
import getEshopId from "../_functions/getEshopId";

export default function Page() {
  const supabase = createClientBrowser();

  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    initialValues: { packaging_id: "" },

    validate: (values: FormValues) => ({
      packaging_id:
        values.packaging_id.length !== 8 ? "Nesprávný formát jména" : null,
    }),

    transformValues: (values: FormValues) => ({
      packaging_id: values.packaging_id.toLocaleUpperCase(),
    }),
  });

  const handlePinChange = (value: FormValues["packaging_id"]) => {
    form.setValues({ packaging_id: value.toUpperCase() });
    if (value.length === 8) {
      form.onSubmit(handleSubmit)();
    }
  };

  const getBoxFromTrackingName = async (trackingName: string) => {
    const { data, error } = await supabase
      .from("boxes")
      .select("box_id")
      .eq("alias", trackingName)
      .single();

    if (data?.box_id == null) {
      notifications.show({
        title: "Krabice neexistuje 📦",
        message: "Zkontrolujte zda jste zadali správné jméno ReKrabice.",
        color: "red",
        autoClose: false,
      });
      throw error;
    }

    if (error) {
      notifications.show({
        title: "Chyba při načítání krabice 🤯",
        message: "Něco se nepovedlo. Zkuste to prosím znovu.",
        color: "red",
        autoClose: false,
      });
      throw error;
    }

    return data.box_id;
  };

  const insertSent = async (boxId: number) => {
    const eshopId = await getEshopId();
    const { error } = await supabase.from("eshops_sent").insert([
      {
        eshop_id: eshopId,
        box_id: boxId,
      },
    ]);

    if (error) {
      notifications.show({
        title: "Chyba při odesílání krabice 🤯",
        message: "Něco se nepovedlo. Zkuste to prosím znovu.",
        color: "red",
        autoClose: false,
      });
      throw error;
    }

    notifications.show({
      title: "ReKrabice odeslána 🎉",
      message: "ReKrabice byla úspěšně odeslána.",
      color: "green",
      autoClose: 5000,
    });
  };

  const handleSubmit = async (values: FormValues) => {
    setLoading(true);
    try {
      const boxId = await getBoxFromTrackingName(values.packaging_id);
      await insertSent(boxId);
    } catch (error) {
      console.error(error);
    }
    form.reset();
    setLoading(false);
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
            classNames={{ label: "mb-2" }}
            error={form.errors.packaging_id}
          >
            <PinInput
              length={8}
              autoFocus
              size="xl"
              {...form.getInputProps("packaging_id")}
              disabled={loading}
              onChange={(event) => handlePinChange(event)}
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
  packaging_id: string;
}
