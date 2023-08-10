import { Anchor, Space, Text } from "@mantine/core";
import translations from "../../../translations/translations";

export default function ContactPage() {
  return (
    <>
      <Text fw="bold">{translations.systemContact.boldText1}</Text>
      <Text>
        {translations.systemContact.text1}{" "}
        <Anchor href="tel:+420606834894">
          {translations.systemContact.anchorText1}
        </Anchor>
      </Text>
      <Space h="md" />
      <Text fw="bold">{translations.systemContact.boldText2}</Text>
      <Text>
        {translations.systemContact.text2}{" "}
        <Anchor href="mailto:tadeas.bibr@rekrabice.cz">
          {translations.systemContact.anchorText2}
        </Anchor>
      </Text>
    </>
  );
}
