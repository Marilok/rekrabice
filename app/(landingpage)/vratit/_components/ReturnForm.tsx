"use client";

import bankString from "@/utils/formatters/bankString";
import transporter from "@/utils/nodemailer/transporter";
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
import translations from "translations/translations";
import getBoxFromTrackingName from "utils/supabase_helpers/getBoxFromTrackingName";
import insertData from "../_functions/insertData";

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

          const mailData = {
            from: `Robot z ReKrabice <${process.env.EMAIL_USERNAME}>`,
            to: values.email,
            replyTo: "podpora@rekrabice.cz",
            priority: "normal",
            subject: "Potvrzení o změně způsobu vyplacení zálohy na účet",
            html: `<div>Dobrý den, <br/><br/>
    potvrzujeme přijetí požadavku o vyplacení zálohy na bankovní účet.
    Po vrácení ReKrabice na sběrném místě Vám
    do 2 pracovních dnů odešleme zálohu na zadaný bankovní účet (${bankString(
      values.bankAccountPrefix,
      values.bankAccountNumber,
      values.bankCode,
    )})
    <br/><br/> 
    V případě dotazů nebo problémů se neváhejte nás kontkatovat 
    (třeba formou odpovědi na tento mail).
    <br/> Hezký den,
    <br/><br/>
    tým ReKrabice</div>`,
          };
          transporter.sendMail(mailData);
          form.reset();
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
