"use client";

import { Container, Flex, Text, Title } from "@mantine/core";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function HeroContainer() {
  const searchParams = useSearchParams();

  return (
    <Flex
      p="lg"
      w="full"
      mx="auto"
      maw="1000"
      gap={{ base: "sm", md: "xl" }}
      my={{ base: "sm", md: "xl" }}
      direction={{ base: "column", md: "row" }}
    >
      <Container hiddenFrom="md">
        <Image src="/prototype.png" width={200} height={200} alt="ReKrabice" />
      </Container>
      <div>
        <Title order={1}>
          Ahoj! Jmenuji se {searchParams.get("trackingName") ?? "ReKrabice"} a
          nepatřím do koše.
        </Title>
        <Text mt="md">
          Vrať ji prosím na kteroukoliv pobočku Balíkovny, kde jim nadiktuj
          následující kód: TBA
        </Text>
      </div>
      <Container visibleFrom="md">
        <Image src="/prototype.png" width={200} height={200} alt="ReKrabice" />
      </Container>
    </Flex>
  );
}
