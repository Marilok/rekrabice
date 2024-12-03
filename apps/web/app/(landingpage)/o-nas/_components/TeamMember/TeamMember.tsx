import { Anchor, Avatar, Container, Group, Text } from "@mantine/core";
import { IconAt, IconPhoneCall } from "@tabler/icons-react";
import Link from "next/link";
import classes from "./TeamMember.module.css";

interface TeamMemberProps {
  avatar: string;
  name: string;
  title: string;
  phone?: string;
  email: string;
}

export default function TeamMember({
  avatar,
  name,
  title,
  phone,
  email,
}: TeamMemberProps) {
  return (
    <Group wrap="nowrap" gap={0} w="320">
      <Avatar src={avatar} size={94} radius="md" alt="team member" />
      <Container className="flex flex-col gap-0" ml={0}>
        <Text size="xs" tt="uppercase" fw={700} c="dimmed" mb={0}>
          {title}
        </Text>

        <Text
          size="lg"
          fw={500}
          ff="Greycliff CF, var(--mantine-font-family)"
          mb={0}
        >
          {name}
        </Text>
        {email && (
          <Group
            mt={3}
            className="flex flex-row flex-nowrap justify-center items-start"
            gap={4}
            mb={0}
          >
            <IconAt stroke={1.5} size={16} className={classes.icon} />
            <Anchor component={Link} href={`mailto:${email}`}>
              <Text size="xs" c="dimmed">
                {email}
              </Text>
            </Anchor>
          </Group>
        )}

        {phone && (
          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size={16} className={classes.icon} />
            <Text size="xs" c="dimmed">
              {phone}
            </Text>
          </Group>
        )}
      </Container>
    </Group>
  );
}
