import { Anchor, Text, Title } from "@mantine/core";
import Link from "next/link";
import translations from "../../../translations/translations";

export default function UpperText() {
  return (
    <div className="relative">
      <Title ta="center" className="font-extrabold">
        {translations.login.heading}
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        {translations.login.dontAccept}{" "}
        <Anchor href="/kontakt" component={Link} underline="hover">
          {translations.login.contactUs}
        </Anchor>
      </Text>
    </div>
  );
}
