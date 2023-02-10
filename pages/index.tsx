import {
  Accordion,
  Anchor,
  Autocomplete,
  Button,
  Card,
  Center,
  Container,
  createStyles,
  Flex,
  Image as MantineImage,
  Modal,
  Text,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification, updateNotification } from "@mantine/notifications";
import { IconCheck, IconSend, IconX } from "@tabler/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LandingPageWrapper from "../components/Layouts/LandingPage/LandingPageWrapper";
import StepperComponent from "../components/StepperComponent";
import boox from "../public/boox.png";

// import Image from 'next/image'
// import logoEconeaSrc from "../public/images/logos/econea.svg";
// import logoTierraVerdeSrc from "../public/images/logos/tierra-verde.png";
// import Image from 'next/image'

export default function LandingPage() {
  const [opened, setOpened] = useState(false);
  const { classes } = useStylesHero();
  return (
    <LandingPageWrapper>
      {/* <HeroBullets /> */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        // title="Introduce yourself!"
        centered
        size={"lg"}
      >
        <Center>
          <Image src={boox} alt="Fyzická krabice" height={300} />
        </Center>
        Buď mezi prvními, kteří se dozví o nových partnerech a budou moci začít
        testovat ReKrabice. Ukážeš tím, že je o ReKrabice zájem a má smysl
        šetřit naše lesy. 🌲
        <EmailInput />
      </Modal>
      <div className={classes.root}>
        <Container size="lg">
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                Začni používat
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: "pink", to: "yellow" }}
                >
                  {" "}
                  vratné krabice
                </Text>{" "}
                pro své online nákupy
              </Title>

              <Text className={classes.description} mt={30}>
                Už nemusíš zbytečně plnit svůj domov kartónovými krabicemi.
                Všechny ReKrabice můžeš vrátit a ušetřit tím kus lesa. 🌲
              </Text>

              <Button
                variant="gradient"
                gradient={{ from: "green", to: "teal" }}
                size="xl"
                className={classes.control + " " + ""}
                mt={40}
                onClick={() => setOpened(true)}
              >
                Začít používat ReKrabice
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <ComponentUno />
    </LandingPageWrapper>
  );
}

function ComponentUno() {
  const { classes } = useStyles();
  return (
    <>
      <Container mt="xl">
        <StepperComponent />
        <Container py={"xl"}>
          <Title order={2} align="center" className={classes.wrapper}>
            Zapojené eshopy
          </Title>
          <Flex justify="space-around" align="center" my="xl" wrap="wrap">
            <MantineImage
              src="/images/logos/econea.svg"
              height="80px"
              width="auto"
              alt="Econea logo"
              className=" opacity-80 hover:scale-110	 hover:opacity-100 transition-opacity"
            />
            <MantineImage
              src="/images/logos/tierra-verde.png"
              height="80px"
              width="auto"
              alt="Tierra Verde logo"
              className="max-w-full opacity-80 hover:scale-110 hover:opacity-100 transition-opacity"
            />
            <MantineImage
              src="/images/logos/aktin.svg"
              height="60px"
              width="auto"
              alt="Aktin logo"
              className="max-w-full opacity-80 hover:scale-110 hover:opacity-100 transition-opacity"
            />
          </Flex>
        </Container>
      </Container>
      <Faq />
      <Container>
        <Flex justify="space-around" my="xl" />
        <Card p="xl" withBorder shadow="md">
          <Title order={2}>Hurá ReKrabice?</Title>
          <Text mt="sm">
            Buď mezi prvními, kteří se dozví o nových partnerech a budou moci
            začít testovat ReKrabice. Ukážeš tím, že je o ReKrabice zájem.
          </Text>
          <EmailInput />
        </Card>
      </Container>
    </>
  );
}

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
    initialValues: { mail: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      mail: (value) => (/^\S+@\S+$/.test(value) ? null : "Překlep v mailu"),
    },
  });

  const data =
    form.values.mail.trim().length > 0 && !form.values.mail.includes("@")
      ? ["gmail.com", "seznam.cz", "email.cz", "centrum.cz"].map(
          (provider) => `${form.values.mail}@${provider}`
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
            Začít používat ReKrabice
          </Button>
        }
        rightSectionWidth="auto"
        label="Tvůj email"
        placeholder="petr@seznam.cz"
        width="xl"
        pt="md"
        {...form.getInputProps("mail")}
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
        <Accordion.Item className={classes.item} value="fifth">
          <Accordion.Control>
            Kdy to budu moct začít používat?
          </Accordion.Control>
          <Accordion.Panel>
            Plánované spuštění je na druhou polovinu 2023. Pokud ale chceš o tom
            slyšet dřív přihlas se k
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="last">
          <Accordion.Control>Mám další dotaz!</Accordion.Control>
          <Accordion.Panel>
            Super, prosím ozvi se nám v sekci{" "}
            <Anchor component={"span"}>
              <Link href={"/kontakt"}>kontakty</Link> nebo na sociálních sítích.
            </Anchor>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    // paddingTop: theme.spacing.xl * 2,
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

const useStylesHero = createStyles((theme) => ({
  root: {
    backgroundColor: "#11284b",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage:
      "linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1558710763-9791081edd44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80)",
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  content: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 48,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: 500,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 22,

    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
}));
