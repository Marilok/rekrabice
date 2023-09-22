import { Anchor, Text, Title } from "@mantine/core";
import Link from "next/link";
import translations from "translations/login";

export default function UpperText() {
  return (
    <div className="relative">
      <Title ta="center" className="font-extrabold">
        {translations.heading}
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        {translations.dontAccept}{" "}
        <Anchor href="/kontakt" component={Link} underline="hover">
          {translations.contactUs}
        </Anchor>
      </Text>
    </div>
  );
}
