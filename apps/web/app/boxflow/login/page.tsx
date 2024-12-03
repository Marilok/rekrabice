import { Container, Paper, Title } from "@mantine/core";
import LoginComponent from "./_components/LoginComponent";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <main className="flex flex-col absolute top-1/4 left-1/2 -translate-x-1/2">
      <div className="relative">
        <Title ta="center" className="font-extrabold">
          Přihlášení do BoxFlow
        </Title>
      </div>
      <Container size="sm" className="self-center">
        <Paper
          withBorder
          shadow="md"
          p={{ base: "md", md: "xl" }}
          mt="xl"
          miw={{ base: "90vw", md: 400 }}
        >
          <LoginComponent />
        </Paper>
      </Container>
    </main>
  );
}
