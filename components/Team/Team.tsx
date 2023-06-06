import { Flex } from "@mantine/core";
import TeamMember from "./TeamMember";

export default function Team() {
  return (
    <Flex wrap="wrap" gap={10}>
      <TeamMember
        avatar="/images/avatars/marek.jpeg"
        title="Exekutiva a technologie"
        name="Marek Svitek"
        email="marek.svitek@rekrabice.cz"
      />
      <TeamMember
        avatar="/images/avatars/tadeas.jpeg"
        title="Marketing a sales"
        name="Tadeáš Bíbr"
        email="tadeas.bibr@rekrabice.cz"
      />
      <TeamMember
        avatar=""
        title="CFO/COO..."
        name="Ty? 🤔😎"
        email="Zajímá tě víc? Ozvi se nám a něco spolu vymyslíme!"
        disabled
      />
    </Flex>
  );
}
