import { Container } from "@mantine/core";
import TeamMember from "./TeamMember/TeamMember";

export default function Team() {
  return (
    <Container className="flex gap-2 flex-wrap">
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
        title=""
        name="Ty? 🤔"
        email="Chceš pomoci redukovat množství odpadu? Ozvi se nám!"
      />
    </Container>
  );
}
