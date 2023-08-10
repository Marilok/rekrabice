import { Container, Paper } from "@mantine/core";
import LoginComponent from "./_components/LoginComponent";
import UpperText from "./_components/UpperText";

export default async function LoginPage() {
  return (
    <main className="flex flex-col h-screen relative top-1/4">
      <UpperText />
      <Container size="sm" className="self-center">
        <Paper withBorder shadow="md" p="xl" mt="xl" miw={400}>
          <LoginComponent />
        </Paper>
      </Container>
    </main>
  );
}
