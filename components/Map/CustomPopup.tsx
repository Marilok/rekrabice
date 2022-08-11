import { Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import {
  Popover,
  Text,
  Button,
  Paper,
  Title,
  Avatar,
  useMantineTheme,
  MantineTheme,
  Group,
} from "@mantine/core";
import { IconExternalLink } from "@tabler/icons";

export default function CustomPopup({
  title,
  subsidiary,
  logo = "/favicon.svg",
}: {
  title: string;
  subsidiary?: string;
  logo?: string;
}) {
  return (
    <Popup>
      {/* style={{ backgroundColor: theme.colors.gray[7] }} */}
      <Paper className="w-80 h-full" shadow="xl" p="sm">
        <Group>
          <Title order={1}>
            {title}
            {subsidiary ? `- ${subsidiary}` : ""}
          </Title>
          <Avatar src={logo} radius="xl" size="lg" />
        </Group>
        {/* <Text>Po-Pá: 8-18h</Text> */}
        <Button
          component="a"
          href="https://mapy.cz/zakladni?x=16.6122742&y=49.1918183&z=17&source=firm&id=13078566"
          variant="outline"
          target={"_blank"}
          rightIcon={<IconExternalLink size={14} />}
          mt={"sm"}
        >
          Detail pobočky
        </Button>
      </Paper>
    </Popup>
  );
}