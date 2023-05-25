import { Avatar, Button, Group, Paper, Title } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import "leaflet/dist/leaflet.css";
import { Popup } from "react-leaflet";

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
      <Paper className="w-full h-full" shadow="xl" p="sm">
        <Group>
          <Avatar src={logo} alt="logo image" radius="xl" size="md" />
          <Title order={2}>
            {title}
            {subsidiary ? `- ${subsidiary}` : ""}
          </Title>
        </Group>
        {/* <Text>Po-Pá: 8-18h</Text> */}
        <Button
          component="a"
          href="https://mapy.cz/zakladni?x=16.6122742&y=49.1918183&z=17&source=firm&id=13078566"
          variant="outline"
          target="_blank"
          rightIcon={<IconExternalLink size={14} />}
          mt="sm"
        >
					Detail pobočky
        </Button>
      </Paper>
    </Popup>
  );
}
