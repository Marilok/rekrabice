import { Container } from "@mantine/core";
import TeamMember from "./TeamMember/TeamMember";

export default function Team() {
  return (
    <Container className="flex gap-2 flex-wrap" maw="1200">
      <TeamMember
        avatar="/images/avatars/marek.png"
        title="Produkt a vývoj"
        name="Marek Svitek"
        email="marek.svitek@rekrabice.cz"
      />
      <TeamMember
        avatar="/images/avatars/tadeas.png"
        title="Marketing a sales"
        name="Tadeáš Bíbr"
        email="tadeas.bibr@rekrabice.cz"
      />
      <TeamMember
        avatar="/images/avatars/barca.png"
        title="Marketing"
        name="Barbora Valariková"
        email="barbora.valarikova@rekrabice.cz"
      />
      <TeamMember
        avatar=""
        title="Tvůj dream job"
        name=""
        email="Chceš měnit svět s námi k lepšímu? Ozvi se nám!"
      />
    </Container>
  );
}
