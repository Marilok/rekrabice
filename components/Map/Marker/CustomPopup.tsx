import { Button, Group, Text, Title } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import "leaflet/dist/leaflet.css";
import { Popup } from "react-leaflet";

export default function CustomPopup({
  title,
  city,
  zip,
  street,
  houseNumber,
  streetNumber,
  link,
}: {
  title: string;
  city: string;
  zip: string;
  street: string;
  houseNumber: string;
  streetNumber: string;
  link: string;
}) {
  return (
    <Popup>
      <Group gap={0}>
        <Title order={2}>{title}</Title>
        <Text my={0}>
          {street} {houseNumber}/{streetNumber}
        </Text>
        <Text my={0}>
          {zip} {city}
        </Text>
      </Group>
      <Button
        component="a"
        href={link}
        variant="outline"
        target="_blank"
        c={"green"}
        rightSection={<IconExternalLink size={14} />}
        mt="sm"
        fullWidth
      >
        Detail pobočky
      </Button>
    </Popup>
  );
}
