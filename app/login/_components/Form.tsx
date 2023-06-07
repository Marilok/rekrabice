"use client";

import { isEmail, useForm } from "@mantine/form";
import Link from "next/link";
// import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

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

export default function Form() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  async function signIn(emailProp: string) {
    await supabase.auth.signInWithOtp({
      email: emailProp,
      options: {
        emailRedirectTo: "https://rekrabice.cz/auth/callback",
      },
    });
    router.refresh();
  }
  // function Form({ setSubmitted }: any) {
  const form = useForm<FormValues>({
    initialValues: { email: "", rememberMe: false },

    validate: {
      email: isEmail("Chybný formát emailové adresy"),
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
          //   setSubmitted(true);
        }
      })}
    >
      <TextInput
        label="Email"
        placeholder="skvela@firma.cz"
        {...form.getInputProps("email")}
        required
      />
      <Group position="apart" mt="sm">
        <Checkbox
          label="Zapamatuj si mě pro příště"
          {...form.getInputProps("rememberMe", { type: "checkbox" })}
        />
        <Anchor href="/kontakt" component={Link} size="sm">
          Nemůžete se přihlásit?
        </Anchor>
      </Group>
      <Button fullWidth mt="md" type="submit">
        Přihlásit se
      </Button>
    </form>
  );
}
