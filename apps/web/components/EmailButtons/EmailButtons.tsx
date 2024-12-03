import { Button, ButtonProps, SimpleGrid, Stack, Text } from "@mantine/core";
import { IconMail } from "@tabler/icons-react";
import translations from "translations/translations";
import {
  GmailIcon,
  OutlookIcon,
  ProtonmailIcon,
  SeznamEmailIcon,
  TutanotaIcon,
} from "./EmailIcons";

export function GmailButton(props: ButtonProps) {
  return (
    <Button
      leftSection={<GmailIcon />}
      variant="default"
      color="gray"
      component="a"
      href="https://mail.google.com/"
      target="_blank"
      {...props}
    />
  );
}

export function SeznamEmailButton(props: ButtonProps) {
  return (
    <Button
      leftSection={<SeznamEmailIcon />}
      variant="default"
      color="gray"
      component="a"
      href="https://email.seznam.cz/"
      target="_blank"
      {...props}
    />
  );
}

export function ProtonmailButton(props: ButtonProps) {
  return (
    <Button
      leftSection={<ProtonmailIcon />}
      variant="default"
      color="gray"
      component="a"
      href="https://mail.proton.me/"
      target="_blank"
      {...props}
    />
  );
}

export function TutanotaButton(props: ButtonProps) {
  return (
    <Button
      leftSection={<TutanotaIcon />}
      variant="default"
      color="gray"
      component="a"
      href="https://mail.tutanota.com/"
      target="_blank"
      {...props}
    />
  );
}

export function OutlookButton(props: ButtonProps) {
  return (
    <Button
      leftSection={<OutlookIcon />}
      variant="default"
      color="gray"
      component="a"
      href="https://mail.outlook.com/"
      target="_blank"
      {...props}
    />
  );
}

export function DefaultEmailButton(props: ButtonProps) {
  return (
    <Button
      leftSection={<IconMail />}
      variant="default"
      color="gray"
      component="a"
      // TODO: fix this length
      // eslint-disable-next-line max-len
      href={`mailto:${translations.emailButtons.closeEmail}?subject=${translations.emailButtons.closeSubject}`}
      target="_blank"
      {...props}
    />
  );
}

export function EmailButtons({
  title = translations.emailButtons.title,
  subtitle = translations.emailButtons.subtitle,
}: {
  title?: string;
  subtitle?: any;
}) {
  return (
    <Stack>
      <Text fw="bold" fz="lg">
        {title}
      </Text>
      <Text>{subtitle}</Text>
      <SimpleGrid cols={2}>
        <SeznamEmailButton>Email.cz</SeznamEmailButton>
        <GmailButton>Gmail</GmailButton>
        <OutlookButton>Outlook</OutlookButton>
        <ProtonmailButton>ProtonMail</ProtonmailButton>
        <TutanotaButton>Tutanota</TutanotaButton>
        <DefaultEmailButton>Otevřít aplikaci</DefaultEmailButton>
      </SimpleGrid>
    </Stack>
  );
}
