import {
  Box,
  Center,
  SegmentedControl,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import ObsluhaWrapper from "../../components/Layouts/Obsluha/ObsluhaWrapper";

export default function SettinsPage() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ObsluhaWrapper title="Obsluha">
      <SegmentedControl
        value={colorScheme}
        onChange={(value: "light" | "dark") => toggleColorScheme(value)}
        data={[
          {
            value: "light",
            label: (
              <Center>
                <IconSun size="1rem" stroke={1.5} />
                <Box ml={8}>Světlý</Box>
              </Center>
            ),
          },
          {
            value: "dark",
            label: (
              <Center>
                <IconMoon size="1rem" stroke={1.5} />
                <Box ml={8}>Tmavý</Box>
              </Center>
            ),
          },
        ]}
      />
    </ObsluhaWrapper>
  );
}
