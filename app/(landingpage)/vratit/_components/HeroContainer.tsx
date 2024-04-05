"use client";

import { AspectRatio, Card, Flex, Paper, Text, Title } from "@mantine/core";

// export const metadata: Metadata = {
//   title: "Vrátit",
//   description: "Vrátit ReKrabici",
// };

export default function Page() {
  return (
    <Flex gap="xl" justify="flex-start" direction="column">
      Vrať mě prosím, abychom mohla šetřit naše lesy dál. 🌲
      <Text size="lg" mt="lg">
        Vrať ji prosím na kteroukoliv pobočku Balíkovny, kde jim nadiktuj
        následující kód:
      </Text>
      <Title order={2}>Jak mě vrátit?</Title>
      <div>
        <Card>
          <Card.Section>Obrázek</Card.Section>
          <Card.Section>1. Vybal nákup</Card.Section>
          <Card.Section>Bla bla bla</Card.Section>
        </Card>
        <Card>2. Dones mě na jakkoukoliv Balíkovnu</Card>
        Mrkni kdyžtak na mapku dole.
        <Card>
          Sděl jim, že by si chtěl vrátit zásilku a nadiktuj jim kouzelný kód{" "}
          <span className="font-bold">0788b8bb</span>
          </Card>
      </div>
      <Title order={2}>Mapa Balíkoven</Title>
      <Paper shadow="md" radius="md" maw={800} className="overflow-hidden">
        <AspectRatio ratio={16 / 9} maw={800} className="overflow-hidden">
          <iframe
            src="https://b2c.cpost.cz/locations/"
            title="Mapa Balíkoven"
            style={{ border: 0 }}
          />
        </AspectRatio>
      </Paper>
    </Flex>
  );
}
