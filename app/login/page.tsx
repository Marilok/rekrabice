import Link from "next/link";
import {
  Anchor,
  Container,
  Paper,
  Text,
  Title,
} from "../mantineClientComponents";
import LoginComponent from "./_components/LoginComponent";

function UpperText() {
  return (
    <div className="relative">
      <Title align="center" className="font-extrabold">
        Vstup do systému pro sběr ReKrabic
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Nepřijímate zatím ReKrabice?
        {" "}
        <Anchor href="/kontakt" component={Link}>
          Ozvěte se nám
        </Anchor>
      </Text>
    </div>
  );
}

export default async function LoginPage() {
  // const [submitted, setSubmitted] = useState(false);
  return (
    <main className="mt-60">
      <UpperText />
      <Container size="sm">
        <Paper withBorder shadow="md" p="xl" mt="xl">
          <LoginComponent />
        </Paper>
      </Container>
    </main>
  );
}
