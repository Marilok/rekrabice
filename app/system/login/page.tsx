import Link from "next/link";
// import { useState } from "react";
import {
  Anchor,
  Container,
  Paper,
  Text,
  Title,
} from "../../mantineClientComponents";
import { getSession } from "../../supabase-server";
import Form from "./_components/Form";

import { redirect } from "next/navigation";
function UpperText() {
  return (
    <div className="relative">
      <Title align="center" className="font-extrabold">
        Vstup do systému pro sběr ReKrabic
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Nepřijímate zatím ReKrabice?{" "}
        <Anchor href="/kontakt" component={Link}>
          Ozvěte se nám
        </Anchor>
      </Text>
    </div>
  );
}

export default async function LoginPage() {
  const session = await getSession();

  if (session) {
    return redirect("/system/prijmout");
  }
  // const [submitted, setSubmitted] = useState(false);
  return (
    <main className="mt-60">
      <UpperText />
      <Container size="sm">
        {/* <Container size={submitted ? "sm" : "xs"}> */}
        <Paper withBorder shadow="md" p="xl" mt="xl">
          <Form />
          {/* {submitted ? <EmailButtons /> : <Form setSubmitted={setSubmitted} />} */}
        </Paper>
      </Container>
    </main>
  );
}
