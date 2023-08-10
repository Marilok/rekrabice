import { Anchor, Avatar, Group, Stack, Text } from "@mantine/core";
import React from "react";
import classes from "./LegalIconsList.module.css";

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: React.FC<any>;
  title: string;
  description: React.ReactNode;
  link: string;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  link,
}: ContactIconProps) {
  return (
    <Group gap="xs">
      <Avatar variant="filled" color="green" radius="md">
        <Icon size={24} color="white" />
      </Avatar>
      <Stack gap="0">
        <Text size="xs" mb={0} c="dimmed">
          {title}
        </Text>
        <Anchor className={classes.text} href={link} target="blank">
          {description}
        </Anchor>
      </Stack>
    </Group>
  );
}

export default function LegalIconsList({ data }: { data: ContactIconProps[] }) {
  const items = data.map((item) => <ContactIcon key={item.title} {...item} />);
  return <Stack>{items}</Stack>;
}
