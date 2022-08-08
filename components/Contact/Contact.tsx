import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  Box,
  Paper,
  Container,
  Space,
  Avatar,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconSectionSign,
  IconSun,
  IconPhone,
  IconMapPin,
  IconAt,
  IconGavel,
  IconBrandTiktok,
  IconBrandFacebook,
  IconSend,
} from "@tabler/icons";
import { useState } from "react";

import { ContactIconsList } from "./ContactIcons";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: "border-box",
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl * 2.5,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
    },
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      marginTop: theme.spacing.xl * 6,
    },
  },
  wrapper2: {
    minHeight: 400,
    boxSizing: "border-box",
    borderRadius: theme.radius.md,
    paddingLeft: theme.spacing.xl * 2.5,
    paddingRight: theme.spacing.xl * 2.5,
    paddingTop: theme.spacing.xl * 1,
    paddingBottom: theme.spacing.xl * 1,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[2]
    }`,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
    },
  },

  title: {
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: 300,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    "&:hover": {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    "&::placeholder": {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
}));

const social = [
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTiktok,
];

export default function ContactUs() {
  const { classes } = useStyles();

  const [loading, setLoading] = useState(false);

  async function sendMsg(values: any) {
    try {
      setLoading(true);

      await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => {
          console.log("Response received");
          if (res.status === 200) {
            console.log("Response succeeded!");
          }
        })
        .catch((res) => {
          console.log("error", res);
        });
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const form = useForm({
    initialValues: {
      mail: "",
      name: "",
      msg: "",
    },

    validate: {
      mail: (value) => (/^\S+@\S+$/.test(value) ? null : "Chybička v emailu"),
    },
  });

  const icons = social.map((Icon, index) => (
    <ActionIcon
      key={index}
      size={28}
      className={classes.social}
      variant="transparent"
    >
      <Icon size={22} stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <>
      <Container size={"md"}>
        <div className={classes.wrapper}>
          <SimpleGrid
            cols={2}
            spacing={50}
            breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          >
            <div>
              <Title className={classes.title}>Kontaktujte nás</Title>
              <Text className={classes.description} mt="sm" mb={30}>
                Pojďme spojit síly! 😎Zanechte nám svůj mail a ozveme se Vám do
                24 hodin. 😉
              </Text>

              <ContactIconsList data={contactData} variant="white" />

              <Group mt="xl">{icons}</Group>
            </div>
            <form
              onSubmit={form.onSubmit((values) => sendMsg(values))}
              className={classes.form}
            >
              <TextInput
                label="Email"
                placeholder="tatka@smoulifirma.cz"
                required
                classNames={{ input: classes.input, label: classes.inputLabel }}
                {...form.getInputProps("mail")}
              />
              <TextInput
                label="Jméno či název firmy"
                placeholder="Taťka Šmoula nebo Šmoulí firma"
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
                {...form.getInputProps("name")}
              />
              <Textarea
                required
                label="Zpráva"
                placeholder="Chtěl bych začít využívat využívat Zelené krabice a začít šetřit lesy! :)"
                minRows={4}
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
                {...form.getInputProps("msg")}
              />

              <Button
                fullWidth
                mt="md"
                className={classes.control}
                rightIcon={<IconSend size={14} />}
                type="submit"
              >
                Odeslat zprávu
              </Button>
            </form>
          </SimpleGrid>
        </div>
      </Container>
      <Container mt={"xl"} size={"md"}>
        <div className={classes.wrapper2}>
          <Box
            sx={(theme) => ({
              padding: theme.spacing.xl,
              borderRadius: theme.radius.md,
            })}
          >
            <Title>Informace o provozovateli</Title>
            <Group mt={"md"}>
              <Avatar radius="xl" size="md" />
              <Title order={2}>
                <Text
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                  component="span"
                >
                  Zelená firma &nbsp;
                </Text>
                s.r.o.
              </Title>
            </Group>
            <Space h="xl" />

            <ContactIconsList data={legalData} variant="legal" />
          </Box>
        </div>
      </Container>
    </>
  );
}
const contactData = [
  { title: "Email", description: "kontakt@zelenakrabice.cz", icon: IconAt },
  { title: "Telefon", description: "(+420) 777 777 777", icon: IconPhone },
  {
    title: "Sídlo",
    description: "Nové sady 988/2, Brno",
    icon: IconMapPin,
  },
  { title: "Pracovní doba", description: "8:00 - 12:00", icon: IconSun },
];
const legalData = [
  {
    title: "Sídlo",
    description: "Nové sady 988/2, Brno, 602 00",
    icon: IconMapPin,
  },
  { title: "IČO", description: "87654321", icon: IconSectionSign },
  {
    title: "Zápis do OR",
    description: `Společnost Zelená firma s.r.o. je zapsána v OR vedeném Krajským soudem v Brně, oddíl A, vložka 00000.`,
    icon: IconGavel,
  },
];
