import { Anchor, Space, Text } from "../../mantineClientComponents";
import StoreLayout from "../layout";

export default async function ContactPage() {
  return (
    <StoreLayout>
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
    </StoreLayout>
  );
}
