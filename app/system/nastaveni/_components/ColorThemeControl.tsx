import { IconMoon, IconSun, IconTool } from "@tabler/icons-react";
import {
  Box,
  Center,
  SegmentedControl,
} from "../../../mantineClientComponents";

export default function ColorThemeControl() {
  // const { colorScheme, setColorScheme } = useMantineColorScheme();
  //  migrate to mantine v7
  return (
    <SegmentedControl
      value="auto"
      //   value={colorScheme}
      //   onChange={(value: "light" | "dark" | "auto") => setColorScheme(value)}
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
        {
          value: "auto",
          label: (
            <Center>
              <IconTool size="1rem" stroke={1.5} />
              <Box ml={8}>Podle systému</Box>
            </Center>
          ),
        },
      ]}
    />
  );
}
