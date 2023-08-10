"use client";

import {
  Anchor,
  Button,
  Card,
  Container,
  CopyButton,
  Text,
  Title,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import {
  IconAsterisk,
  IconCheck,
  IconCopy,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
} from "@tabler/icons-react";
import { RETURN_CODE } from "../../../data/const";
import classes from "./classes.module.css";

export default function SendMasterBoxPage() {
  const theme = useMantineTheme();

  const steps = mockdata.map((feature: any) => (
    <Card shadow="md" className="w-80" padding="lg" key={feature.title}>
      <feature.icon size="xxl" stroke={2} color={theme.primaryColor} />

      {/* className={classes.cardTitle} */}
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <>
      <Title order={2}>Máte plnou přepravku?</Title>
      <Text fw="bold" my="md">
        Skvělá práce! Rádi Vás plné přepravky zbavíme. Zde je návod jak nám ji
        poslat:
      </Text>
      {/* TODO: v7 flex component 
      {/* <Flex
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        justify="center"
        gap="xl"
        mt={50}
      >
        {steps}
      </Flex> */}
      <Container
        className="flex justify-center gap-xl flex-wrap flex-col md:flex-row"
        mt={50}
      >
        {steps}
      </Container>
    </>
  );
}

const mockdata = [
  {
    title: "Zavřete přepravku",
    description:
      "Ujistěte se, že přepravka je plná a už žádná další ReKrabice se do ní nevleze.",
    icon: IconNumber1,
  },
  {
    title: "Vratka Zásilkovně",
    description: (
      <>
        V{" "}
        <Anchor href="https://admin.packeta.com/sign/in" target="_blank">
          systému Zásilkovny
        </Anchor>{" "}
        zadejte kód
        <span className="font-bold" />
        <CopyButton value={RETURN_CODE} timeout={2000}>
          {({ copied, copy }) => (
            <Tooltip
              label={copied ? "Kopírováno" : "Kopírovat kód"}
              withArrow
              position="right"
            >
              <Button
                variant="subtle"
                color={copied ? "green" : "gray"}
                rightSection={
                  copied ? <IconCheck size="1rem" /> : <IconCopy size="1rem" />
                }
                onClick={copy}
              >
                {RETURN_CODE}
              </Button>
            </Tooltip>
          )}
        </CopyButton>
      </>
    ),
    icon: IconNumber2,
  },
  {
    title: "Nalepte štítek na přepravku",
    description: "Adresní štítek prosím nalepte na přepravku",
    icon: IconNumber3,
  },
  {
    title: "Nová přepravka",
    description:
      "Plnou přepravku vyměňte za prázdnou a můžete znovu přijímat ReKrabice.",
    icon: IconNumber4,
  },
  {
    title: "Odměny",
    description:
      "Odměny za sesbírané ReKrabice a vyplacené zálohy Vám zpravidla odešleme jednou za 2 týdny.",
    icon: IconAsterisk,
  },
];
