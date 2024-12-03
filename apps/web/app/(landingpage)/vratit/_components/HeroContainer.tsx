"use client";

import {
  Affix,
  AspectRatio,
  Button,
  Card,
  Flex,
  Paper,
  Text,
  Title,
  Transition,
  rem,
} from "@mantine/core";
import { useScrollIntoView, useWindowScroll } from "@mantine/hooks";
import Image from "next/image";

import { IconArrowDown } from "@tabler/icons-react";

const steps = [
  {
    text: "1. Rozlož ji na plocho",
    image: "/emojis/animated/package.png",
    description:
      "Slož ReKrabici na plocho, aby šetřila místo a nepřepravoval se zbytečný vzduch. Ohyb zajisti izolepou (ideálně tou, kterou byla zalepena zásilka). 📦",
  },
  {
    text: "2. Zajdi na Balíkovnu",
    image: "/emojis/animated/writing_hand.png",
    description: (
      <>
        ReKrabice už má předem nalepený štítek, na kterém by měl být podací kód.
        Pokud tam není, napiš na krabici tento kód: <strong>0788b8bb</strong>.
        🙏
      </>
    ),
  },
  {
    text: "3. Odevzdej ji",
    image: "/emojis/animated/delivery_truck.png",
    description:
      "Obsluze sděl, že by si chtěl vrátit zásilku, nadiktuj podací kód a předej ReKrabici. 📦",
  },
  {
    text: "Teď už je to na nás",
    image: "/emojis/animated/deciduous_tree.png",
    description:
      "Teď už se o všechno postaráme my! Krabici zkontrolujeme, vyčistíme a poskytneme dalšímu e-shopu. Děkujeme, že s námi šetříš naše lesy. ♻️",
  },
];

export default function Page() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  const [scroll] = useWindowScroll();

  return (
    <Flex
      gap="xl"
      justify="flex-start"
      direction="column"
      align="center"
      mt="xl"
    >
      <Title order={2}>Jak mě vrátíš?</Title>
      <Flex direction={{ base: "column", md: "row" }} gap="md" wrap="wrap">
        {steps.map((step) => (
          <Card
            key={step.text}
            p="xl"
            miw={240}
            maw={300}
            withBorder
            shadow="sm"
          >
            <Card.Section>
              {step.image && (
                <Image
                  src={step.image}
                  width={60}
                  height={60}
                  alt="Image"
                  unoptimized
                />
              )}
            </Card.Section>
            <Card.Section mt="md">
              <Text fw="bold" fz="lg">
                {step.text}
              </Text>
            </Card.Section>
            <Card.Section mt={4}>
              <Text>{step.description}</Text>
            </Card.Section>
          </Card>
        ))}
      </Flex>
      <Title order={2}>Mapa Balíkoven</Title>
      <Paper
        shadow="lg"
        radius="md"
        maw={800}
        className="overflow-hidden"
        w="100%"
      >
        <AspectRatio
          ratio={16 / 9}
          maw={800}
          className="overflow-hidden"
          visibleFrom="md"
        >
          <iframe
            allow="geolocation"
            src="https://b2c.cpost.cz/locations/?type=BALIKOVNY"
            title="Mapa Balíkoven"
            style={{ border: 0 }}
          />
        </AspectRatio>
        <AspectRatio
          ratio={4 / 3}
          maw={800}
          className="overflow-hidden"
          hiddenFrom="md"
        >
          <iframe
            allow="geolocation"
            src="https://b2c.cpost.cz/locations/?type=BALIKOVNY"
            title="Mapa Balíkoven"
            style={{ border: 0 }}
          />
        </AspectRatio>
      </Paper>
      <Affix position={{ bottom: 20, right: 20 }} visibleFrom="md">
        <Transition transition="slide-up" mounted={scroll.y === 0}>
          {(transitionStyles) => (
            <Button
              leftSection={
                <IconArrowDown style={{ width: rem(16), height: rem(16) }} />
              }
              style={transitionStyles}
              onClick={() => scrollIntoView()}
              size="lg"
            >
              Rádi uslyšíme tvůj názor
            </Button>
          )}
        </Transition>
      </Affix>

      <Paper mt="md" p="xl" shadow="md" withBorder ref={targetRef}>
        <Flex
          direction={{ base: "column", md: "row" }}
          display="flex"
          maw={600}
          gap={{ base: "xl", md: "80" }}
          justify="center"
          align="center"
        >
          <Image
            src="/emojis/animated/green_heart.png"
            width={180}
            height={180}
            alt="Green heart"
            className="md:hidden"
          />
          <Flex direction="column">
            <Title order={2}>Zanech nám svůj názor</Title>
            <Text mt="sm">
              Využil si ReKrabici a chtěl by si nám k tomu něco říct? Budeme
              rádi za každý podnět, ať už pozitivní nebo negativní. 🙏
            </Text>
            <Button
              mt="md"
              component="a"
              size="md"
              target="_blank"
              href="https://forms.gle/V8SSfMxcT9sLeTd9A"
            >
              Sděl nám ho!
            </Button>
          </Flex>
          <Image
            src="/emojis/animated/green_heart.png"
            width={180}
            height={180}
            alt="Green heart"
            className="md:block hidden"
          />
        </Flex>
      </Paper>
    </Flex>
  );
}
