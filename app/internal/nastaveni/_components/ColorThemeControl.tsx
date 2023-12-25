"use client";

import {
  Box,
  Center,
  SegmentedControl,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import translations from "translations/translations";

export default function ColorThemeControl() {
  const { colorScheme } = useMantineColorScheme();
  // setColorScheme
  return (
    <SegmentedControl
      value={colorScheme}
      // onChange={(value) => setColorScheme(value)}
      data={[
        {
          value: "light",
          label: (
            <Center>
              <IconSun size="1rem" stroke={1.5} />
              <Box ml={8}>{translations.systemSettings.light}</Box>
            </Center>
          ),
        },
        {
          value: "dark",
          label: (
            <Center>
              <IconMoon size="1rem" stroke={1.5} />
              <Box ml={8}>{translations.systemSettings.dark}</Box>
            </Center>
          ),
        },
        // {
        //   value: "auto",
        //   label: (
        //     <Center>
        //       <IconTool size="1rem" stroke={1.5} />
        //       <Box ml={8}>{translations.systemSettings.auto}</Box>
        //     </Center>
        //   ),
        // },
      ]}
    />
  );
}
