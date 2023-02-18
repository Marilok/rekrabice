import {
  Accordion,
  Anchor,
  Autocomplete,
  Button,
  Card,
  Center,
  Container,
  createStyles,
  Divider,
  Flex,
  Image as MantineImage,
  MediaQuery,
  Modal,
  Space,
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

// import Image from 'next/image'
// import logoEconeaSrc from "../public/images/logos/econea.svg";
// import logoTierraVerdeSrc from "../public/images/logos/tierra-verde.png";
// import Image from 'next/image'

export default function LandingPage() {
  const [opened, setOpened] = useState(false);
  const { classes } = useStylesHero();
  return (
    <LandingPageWrapper
      styles={() => ({
        main: {
          padding: "0 !important",
        },
      })}
    >
      {/* <HeroBullets /> */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        // title="Introduce yourself!"
        centered
        size={"lg"}
      >
        <Center className="w-full h-72 relative">
          <Image
            src="/prototype.png"
            fill
            alt="Prototyp krabice"
            className="m-auto rounded shadow object-contain"
          />
        </Center>
        Chceš být první, komu přijde domů zásilka v ReKrabici? Nech nám tu tvoji
        mailovou adresu a my se ti ozveme, až budou k dispozici!
        <EmailInput id="signup_hero_submit" />
      </Modal>
      <div className={classes.root}>
        <Container size="lg">
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                Ušetři přírodě používáním
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: "pink", to: "yellow" }}
                >
                  {" "}
                  vratných krabic
                </Text>
                pro své online nákupy!
              </Title>

              <Text className={classes.description} mt={30}>
                Nestav doma věže z kartónových krabic. Všechny ReKrabice můžeš
                vrátit a ušetřit tak našim lesům. A to zcela zdarma! 🌲
              </Text>
              <Button
                component="button"
                variant="gradient"
                gradient={{ from: "green", to: "teal" }}
                size="xl"
                className={classes.control + " " + ""}
                mt={40}
                onClick={() => setOpened(true)}
                id="signup_hero_open"
              >
                <span id="signup_hero_open">Vyzkoušet ReKrabice</span>
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
      <Space h="xl" />
      <StepperComponent />
      <Divider my={40} />
      <Container>
        <Title order={2} align="center" className={classes.wrapper}>
          Zapojené eshopy
        </Title>
        <Flex
          justify="space-around"
          // direction={{ base: "column", md: "row" }}
          align="center"
          my="xl"
          gap={20}
          wrap="wrap"
        >
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
      <Divider my={40} />
      <Faq />
      <Container>
        <Flex justify="space-around" my="xl" />
        <Card p="xl" withBorder shadow="md">
          <Title order={2}>Co dál?</Title>
          <Text mt="sm">
            Aby se tento projekt mohl stát realitou, potřebujeme dopravcům a
            prodejcům dokázat, že je o ReKrabice zájem. Ten můžeš snadno
            projevit tak, že nám tu zanecháš svoji mailovou adresu. V budoucnu
            se ti ozveme, jak se nám daří.
          </Text>
          <EmailInput id="signup_bottom_submit" />
        </Card>
      </Container>
    </>
  );
}

function EmailInput({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);

  async function sendMsg(values: any) {
    try {
      setLoading(true);
      showNotification({
        id: "notification-message",
        loading: true,
        title: "Zpracovávání...",
        message: "Zapisujeme tvůj email k nám do systému",
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
        label="Tvůj email"
        styles={(theme) => ({
          rightSection: {
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              display: "none",
            },
          },
        })}
        rightSection={
          <Button
            type="submit"
            variant="gradient"
            gradient={{ from: "green", to: "lime" }}
            rightIcon={<IconSend size={16} />}
            id={id}
            loading={loading}
            loaderPosition="right"
          >
            <span id={id}>Dejte mi vědět</span>
          </Button>
        }
        rightSectionWidth={"auto"}
        placeholder="petr@seznam.cz"
        width="xl"
        pt="md"
        {...form.getInputProps("mail")}
      />
      <MediaQuery largerThan={"md"} styles={{ display: "none" }}>
        <Button
          type="submit"
          variant="gradient"
          gradient={{ from: "green", to: "lime" }}
          rightIcon={<IconSend size={16} />}
          id={id}
          mt="xs"
          fullWidth
          loading={loading}
          loaderPosition="right"
        >
          <span id={id}>Dejte mi vědět</span>
        </Button>
      </MediaQuery>
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

      <Accordion
        variant="separated"
        styles={{
          control: {
            // styles added to expanded item
            // fontWeight: "bold",
            "&[data-active] *": {
              fontWeight: "bold",
            },
          },
        }}
      >
        <Accordion.Item className={classes.item} value="first">
          <Accordion.Control>Bude mě ReKrabice něco stát?</Accordion.Control>
          <Accordion.Panel>
            Ne, nestojí tě ani korunu. Jediné, co od tebe potřebujeme, je
            vratnou zálohu, kterou ti však pošleme zpátky po vrácení krabice.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="second">
          <Accordion.Control>Jak mohu ReKrabici vrátit?</Accordion.Control>
          <Accordion.Panel>
            Stačí ji přinést na tvou nejbližší pobočku Zásilkovny. Pokud hoříš
            nedočkavostí, můžeš balíček rozbalit taky přímo na výdejně a
            ReKrabici tam rovnou nechat. Nebo se ti ReKrabice natolik zalíbila,
            že ji vracet nechceš. V takovém případě ti akorát nevrátíme zálohu.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="third">
          <Accordion.Control>Jak mi vrátíte zálohu?</Accordion.Control>
          <Accordion.Panel>
            Až se ReKrabice dostane zpátky k nám na sklad, pošleme ti
            padesátikorunu zpátky na tvůj účet.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="fourth">
          <Accordion.Control>Z čeho jsou ReKrabice vyrobeny?</Accordion.Control>
          <Accordion.Panel>
            ReKrabice jsou plastové. Možná si teď říkáš, co je na tom
            ekologického. Kartónové krabice s trochou štěstí přežijí 4 cesty,
            ReKrabice jich zvládne až 100. Celkový dopad jedné ReKrabice po 100
            použitích (včetně cesty zpátky na sklad) je o 70 % nižší, než dopad
            obyčejné kartónové.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="companies">
          <Accordion.Control>Proč tu nejsou další eshopy?</Accordion.Control>
          <Accordion.Panel>
            Zatím o ReKrabice projevily zájem jen tyto eshopy, na rozšíření
            jejich sítě však pilně pracujeme. Chybí ti tu nějaký eshop? Dej nám
            nebo svému eshopu vědět!
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="start">
          <Accordion.Control>
            Kdy to budu moct ReKrabice začít používat?
          </Accordion.Control>
          <Accordion.Panel>
            Spuštění plánujeme na druhou půlku letošního roku. Nemůžeš se toho
            dočkat? Spuštění můžeš urychlit projevením zájmu na konci stránky!
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="last">
          <Accordion.Control>Mám další dotaz!</Accordion.Control>
          <Accordion.Panel>
            Všechny otázky ti moc rádi zodpovíme. Ozvi se nám v sekci
            <Anchor component={"span"}>
              <Link href={"/kontakt"}>Kontakty</Link> nebo na našich sociálních
              sítích.
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
      textAlign: "center",
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: 500,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      textAlign: "center",
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
