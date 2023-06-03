"use client";
import { isEmail, useForm } from "@mantine/form";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
// import { useState } from "react";
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
  // function Form({ setSubmitted }: any) {
  const supabase = createPagesBrowserClient();
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

  supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session);
  });

  async function signInWithEmail(emailProp: any) {
    await supabase.auth.signInWithOtp({
      email: emailProp,
      options: {
        emailRedirectTo: "https://rekrabice.cz/auth/callback",
      },
    });
  }

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        try {
          signInWithEmail(values.email);
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
        <Anchor href={"/kontakt"} component={Link} size="sm">
          Nemůžete se přihlásit?
        </Anchor>
      </Group>
      <Button fullWidth mt="md" type="submit">
        Přihlásit se
      </Button>
    </form>
  );
}
