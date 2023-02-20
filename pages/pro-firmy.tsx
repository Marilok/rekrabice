import {
  Accordion,
  Autocomplete,
  Button,
  Container,
  createStyles,
  Title
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification, updateNotification } from "@mantine/notifications";
import { IconCheck, IconSend, IconX } from "@tabler/icons";
import { useState } from "react";
// import Image from 'next/image'
// import logoEconeaSrc from "../public/images/logos/econea.svg";
// import logoTierraVerdeSrc from "../public/images/logos/tierra-verde.png";

import LandingPageWrapper from "../components/Layouts/LandingPage/LandingPageWrapper";

export default function LandingPage() {
  return (
    <LandingPageWrapper title="Jsem člověk">
      Na tomto se zatím pracuje
    </LandingPageWrapper>
  );
}
{
  /* <HeroBullets />
      <Container mt="xl">
        {/* <StepperComponent /> */
}
//   <Title order={2}>Zapojené e-shopy</Title>
//   <Flex justify="space-around" my="xl">
//     <Image
//       src="/images/logos/econea.svg"
//       height="80px"
//       width="auto"
//       alt="Econea logo"
//       className=" opacity-80 hover:scale-110	 hover:opacity-100 transition-opacity"
//     />
//     <Image
//       src="/images/logos/tierra-verde.png"
//       height="80px"
//       width="auto"
//       alt="Econea logo"
//       className="max-w-full opacity-80 hover:scale-110 hover:opacity-100 transition-opacity"
//     />
//   </Flex>
// </Container>
// <Container>
//   <Title order={2}>Zapojení dopravci</Title>
//   <Flex justify="space-around" my="xl" />
//   <Card p="xl" withBorder shadow="md">
//     <Title order={2}>Chceš být součástí?</Title>
//     <Text mt="sm">
//       Pojďme se spojit a my vám povíme, jak i vaše firma firma může
//       využívat vratné krabice.
//     </Text>
//     <EmailInput />

//     <Button
//       mt="lg"
//       component={Link}
//       href="/kontakt"
//       variant="gradient"
//       gradient={{ from: "green", to: "lime" }}
//       rightIcon={<IconMail />}
//     >
//       Kontaktujte nás
//     </Button>
//   </Card>
//   <Faq />
// </Container>
const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    minHeight: 650,
  },

  title: {
    marginBottom: theme.spacing.xl * 1.5,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,

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
      <Container size="xs">
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
          {...form.getInputProps("email")}
        />
      </Container>
    </form>
  );
}

function Faq() {
  const { classes } = useStyles();

  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        Často kladené dotazy
      </Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>Kolik mě to bude stát?</Accordion.Control>
          <Accordion.Panel>
            Vy výsledku nic. Nicméně za krabici zaplatíš 50 Kč jako vratnou
            zálohu, kterou dostaneš zpět po vrácení krabice.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

// function HeroBullets() {
//   const { classes } = useStylesHero();
//   return (
//     <div>
//       <Container>
//         <div className={classes.inner}>
//           <div className={classes.content}>
//             <Title className={classes.title}>
//               Zálohovaná a <span className={classes.highlight}>vratná</span>{" "}
//               krabice pro e-shopové zásilky.
//             </Title>
//             <Text color="dimmed" mt="md">
//               Rozlučte se s jednorázovými kartónovými krabicemi a přivítejte
//               udržitelnost s naší znovupoužitelnou krabicí.
//             </Text>

//             <List
//               mt={30}
//               spacing="sm"
//               size="sm"
//               icon={
//                 <ThemeIcon size={20} radius="xl">
//                   <IconCheck size={12} stroke={1.5} />
//                 </ThemeIcon>
//               }
//             >
//               <List.Item>
//                 <b>Ekologická</b> – už to není žádný greenwashing, ale skutečná
//                 změna. Za život krabice celkově ušetří 70 % CO2 oproti těm
//                 kartónovým
//               </List.Item>
//               <List.Item>
//                 <b>Recyklovatelná</b> – po skončení životnosti krabice (okolo
//                 100 cest) se dají recyklovat a vytvořit z nich tak nové
//               </List.Item>
//               <List.Item>
//                 <b>Žádné nové náklady</b> – vratné krabice Vás budou stát
//                 stejně, v některých případech i méně než ty kartónové
//               </List.Item>
//             </List>

//             <Group mt={30}>
//               <Button
//                 radius="xl"
//                 size="md"
//                 component={Link}
//                 href="/kontakt"
//                 className={classes.control}
//               >
//                 Kontaktujte nás
//               </Button>
//               <Button
//                 variant="default"
//                 radius="xl"
//                 size="md"
//                 component={Link}
//                 href="/o-nas"
//                 className={classes.control}
//               >
//                 O nás
//               </Button>
//             </Group>
//           </div>
//           <Image
//             src={boox}
//             className={classes.image}
//             alt="me"
//             width={"2000"}
//             height="64"
//           />
//         </div>
//       </Container>
//     </div>
//   );
// }

// const useStylesHero = createStyles((theme) => ({
//   inner: {
//     display: "flex",
//     justifyContent: "space-between",
//     paddingTop: theme.spacing.xl * 4,
//     paddingBottom: theme.spacing.xl * 4,
//   },

//   content: {
//     maxWidth: 480,
//     marginRight: theme.spacing.xl * 3,

//     [theme.fn.smallerThan("md")]: {
//       maxWidth: "100%",
//       marginRight: 0,
//     },
//   },

//   title: {
//     color: theme.colorScheme === "dark" ? theme.white : theme.black,
//     fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//     fontSize: 44,
//     lineHeight: 1.2,
//     fontWeight: 900,

//     [theme.fn.smallerThan("xs")]: {
//       fontSize: 28,
//     },
//   },

//   control: {
//     [theme.fn.smallerThan("xs")]: {
//       flex: 1,
//     },
//   },

//   image: {
//     flex: 1,
//     maxWidth: 400,

//     [theme.fn.smallerThan("md")]: {
//       display: "none",
//     },
//   },

//   highlight: {
//     position: "relative",
//     backgroundColor: theme.fn.variant({
//       variant: "light",
//       color: theme.primaryColor,
//     }).background,
//     borderRadius: theme.radius.sm,
//     padding: "4px 12px",
//   },
// }));
