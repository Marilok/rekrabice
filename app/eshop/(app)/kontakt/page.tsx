import { Avatar, Group, Text } from "@mantine/core";

import { IconAt, IconPhoneCall } from "@tabler/icons-react";

export default function Page() {
  return (
    <Group wrap="nowrap">
      <Avatar src="/images/avatars/marek.png" size={94} radius="md" />
      <div>
        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
          Technická podpora
        </Text>

        <Text fz="lg" fw={500}>
          Marek Svitek
        </Text>

        <Group wrap="nowrap" gap={10} mt={3}>
          <IconAt stroke={1.5} size="1rem" />
          <Text fz="xs" c="dimmed">
            marek.svitek@rekrabice.cz
          </Text>
        </Group>

        <Group wrap="nowrap" gap={10} mt={5}>
          <IconPhoneCall stroke={1.5} size="1rem" />
          <Text fz="xs" c="dimmed">
            +420 737 514 190
          </Text>
        </Group>
      </div>
    </Group>
  );
}
