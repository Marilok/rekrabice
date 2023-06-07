"use client";

import {
  Anchor,
  Button,
  Card,
  CopyButton,
  Flex,
  Text,
  Title,
  Tooltip,
  createStyles,
  rem,
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

const useStyles = createStyles((theme) => ({
  cardTitle: {
    "&::after": {
      content: "\"\"",
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(80),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export default function SendMasterBoxPage() {
  const { classes, theme } = useStyles();
  const steps = mockdata.map((feature: any) => (
    <Card shadow="md" className="w-96" padding="lg" key={feature.title}>
      <feature.icon size={rem(48)} stroke={2} color={theme.fn.primaryColor()} />
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
      <Text weight="bold" my="md">
        Skvělá práce! Rádi Vás plné přepravky zbavíme. Zde je návod jak:
      </Text>
      <Flex
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        justify="center"
        gap="xl"
        mt={50}
      >
        {steps}
      </Flex>
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
        V
        {" "}
        <Anchor href="https://admin.packeta.com/sign/in" target="_blank">
          systému Zásilkovny
        </Anchor>
        {" "}
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
                rightIcon={
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
