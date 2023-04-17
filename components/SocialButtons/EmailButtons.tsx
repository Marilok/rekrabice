import { Button, ButtonProps, SimpleGrid, Stack, Text } from "@mantine/core";
import {
  GmailIcon,
  OutlookIcon,
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
      component={"a"}
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
      component={"a"}
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
      component={"a"}
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
      component={"a"}
      href="https://mail.tutanota.com/"
      target="_blank"
      {...props}
    />
  );
}

export function OutlookButton(props: ButtonProps) {
  return (
    <Button
      leftIcon={<OutlookIcon />}
      variant="default"
      color="gray"
      component={"a"}
      href="https://mail.outlook.com/"
      target="_blank"
      {...props}
    />
  );
}

export function EmailButtons() {
  return (
    <Stack>
      <Text align="center">
        <span className="font-bold text-lg">
          Do pošty Vám jsme Vám poslali odkaz pro vstup do systému.
        </span>
        <br />
        Rychlé odkazy na populární emaily:
      </Text>
      <SimpleGrid cols={2}>
        <GmailButton>Gmail</GmailButton>
        <SeznamEmailButton>Email.cz</SeznamEmailButton>
        <OutlookButton>Outlook</OutlookButton>
        <ProtonmailButton>ProtonMail</ProtonmailButton>
        <TutanotaButton>Tutanota</TutanotaButton>
      </SimpleGrid>
    </Stack>
  );
}
