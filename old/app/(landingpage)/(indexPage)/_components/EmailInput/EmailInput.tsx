"use client";

import { Autocomplete, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification, updateNotification } from "@mantine/notifications";
import { IconCheck, IconSend, IconX } from "@tabler/icons-react";
import { useState } from "react";

export default function EmailInput({ id }: { id: string }) {
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
        withCloseButton: false,
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
          // console.log(res);
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

    validate: {
      mail: (value) => (/^\S+@\S+$/.test(value) ? null : "Překlep v mailu"),
    },
  });
  const data =
    form.values.mail.trim().length > 0 && !form.values.mail.includes("@")
      ? ["gmail.com", "seznam.cz", "email.cz", "centrum.cz"].map(
          (provider) => `${form.values.mail}@${provider}`,
        )
      : [];
  return (
    <form onSubmit={form.onSubmit((values) => sendMsg(values))}>
      <Autocomplete
        data={data}
        label="Tvůj email"
        classNames={{
          section: "max-md:hidden",
        }}
        rightSection={
          <Button
            type="submit"
            rightSection={<IconSend size={16} />}
            id={id}
            loading={loading}
            visibleFrom="md"
          >
            <span id={id}>Dejte mi vědět</span>
          </Button>
        }
        rightSectionWidth="150"
        placeholder="petr@seznam.cz"
        width="xl"
        pt="md"
        {...form.getInputProps("mail")}
      />
      <Button
        type="submit"
        rightSection={<IconSend size={16} />}
        id={id}
        mt="xs"
        fullWidth
        loading={loading}
        hiddenFrom="md"
      >
        <span id={id}>Dejte mi vědět</span>
      </Button>
    </form>
  );
}
