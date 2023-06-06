import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { isEmail, useForm } from "@mantine/form";
import Link from "next/link";
import { useState } from "react";
import { EmailButtons } from "../../components/SocialButtons/EmailButtons";
import supabaseClient from "../../lib/supabaseClient";

export default function LoginPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="mt-60">
      <UpperText />
      <Container size={submitted ? "sm" : "xs"}>
        <Paper withBorder shadow="md" p="xl" mt="xl">
          {submitted ? <EmailButtons /> : <Form setSubmitted={setSubmitted} />}
        </Paper>
      </Container>
    </main>
  );
}

interface FormValues {
  email: string;
  rememberMe: boolean;
}

async function signInWithEmail({ emailProp }: any) {
  console.log(emailProp);
  console.log(supabaseClient.auth);
  const { data, error } = await supabaseClient.auth.signInWithOtp({
    email: emailProp,
  });
  console.log(data || error);
}

function Form({ setSubmitted }: any) {
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
          signInWithEmail(values.email);
        } catch (error) {
          console.error(error);
        } finally {
          setSubmitted(true);
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

function UpperText() {
  return (
    <div className="relative">
      <Title align="center" className="font-extrabold">
        Vstup do systému pro sběr ReKrabic
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Nepřijímate zatím ReKrabice?{" "}
        <Anchor href={"/kontakt"} component={Link}>
          Ozvěte se nám
        </Anchor>
      </Text>
    </div>
  );
}
