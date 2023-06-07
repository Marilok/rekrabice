import { IconMoon, IconSun } from "@tabler/icons-react";
import {
  Box,
  Center,
  SegmentedControl,
  useMantineColorScheme,
} from "../../mantineClientComponents";

export default function SettinsPage() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
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
  );
}
