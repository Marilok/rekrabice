import { Stack, Title } from "@mantine/core";
import Charts from "./_components/Charts/Charts";
import { StatsGrid } from "./_components/StatsGrid/StatsGrid";
import StatsRing from "./_components/StatsRing/StatsRing";

export default async function Page() {
  return (
    <Stack gap={"md"} my={"xl"}>
      <Title order={2}>Náš celkový dopad</Title>
      <StatsRing />
      <Title order={2} mt={"xl"}>
        Měsíční metriky
      </Title>

      <Charts />
      <Title order={2} mt={"xl"}>
        Finanční údaje
      </Title>
      <StatsGrid />
    </Stack>
  );
}
