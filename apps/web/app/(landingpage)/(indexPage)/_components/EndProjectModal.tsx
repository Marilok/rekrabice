"use client";

import { Button, Modal, Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react";

export default function EndProjectModal() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setOpened(true);
  }, []);

  return (
    <Modal opened={opened} onClose={() => setOpened(false)} centered size="md">
      <Stack gap="md">
        <Text>
          Projekt ReKrabice bohužel odešel do důchodu. Tento web slouží jako
          jejich pamětní deska - pro archivaci samotného obsahu a inspiraci.
          Pokud máš jakoukoliv otázku, rozhodně nám dej vědět na{" "}
          <Text component="a" href="mailto:ahoj@rekrabice.cz" fw={500}>
            ahoj@rekrabice.cz
          </Text>
        </Text>
        <Button onClick={() => setOpened(false)} fullWidth>
          Rozumím 😭
        </Button>
      </Stack>
    </Modal>
  );
}
