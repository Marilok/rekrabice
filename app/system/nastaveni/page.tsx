import { Stack, TextInput, Title } from "@mantine/core";
import { IconAt, IconBuildingBank, IconPhone } from "@tabler/icons-react";
import ColorThemeControl from "./_components/ColorThemeControl";

export default function Page() {
  const email = "something@example.com";
  const phoneNumber = "+420 123 456 789";
  const bankAccount = "123456789/1234";
  return (
    <Stack gap="60">
      <Stack>
        <Title order={2}>Osobní údaje</Title>
        <TextInput
          label="Email"
          type="email"
          disabled
          value={email}
          leftSection={<IconAt size={16} />}
        />
        <TextInput
          label="Telefon"
          disabled
          value={phoneNumber}
          leftSection={<IconPhone size={16} />}
        />
        <TextInput
          label="Bankovní účet"
          disabled
          value={bankAccount}
          leftSection={<IconBuildingBank size={16} />}
        />
      </Stack>

      <Stack>
        <Title order={2}>Vzhled</Title>
        <ColorThemeControl />
      </Stack>
    </Stack>
  );
}
