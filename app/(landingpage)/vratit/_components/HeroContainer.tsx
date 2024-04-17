"use client";

import {
  Anchor,
  AspectRatio,
  Button,
  Card,
  Flex,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    text: "1. Klikni na kouzelný odkaz",
    image: "/emojis/animated/man_technologist.png",
    description: (
      <>
        Přejdi prosím na stránku{" "}
        <Anchor
          component={Link}
          target="_blank"
          href="https://www.balikovna.cz/cs/poslat-balik/vratit-balik?returnCode=0788b8bb"
        >
          pro vrácení balíčku přes Balíkovnu
        </Anchor>{" "}
        a vyplň zbytek formuláře. 📝
      </>
    ),
  },
  {
    text: "2. Opiš podací kód",
    image: "/emojis/animated/writing_hand.png",
    description:
      "Na ReKrabici je přednalepený štítek. Na ten prosím napiš podací kód, který ti přišel do mailu. 📩",
  },
  {
    text: "3. Slož ji",
    image: "/emojis/animated/package.png",
    description:
      "Slož prosím ReKrabici na plocho, aby šetřila místo a ohyb prosím přelep izolepou (třeba tou, kterou byla přelepena zásilka). 💪",
  },
  {
    text: "4. Zajdi na Balíkovnu",
    image: "/emojis/animated/delivery_truck.png",
    description: (
      <>
        Vrať ji prosím na kteroukoliv pobočku Balíkovny (<b>kromě boxů</b>).
        Nevíš, kde je ta nejbližší? Mapku najdeš dole! 🤗
      </>
    ),
  },
];

export default function Page() {
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
                <Image src={step.image} width={60} height={60} alt="Image" />
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
        {/* <Card>
          <Card.Section>
            <Image src={Unboxing} width={400} height={400} />
          </Card.Section>
          <Card.Section>1. Vybal nákup</Card.Section>
          <Card.Section>Bla bla bla</Card.Section>
        </Card>
        <Card>2. Dones mě na jakkoukoliv Balíkovnu</Card>
        Mrkni kdyžtak na mapku dole.
        <Card>
          Sděl jim, že by si chtěl vrátit zásilku a nadiktuj jim kouzelný kód{" "}
          <span className="font-bold">0788b8bb</span>
        </Card> */}
      </Flex>
      <Title order={2}>Mapa Balíkoven</Title>
      <Paper
        shadow="lg"
        radius="md"
        maw={800}
        className="overflow-hidden"
        w="100%"
      >
        <AspectRatio ratio={16 / 9} maw={800} className="overflow-hidden">
          <iframe
            allow="geolocation"
            src="https://b2c.cpost.cz/locations/?type=BALIKOVNY"
            title="Mapa Balíkoven"
            style={{ border: 0 }}
          />
        </AspectRatio>
      </Paper>
      <Paper mt="md" p="xl" shadow="md" withBorder>
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
