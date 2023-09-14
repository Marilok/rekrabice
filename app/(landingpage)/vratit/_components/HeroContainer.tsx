"use client";

import { Container, List, Text, Title } from "@mantine/core";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import boxImgSrc from "../../../../public/prototype.png";

export default function HeroContainer() {
  const searchParams = useSearchParams();

  return (
    <Container
      p="lg"
      w="full"
      mx="auto"
      maw="800"
      className="flex flex-row gap-12 "
      mt="md"
    >
      <div>
        <Title order={1}>
          Ahoj! Jmenuji se {searchParams.get("trackingName") || "ReKrabice"} a
          nepatřím do koše.
        </Title>
        <Text mt="md">
          Jsem totiž znovupoužitelná krabice. Máš 2 možnosti, jak se o mě
          postarat:
        </Text>
        <List type="ordered" mt="md" spacing="sm">
          <List.Item>
            Rovnou mě zanes na jedno ze sběrných míst. Tam ti obsluha vrátí
            zálohu v hotovosti. 🪙 (Mapu míst najdeš dole. ⬇️)
          </List.Item>
          <List.Item>
            Nebo vyplň následující formulář a my ti zálohu pošleme po vrácení na
            účet. 🏦
          </List.Item>
        </List>
      </div>
      <div>
        <Image src={boxImgSrc} width={200} height={200} alt="ReKrabice" />
      </div>
    </Container>
  );
}
