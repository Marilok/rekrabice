import {
  Button,
  ButtonProps,
  Group,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { GoogleIcon } from "./GoogleIcon";
import {
  ProtonmailIcon,
  GmailIcon,
  TutanotaIcon,
  SeznamEmailIcon,
} from "./EmailIcons";

import Link from "next/link";

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
    <Link href="https://mail.google.com/" passHref>
      <Button
        leftIcon={<GmailIcon />}
        variant="default"
        color="gray"
        component="a"
        target={"_blank"}
        {...props}
      />
    </Link>
  );
}
export function SeznamEmailButton(props: ButtonProps) {
  return (
    <Link href="https://email.seznam.cz/" passHref>
      <Button
        leftIcon={<SeznamEmailIcon />}
        variant="default"
        color="gray"
        component="a"
        target={"_blank"}
        {...props}
      />
    </Link>
  );
}
export function ProtonmailButton(props: ButtonProps) {
  return (
    <Link href="https://mail.proton.me/" passHref>
      <Button
        leftIcon={<ProtonmailIcon />}
        variant="default"
        color="gray"
        component="a"
        target={"_blank"}
        {...props}
      />
    </Link>
  );
}
export function TutanotaButton(props: ButtonProps) {
  return (
    <Link href="https://mail.tutanota.com/" passHref>
      <Button
        leftIcon={<TutanotaIcon />}
        variant="default"
        color="gray"
        component="a"
        target={"_blank"}
        {...props}
      />
    </Link>
  );
}

export function EmailButtons() {
  return (
    <Stack>
      <Text align="center" mt={"lg"}>
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
