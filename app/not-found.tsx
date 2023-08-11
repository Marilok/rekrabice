"use server";

import {
  Button,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Nenalezeno | ReKrabice",
//   description: "Tato stránka je prázdná...",
// };

export default async function NotFound() {
  return (
    <Container py={80}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, md: 2 }}>
        <div className="flex justify-center items-start flex-col">
          <Title
            fw={900}
            fz={{ base: 30, sm: "34" }}
            mb="md"
            ff="Greycliff CF, var(--mantine-font-family}"
          >
            Otevřeli jste prázdnou stránku 👻
          </Title>
          <Text c="dimmed" size="lg">
            Bohužel na této stránce nic není. Možná jste špatně zadali adresu
            nebo nebo byla stránka přesunuta na jiné místo.
          </Text>
          <Group mt="xl" gap="md">
            <Button
              component={Link}
              href="/"
              variant="filled"
              size="md"
              w={{ base: "full", md: "auto" }}
            >
              Vrátit se na hlavní stránku
            </Button>
            <Button
              component={Link}
              href="/kontakt"
              variant="outline"
              size="md"
              w={{ base: "full", md: "auto" }}
            >
              Kontaktovat podporu
            </Button>
          </Group>
        </div>
        <Image
          className="rounded-md object-cover"
          alt="Confused gif"
          src="/gifs/confused.gif"
          width={450}
          height={300}
        />
      </SimpleGrid>
    </Container>
  );
}
