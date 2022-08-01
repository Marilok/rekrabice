import { useState } from "react";
import {
  Modal,
  Button,
  Group,
  Title,
  SegmentedControl,
  Center,
  Box,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoonStars, IconSun, IconSettings, IconTool } from "@tabler/icons";
import LanguagePicker from "./LanguagePicker/LanguagePicker";
interface Props {
  opened: boolean;
  setOpened: Function;
}

const SettingsModal = ({ opened, setOpened }: Props) => {
  const { colorScheme, toggleColorScheme }: any = useMantineColorScheme();

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={<Title order={1}>Nastavení</Title>}
        size="lg"
      >
        <Title order={2}>Motiv</Title>
        <SegmentedControl
          value={colorScheme}
          onChange={(e) => {
            toggleColorScheme(e);
          }}
          data={[
            {
              label: (
                <Center>
                  <IconSun size={16} />
                  <Box ml={10}>Světlý</Box>
                </Center>
              ),
              value: "light",
            },
            {
              label: (
                <Center>
                  <IconMoonStars size={16} />
                  <Box ml={10}>Tmavý</Box>
                </Center>
              ),
              value: "dark",
            },
            {
              label: (
                <Center>
                  <IconTool size={16} />
                  <Box ml={10}>Dle systému</Box>
                </Center>
              ),
              value: "system",
              disabled: true,
            },
          ]}
        />
        <Title order={2}>Jazyk</Title>
        <LanguagePicker />
      </Modal>
    </>
  );
};

export default SettingsModal;
