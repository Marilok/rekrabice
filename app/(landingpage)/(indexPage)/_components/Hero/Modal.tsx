import { Anchor, Center, Modal as MantineModal } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import EmailInput from "../EmailInput/EmailInput";

export default function Modal({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: any;
}) {
  return (
    <MantineModal
      opened={opened}
      onClose={() => setOpened(false)}
      centered
      size="lg"
    >
      <Center className="w-full h-72 relative">
        <Image
          src="/prototype.png"
          fill
          alt="Prototyp krabice"
          className="m-auto rounded shadow object-contain"
        />
      </Center>
      Chceš být první, komu přijde domů zásilka v ReKrabici? Nech nám tu tvoji
      mailovou adresu a my se ti ozveme, až budou k dispozici!
      <EmailInput id="signup_hero_submit" />
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
    </MantineModal>
  );
}
