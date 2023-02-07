import { Button, ButtonProps, SimpleGrid, Stack, Text } from "@mantine/core";
import Link from "next/link";
import {
  GmailIcon,
  ProtonmailIcon,
  SeznamEmailIcon,
  TutanotaIcon,
} from "./EmailIcons";
import { GoogleIcon } from "./GoogleIcon";

export function GoogleButton(props: ButtonProps) {
  return (
    <Button
      leftIcon={<GoogleIcon />}
      variant="default"
      color="gray"
      {...props}
    />
  );
}
export function GmailButton(props: ButtonProps) {
  return (
    <Button
      leftIcon={<GmailIcon />}
      variant="default"
      color="gray"
      component={Link}
      href="https://mail.google.com/"
      target="_blank"
      {...props}
    />
  );
}
export function SeznamEmailButton(props: ButtonProps) {
  return (
    <Button
      leftIcon={<SeznamEmailIcon />}
      variant="default"
      color="gray"
      component={Link}
      href="https://email.seznam.cz/"
      target="_blank"
      {...props}
    />
  );
}
export function ProtonmailButton(props: ButtonProps) {
  return (
    <Button
      leftIcon={<ProtonmailIcon />}
      variant="default"
      color="gray"
      component={Link}
      href="https://mail.proton.me/"
      target="_blank"
      {...props}
    />
  );
}
export function TutanotaButton(props: ButtonProps) {
  return (
    <Button
      leftIcon={<TutanotaIcon />}
      variant="default"
      color="gray"
      component={Link}
      href="https://mail.tutanota.com/"
      target="_blank"
      {...props}
    />
  );
}

export function EmailButtons() {
  return (
    <Stack>
      <Text align="center" mt="lg">
        Rychlé odkazy na populární emailové klienty:
      </Text>
      <SimpleGrid cols={2}>
        <GmailButton>Gmail</GmailButton>
        <SeznamEmailButton>Email.cz</SeznamEmailButton>
        <ProtonmailButton>ProtonMail</ProtonmailButton>
        <TutanotaButton>Tutanota</TutanotaButton>
      </SimpleGrid>
    </Stack>
  );
}
