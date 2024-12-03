import { Anchor, Card, Container, Text, Title } from "@mantine/core";
import Link from "next/link";
import EmailInput from "./EmailInput/EmailInput";

export default function BottomCta() {
  return (
    <Container className="flex justify-around" my="xl">
      <Card p="xl" withBorder shadow="md" maw={900}>
        <Title order={2}>Co dál?</Title>
        <Text mt="sm">
          Zajímá tě o ReKrabicích více? Zanech nám svůj email a my se ti ozveme,
          jakmile budeme mít novinky. 📩
        </Text>
        <EmailInput id="signup_bottom_submit" />
        <Anchor
          component={Link}
          href="/gdpr-newsletter"
          size="xs"
          c="dimmed"
          target="_blank"
          mt="4"
          ml="2"
        >
          Podmínky zpracování osobních údajů
        </Anchor>
      </Card>
    </Container>
  );
}
