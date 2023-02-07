import {
  Accordion,
  Autocomplete,
  Button,
  Card,
  Container,
  createStyles,
  Flex,
  Image,
  Text,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification, updateNotification } from "@mantine/notifications";
import { IconCheck, IconSend, IconX } from "@tabler/icons";
import { useState } from "react";
// import Image from 'next/image'
// import logoEconeaSrc from "../public/images/logos/econea.svg";
// import logoTierraVerdeSrc from "../public/images/logos/tierra-verde.png";

import LandingPageWrapper from "../components/Layouts/LandingPage/LandingPageWrapper";
import StepperComponent from "../components/StepperComponent";

export default function LandingPage() {
  const { classes } = useStyles();

  return (
    <LandingPageWrapper title="Jsem člověk">
      <Container mt="xl">
        <StepperComponent />
        <Title order={2} align="center" className={classes.wrapper}>
          Zapojené eshopy
        </Title>
        <Flex justify="space-around" align="center" my="xl">
          <Image
            src="/images/logos/econea.svg"
            height="80px"
            width="auto"
            alt="Econea logo"
            className=" opacity-80 hover:scale-110	 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/images/logos/tierra-verde.png"
            height="80px"
            width="auto"
            alt="Tierra Verde logo"
            className="max-w-full opacity-80 hover:scale-110 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/images/logos/aktin.svg"
            height="60px"
            width="auto"
            alt="Aktin logo"
            className="max-w-full opacity-80 hover:scale-110 hover:opacity-100 transition-opacity"
          />
        </Flex>
      </Container>
      <Faq />
      <Container>
        <Flex justify="space-around" my="xl" />
        <Card p="xl" withBorder shadow="md">
          <Title order={2}>Hurá ReKrabice?</Title>
          <Text mt="sm">
            Buď mezi prvními, kteří se dozví o více ReKrabicích. Zanech nám mail
            a my ti pošleme více informací o budoucnosti tohoto projektu.
          </Text>
          <EmailInput />
        </Card>
      </Container>
    </LandingPageWrapper>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    // paddingBottom: theme.spacing.xl * 2,
  },

  title: {
    marginBottom: theme.spacing.xl * 1.5,
  },

  item: {
    borderRadius: theme.radius.md,
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

function EmailInput() {
  const [loading, setLoading] = useState(false);

  async function sendMsg(values: any) {
    try {
      setLoading(true);
      showNotification({
        id: "notification-message",
        loading: true,
        title: "Zpracovávání...",
        message: "Tvůj email se snažíme zapsat k nám do systému",
        autoClose: false,
        disallowClose: true,
      });

      await fetch("/api/giveMail", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((res) => {
        if (res.status === 200) {
          updateNotification({
            id: "notification-message",
            color: "teal",
            title: "Hurá, povedlo se to! 🥳",
            message: "Do pošty jsme ti poslali potvzení o projevení zájmu.",
            icon: <IconCheck size={16} />,
            autoClose: 10000,
            loading: false,
          });
        } else {
          console.log(res);
        }
      });
    } catch (error: any) {
      updateNotification({
        id: "notification-message",
        autoClose: 20000,
        title: "Něco se pokazilo. 😥",
        message: error,
        color: "red",
        icon: <IconX />,
        loading: false,
      });
    } finally {
      setLoading(false);
    }
  }

  const form = useForm({
    initialValues: { email: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Překlep v mailu"),
    },
  });

  const data =
    form.values.email.trim().length > 0 && !form.values.email.includes("@")
      ? ["gmail.com", "seznam.cz", "email.cz", "centrum.cz"].map(
          (provider) => `${form.values.email}@${provider}`
        )
      : [];
  return (
    <form onSubmit={form.onSubmit((values) => sendMsg(values))}>
      <Autocomplete
        data={data}
        rightSection={
          <Button
            type="submit"
            variant="gradient"
            gradient={{ from: "green", to: "lime" }}
            rightIcon={<IconSend size={16} />}
          >
            Chci být testerem
          </Button>
        }
        rightSectionWidth="auto"
        label="Tvůj email"
        placeholder="petr@seznam.cz"
        width="xl"
        pt="md"
        {...form.getInputProps("email")}
      />
    </form>
  );
}

function Faq() {
  const { classes } = useStyles();

  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" order={2} className={classes.title}>
        Často kladené dotazy
      </Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="first">
          <Accordion.Control>Kolik mě to bude stát?</Accordion.Control>
          <Accordion.Panel>
            <strong>0 Kč.</strong> Služba je pro tebe zdarma, ale musíš zaplatit
            vratnou zálohu, která činí 50 Kč. Tu dostaneš zpátky po vrácení
            krabice.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="second">
          <Accordion.Control>Jak ji mohu vrátit?</Accordion.Control>
          <Accordion.Panel>
            Stačí když ji přineseš na jakkoukoliv pobočku Zásilkovny (zatím
            kromě Z-Boxů) nebo ji tam můžeš vrátit rovnou po vybalení balíčku.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="third">
          <Accordion.Control>
            Jak dostanu zpět vratnou zálohu?
          </Accordion.Control>
          <Accordion.Panel>
            Až krabice doputuje ze sběrného místa k nám do skladu připíšeme ti
            danou částku na účet.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="fourth">
          <Accordion.Control>Z čeho je vyrobena?</Accordion.Control>
          <Accordion.Panel>
            Krabice je vyrobena z recyklovatelného plastu, ale neděs se plast
            není ve všech případech neekologický. Tento materiál je lehký a
            pevný, proto je krabice schopna vydržet až 150 přeprav. Kartónová by
            vydržela jen 3-4 cesty. Celkový dopad ReKrabice (a 150 cest k nám na
            sklad) má o 70 % menší dopad na životní prostředí než 150
            kartónových krabic.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
