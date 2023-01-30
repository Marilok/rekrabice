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
  Anchor,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import {
  IconSectionSign,
  IconSun,
  IconPhone,
  IconMapPin,
  IconAt,
  IconGavel,
  IconSend,
  IconX, IconCheck,
} from '@tabler/icons';
import { useState } from 'react';
import {
  showNotification,
  hideNotification,
  updateNotification,
} from '@mantine/notifications';
import { social } from '../../helperData/socials';
import { ContactIconsList } from './ContactIcons';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl * 2.5,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl,
    },
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      marginTop: theme.spacing.xl * 3,
    },
  },
  wrapper2: {
    minHeight: 400,
    boxSizing: 'border-box',
    borderRadius: theme.radius.md,
    paddingLeft: theme.spacing.xl * 2.5,
    paddingRight: theme.spacing.xl * 2.5,
    paddingTop: theme.spacing.xl * 1,
    paddingBottom: theme.spacing.xl * 1,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
    }`,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl,
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
      maxWidth: '100%',
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

    '&:hover': {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    '&::placeholder': {
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

export default function ContactUs() {
  const { classes } = useStyles();

  const [loading, setLoading] = useState(false);

  async function sendMsg(values: any) {
    try {
      setLoading(true);
      showNotification({
        id: 'notification-message',
        loading: true,
        // title: "Odesílání",
        message: 'Odesílání',
        autoClose: false,
        radius: 'xs',
        disallowClose: true,
      });
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }).then((res) => {
        if (res.status === 200) {
          updateNotification({
            id: 'notification-message',
            color: 'teal',
            title: 'Hurá, zpráva odeslána. 🥳',
            message: 'Do pošty jsme Vám poslali potvzení o odeslání.',
            icon: <IconCheck size={16} />,
            autoClose: 10000,
            loading: false,
          });
        } else {
          console.log(res);
        }
      });
      // .catch((res) => {
      //   console.log(res);
      // });
    } catch (error: any) {
      updateNotification({
        id: 'notification-message',
        autoClose: 20000,
        title: 'Něco se pokazilo. 😥',
        message: error,
        color: 'red',
        icon: <IconX />,
        radius: 'xs',
        loading: false,
      });
    } finally {
      setLoading(false);
    }
  }

  const form = useForm({
    initialValues: {
      mail: '',
      name: '',
      msg: '',
    },

    validate: {
      mail: (value) => (/^\S+@\S+$/.test(value) ? null : 'Chybička v emailu'),
    },
  });

  const icons = social.map((item, index) => (
    <ActionIcon
      size="lg"
      className={classes.social}
      variant="transparent"
      component="a"
      key={index}
      href={item.url}
      target="_blank"
    >
      <item.icon stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <>
      <Container size="md" p={0}>
        <div className={classes.wrapper}>
          <SimpleGrid
            cols={2}
            spacing={50}
            breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
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
                {...form.getInputProps('mail')}
              />
              <TextInput
                label="Jméno či název firmy"
                placeholder="Taťka Šmoula nebo Šmoulí firma"
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
                {...form.getInputProps('name')}
              />
              <Textarea
                required
                label="Zpráva"
                placeholder="Chtěl bych začít využívat využívat ReKrabice a začít šetřit lesy! :)"
                minRows={4}
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
                {...form.getInputProps('msg')}
              />
              <Button
                fullWidth
                mt="md"
                className={classes.control}
                rightIcon={<IconSend size={14} />}
                type="submit"
                loading={loading}
                loaderPosition="right"
              >
                {loading ? 'Kontrolování' : 'Odeslat zprávu'}
              </Button>
            </form>
          </SimpleGrid>
        </div>
      </Container>
      {/* <Container p={0} mt={"xl"} size={"md"}>
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
      </Container> */}
    </>
  );
}
const contactData = [
  {
    title: 'Email',
    description: 'marek.svitek@rekrabice.cz',
    icon: IconAt,
    // type: "mail",
  },
  // {
  //   title: "Telefon",
  //   description: "(+420) 777 777 777",
  //   icon: IconPhone,
  //   // type: "phone",
  // },
  {
    title: 'Sídlo',
    description: 'TBA, Brno',
    icon: IconMapPin,
    // type: "place",
  },
  // { title: "Pracovní doba", description: "8:00 - 12:00", icon: IconSun },
];

const legalData = [
  {
    title: 'Sídlo',
    description: 'Nové sady 988/2, Brno, 602 00',
    icon: IconMapPin,
    // type: "place",
  },
  { title: 'IČO', description: '87654321', icon: IconSectionSign },
  {
    title: 'Zápis do OR',
    description: 'Společnost Zelená firma s.r.o. je zapsána v OR vedeném Krajským soudem v Brně, oddíl A, vložka 00000.',
    icon: IconGavel,
  },
];
