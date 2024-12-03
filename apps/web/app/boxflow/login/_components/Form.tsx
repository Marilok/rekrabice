"use client";

import { isEmail, useForm } from "@mantine/form";
import { useRouter } from "next/navigation";

import createClientBrowser from "@/utils/supabase/client";
import { Button, TextInput } from "@mantine/core";
import { useFocusTrap } from "@mantine/hooks";
import translations from "translations/login";

interface FormValues {
  email: string;
}

export default function Form({ setSubmitted }: any) {
  const router = useRouter();
  const supabase = createClientBrowser();
  async function signIn(emailProp: string) {
    await supabase.auth.signInWithOtp({
      email: emailProp,
      options: {
        // eslint-disable-next-line no-restricted-globals
        emailRedirectTo: `${location.origin}/auth/magiclink/boxflow`,
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
        placeholder="jmeno.prijmeni@rekrabice.cz"
        required
        ref={focusTrapRef}
        {...form.getInputProps("email")}
      />
      <Button fullWidth mt="sm" type="submit">
        {translations.login}
      </Button>
    </form>
  );
}
