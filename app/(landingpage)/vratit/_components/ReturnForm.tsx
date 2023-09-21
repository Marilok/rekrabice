"use client";

import {
  Anchor,
  Button,
  Fieldset,
  Flex,
  NumberInput,
  Stack,
  TextInput,
} from "@mantine/core";
import { isEmail, isNotEmpty, useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconBuildingBank } from "@tabler/icons-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import translations from "../../../../translations/translations";
import getBoxFromTrackingName from "../../../../utils/getBoxFromTrackingName";
import insertData from "../_functions/insertData";

export const dynamic = "dynamic";

export default function ReturnForm() {
  const searchParams = useSearchParams();

  const form = useForm({
    initialValues: {
      email: "",
      trackingName: searchParams.get("trackingName") || "",
      bankAccountPrefix: "",
      bankAccountNumber: "",
      bankCode: "",
    },
    validate: {
      email: isEmail("Není email"),
      trackingName: isNotEmpty("Nezvolena krabice"),
    },
  });

  const handlePinChange = (value: string) => {
    form.setValues({ trackingName: value.toUpperCase() });
  };

  return (
    <form
      onSubmit={form.onSubmit(async (values: any) => {
        try {
          // eslint-disable-next-line camelcase
          const { active_loop_id } = await getBoxFromTrackingName(
            values.trackingName,
          );

          await insertData(
            active_loop_id,
            values.email,
            values.bankAccountPrefix,
            values.bankAccountNumber,
            values.bankCode,
          );
          form.reset();
          notifications.show({
            title: "Podařilo se!",
            message:
              "Zapsali jsme si tvé údaje, teď už jen stačí přinést ReKrabici na jedno ze sběrných míst.",
            color: "green",
          });
        } catch (error) {
          notifications.show({
            title: translations.error.genericTitle,
            message: translations.error.genericMsg,
            color: "red",
          });
          console.log(error);
        }
      })}
    >
      <Fieldset
        legend="Formulář pro poslání zálohy na účet"
        w={{ base: "full", md: "600" }}
        mx="auto"
        mt="md"
      >
        <Stack gap="sm" w={{ base: "full", md: "600" }}>
          <TextInput
            label="Jméno ReKrabice"
            placeholder="SMOULA77"
            description="K nalezení na krabici pod QR kódem"
            required
            disabled={!!searchParams.get("trackingName")}
            minLength={8}
            maxLength={8}
            {...form.getInputProps("trackingName")}
            onChange={(event) => handlePinChange(event.target.value)}
          />
          <TextInput
            label="Email"
            placeholder="tatka.smoula@seznam.cz"
            required
            {...form.getInputProps("email")}
            type="email"
          />
          <Flex justify="center" gap="md">
            <NumberInput
              className="flex-1"
              label="Předčíslí"
              placeholder=""
              hideControls
              maxLength={6}
              {...form.getInputProps("bankAccountPrefix")}
            />
            <NumberInput
              className="flex-auto"
              label="Číslo účtu"
              placeholder="1234567890"
              minLength={2}
              maxLength={10}
              required
              w="250"
              hideControls
              {...form.getInputProps("bankAccountNumber")}
            />
            <TextInput
              className="flex-1"
              label="Kód banky"
              placeholder="0000"
              minLength={4}
              maxLength={4}
              required
              type="number"
              {...form.getInputProps("bankCode")}
            />{" "}
          </Flex>
          <Button type="submit" fullWidth rightSection={<IconBuildingBank />}>
            Chci vyplatit zálohu na účet
          </Button>
          <Anchor
            component={Link}
            href="/gdpr-prevod-zalohy"
            size="xs"
            c="dimmed"
            target="_blank"
            mt="-4"
            ml="2"
          >
            Podmínky zpracování osobních údajů
          </Anchor>
        </Stack>
      </Fieldset>
    </form>
  );
}
