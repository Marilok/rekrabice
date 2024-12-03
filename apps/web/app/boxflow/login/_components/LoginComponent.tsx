"use client";

import { Stack, Text } from "@mantine/core";
import { GmailButton } from "components/EmailButtons/EmailButtons";
import { useState } from "react";
import Form from "./Form";

export default function LoginComponent() {
  const [submitted, setSubmitted] = useState(false);

  return submitted ? <EmailButton /> : <Form setSubmitted={setSubmitted} />;
}

function EmailButton() {
  return (
    <Stack>
      <Text fw="bold" fz="lg">
        Do pracovního mailu byl odeslán odkaz pro přihlášení.
      </Text>
      <GmailButton>Gmail</GmailButton>
    </Stack>
  );
}
