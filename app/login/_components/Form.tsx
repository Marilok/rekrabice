"use client";

import { isEmail, useForm } from "@mantine/form";
import Link from "next/link";
// import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

import translations from "../../../dictionaries/translations";
import {
  Anchor,
  Button,
  Checkbox,
  Group,
  TextInput,
} from "../../mantineClientComponents";

interface FormValues {
  email: string;
  rememberMe: boolean;
}

export default function Form({ setSubmitted }: any) {
  const router = useRouter();
  const supabase = createClientComponentClient();
  async function signIn(emailProp: string) {
    await supabase.auth.signInWithOtp({
      email: emailProp,
      options: {
        emailRedirectTo: "https://rekrabice.cz/auth/callback/",
      },
    });
    router.refresh();
  }

  const form = useForm<FormValues>({
    initialValues: { email: "", rememberMe: true },

    validate: {
      email: isEmail(translations.login.wrongEmailFormat),
    },

    transformValues: (values) => ({
      ...values,
      email: values.email.toLocaleLowerCase(),
    }),
  });

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        try {
          signIn(values.email);
        } catch (error) {
          console.error(error);
        } finally {
          setSubmitted(true);
        }
      })}
    >
      <TextInput
        label={translations.login.email}
        placeholder={translations.login.emailPlaceholder}
        {...form.getInputProps("email")}
        required
      />
      <Group position="apart" mt="sm">
        <Checkbox
          label={translations.login.rememberMe}
          disabled
          {...form.getInputProps("rememberMe", { type: "checkbox" })}
        />
        <Anchor href="/kontakt" component={Link} size="sm">
          {translations.login.cannotLogin}
        </Anchor>
      </Group>
      <Button fullWidth mt="md" type="submit">
        {translations.login.login}
      </Button>
    </form>
  );
}
