import { Anchor, Space, Text } from "@mantine/core";
import ObsluhaLayout from "../../components/Layouts/Obsluha/layout";

export default function ContactPage() {
  return (
    <ObsluhaLayout>
      <Text weight="bold">Spěchá to hodně?</Text>
      <Text>
        Zavolejte prosím Tadeášovi{" "}
        <Anchor href="tel:+420606834894">+420 606 834 894</Anchor>
      </Text>
      <Space h="md" />
      <Text weight="bold">Nespěchá to tolik?</Text>
      <Text>
        Pošlete prosím email Tadeášovi na{" "}
        <Anchor href="mailto:tadeas.bibr@rekrabice.cz">
          tadeas.bibr@rekrabice.cz
        </Anchor>
      </Text>
    </ObsluhaLayout>
  );
}
