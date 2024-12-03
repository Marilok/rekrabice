"use client";

import { Anchor, Button, Group, TextInput } from "@mantine/core";
import { isEmail, useForm } from "@mantine/form";
import { useFocusTrap } from "@mantine/hooks";
import Link from "next/link";
import translations from "translations/login";
import login from "../login/actions";

export default function Form({ setSubmitted }: any) {
  const form = useForm<FormValues>({
    initialValues: {
      email: "",
    },

    validate: {
      email: isEmail("Chybný formát emailu"),
    },

    transformValues: (values) => ({
      ...values,
      email: values.email.toLocaleLowerCase(),
    }),
  });

  const focusTrapRef = useFocusTrap();

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        try {
          login(values.email);
        } catch (error) {
          console.error(error);
        } finally {
          setSubmitted(true);
        }
      })}
    >
      <TextInput
        label={translations.email}
        placeholder={translations.emailPlaceholder}
        required
        ref={focusTrapRef}
        {...form.getInputProps("email")}
      />
      <Button fullWidth mt="sm" type="submit">
        {translations.login}
      </Button>
      <Group justify="space-between" mt="sm">
        <Anchor href="/kontakt" component={Link} size="sm">
          {translations.cannotLogin}
        </Anchor>
      </Group>
    </form>
  );
}

type FormValues = {
  email: string;
};
