import { Button, CloseButton, Group, Paper, Text } from "@mantine/core";

export default function CookiesBanner() {
  return (
    <Paper withBorder p="lg" radius="md" shadow="md">
      <Group position="apart" mb="xs">
        <Text size="md" weight={500}>
          Bez cookies to nezabalíme 🍪
        </Text>
        <CloseButton mr={-9} mt={-9} />
      </Group>
      <Text color="dimmed" size="xs">
        Abychom věděli, kolik máme na webu návštěvníků a co je zajímá nejvíce
        potřebujeme to měřit pomocí cookies. Přijmutím cookies pomůžeš naší
        vizi, přinést cirkularitu k nám do Česka.
      </Text>
      <Group position="right" mt="xs">
        <Button variant="outline" color="red" size="xs">
          Odmítnout
        </Button>
        <Button variant="outline" size="xs">
          Přijmout
        </Button>
      </Group>
    </Paper>
  );
}
