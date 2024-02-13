import { Container, Paper } from "@mantine/core";
import LoginComponent from "./_components/LoginComponent";
import UpperText from "./_components/UpperText";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <main className="flex flex-col absolute top-1/4 left-1/2 -translate-x-1/2">
      <UpperText />
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
