import { Card, Container, Text, Title } from "@mantine/core";
import EmailInput from "./EmailInput/EmailInput";

export default function BottomCta() {
  return (
    <Container className="flex justify-around" my="xl">
      <Card p="xl" withBorder shadow="md" maw={900}>
        <Title order={2}>Co dál?</Title>
        <Text mt="sm">
          Aby se tento projekt mohl stát realitou, potřebujeme dopravcům a
          prodejcům dokázat, že je o ReKrabice zájem. Ten můžeš snadno projevit
          tak, že nám tu zanecháš svoji mailovou adresu. V budoucnu se ti
          ozveme, jak se nám daří. 😉
        </Text>
        <EmailInput id="signup_bottom_submit" />
      </Card>
    </Container>
  );
}
