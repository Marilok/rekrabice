"use client";

import { isEmail, useForm } from "@mantine/form";
import Link from "next/link";
// import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

import { Anchor, Button, Group, TextInput } from "@mantine/core";
import { useFocusTrap } from "@mantine/hooks";
import translations from "translations/login";
import { Database } from "types/supabase";

interface FormValues {
  email: string;
}

export default function Form({ setSubmitted }: any) {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();
  async function signIn(emailProp: string) {
    await supabase.auth.signInWithOtp({
      email: emailProp,
      options: {
        // eslint-disable-next-line no-restricted-globals
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  }

  const form = useForm<FormValues>({
    initialValues: {
      email: "",
    },

    validate: {
      email: isEmail(translations.wrongEmailFormat),
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
          signIn(values.email);
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
