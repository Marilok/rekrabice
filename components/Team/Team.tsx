import { Group, Stack } from "@mantine/core";
import TeamMember from "./TeamMember";

export default function Team() {
  return (
    <>
      <Group grow={true} position={"apart"}>
        <TeamMember
          avatar="https://media.licdn.com/dms/image/C4E03AQFt4z7lGk1xgg/profile-displayphoto-shrink_800_800/0/1653076676851?e=1677715200&v=beta&t=CmAK6ItBgh1OLLIckkQcoQ-gG1cbSkpL-LEX3Hdk3_A"
          title="Exekutiva a technologie"
          name="Marek Svitek"
          email="marek.svitek@zelenakrabice.cz"
        />
        <TeamMember
          avatar="https://media.licdn.com/dms/image/C4D03AQEby_O8aw_AfQ/profile-displayphoto-shrink_800_800/0/1650707794438?e=2147483647&v=beta&t=t8ecASceJ_kZL4WkfWxe_PjT52hlYrC49ZofrORGHmc"
          title="Marketing a sales"
          name="Tadeáš Bíbr"
          email="tadeas.bibr@zelenakrabice.cz"
        />
        <TeamMember
          avatar=""
          title="CFO/COO..."
          name="Ty? 🤔😎"
          email="Zajímá tě víc? Ozvi se nám a něco spolu vymyslíme!"
          disabled={true}
        />
      </Group>
    </>
  );
}
