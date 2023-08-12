"use client";

import {
  ActionIcon,
  Avatar,
  Button,
  Container,
  Group,
  SimpleGrid,
  Space,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification, updateNotification } from "@mantine/notifications";
import { IconCheck, IconSend, IconX } from "@tabler/icons-react";
import { useState } from "react";
import {
  CONTACT_US_DATA,
  IMPRESSUM_DATA,
} from "../../../../../data/CONTACT_DATA";
import SOCIALS from "../../../../../data/SOCIALS";
import ContactIconsList from "../ContactIconsList/ContactIconsList";
import LegalIconsList from "../LegalIconsList/LegalIconsList";
import classes from "./Contact.module.css";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  async function sendMsg(values: any) {
    try {
      setLoading(true);
      showNotification({
        id: "notification-message",
        loading: true,
        message: "Odesílání",
        autoClose: false,
        radius: "xs",
        withCloseButton: false,
      });
      await fetch("/api/contact", {
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
            title: "Hurá, zpráva dorazila. 🥳",
            message: "Do pošty jsme ti poslali potvzení o odeslání.",
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
        radius: "xs",
        loading: false,
      });
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
  const icons = SOCIALS.map((item: any) => (
    <ActionIcon
      size="lg"
      color="white"
      className="hover:text-[var(--mantine-color-green-3)]"
      variant="transparent"
      component="a"
      key={item.label}
      href={item.url}
      target="_blank"
    >
      <item.icon stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <>
      <Container size="md" p={0} mt="xl" mx={{ base: "sm", md: "auto" }}>
        <Container
          className={classes.wrapper}
          px={{ base: "lg", md: "calc(var(--mantine-spacing-xl)*1.5)" }}
          py={{ base: "xl", md: "calc(var(--mantine-spacing-xl)*1.5)" }}
        >
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={50}>
            <div>
              <Title c="white" className="leading-none">
                Kontaktujte nás
              </Title>
              <Text maw={300} mt="sm" mb={30} c="white" ta="justify">
                Pojďme spojit síly! 😎 Ať už ve formě firemní spolupráce nebo
                jako parťáka do týmu. Zanech nám svůj email a my se ti ozveme co
                nejdříve. 😉
              </Text>
              <ContactIconsList data={CONTACT_US_DATA} />
              <Group mt="xl">{icons}</Group>
            </div>
            <form onSubmit={form.onSubmit((values) => sendMsg(values))}>
              <Container
                bg="white"
                p="xl"
                style={{
                  borderRadius: "var(--mantine-radius-md)",
                  boxShadow: "var(--mantine-shadow-lg)",
                }}
              >
                <TextInput
                  label="Email"
                  placeholder="petr@skvelafirma.cz"
                  required
                  classNames={{
                    input: classes.input,
                    label: classes.inputLabel,
                  }}
                  {...form.getInputProps("mail")}
                />
                <TextInput
                  label="Tvoje jméno či název firmy, za kterou píšeš"
                  placeholder="Petr nebo Skvělá firma"
                  mt="md"
                  classNames={{
                    input: classes.input,
                    label: classes.inputLabel,
                  }}
                  {...form.getInputProps("name")}
                />
                <Textarea
                  required
                  label="Zpráva"
                  placeholder="Chtěl bych začít využívat ReKrabice, a tak ulevit našim lesům! :)"
                  mt="md"
                  autosize
                  classNames={{
                    input: classes.input,
                    label: classes.inputLabel,
                  }}
                  {...form.getInputProps("msg")}
                />
                <Button
                  fullWidth
                  mt="md"
                  className={classes.control}
                  rightSection={<IconSend size={14} />}
                  type="submit"
                  loading={loading}
                >
                  {loading ? "Kontrolování" : "Odeslat zprávu"}
                </Button>
              </Container>
            </form>
          </SimpleGrid>
        </Container>
      </Container>
      <Container p={0} mt="xl" size="md" mx={{ base: "sm", md: "auto" }}>
        <Container
          className={classes.wrapper2}
          px={{ base: "lg", md: "calc(var(--mantine-spacing-xl)*1.5)" }}
          py={{ base: "lg", md: "xl" }}
        >
          <Title>Informace o provozovateli</Title>
          <Group mt="md">
            <Avatar
              radius="xl"
              size="md"
              alt="avatar image"
              src="/favicon.svg"
            />
            <Title order={2}>
              <Text
                fz={28}
                fw={900}
                variant="gradient"
                gradient={{ from: "green", to: "teal", deg: 45 }}
                component="span"
              >
                Avoxo&nbsp;
              </Text>
              <Text fz="md" fw={700} component="span">
                s.r.o.
              </Text>
            </Title>
          </Group>
          <Space h="xl" />
          <LegalIconsList data={IMPRESSUM_DATA} />
        </Container>
      </Container>
    </>
  );
}
