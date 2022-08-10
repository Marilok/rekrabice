import { Group, Stack } from "@mantine/core";
import TeamMember from "./TeamMember";

export default function Team() {
  return (
    <>
      <Group grow={true} position={"apart"}>
        <TeamMember
          avatar="https://media-exp1.licdn.com/dms/image/C4E03AQFt4z7lGk1xgg/profile-displayphoto-shrink_800_800/0/1653076676851?e=1665619200&v=beta&t=mjW6isK_99j9wl44KaZ3FCxaTGsDbLh9ZWt9ttY4psQ"
          title="CEO & CTO"
          name="Marek Svitek"
          email="marek.svitek@zelenakrabice.cz"
        />
        <TeamMember
          avatar=""
          title="CMO/CFO/COO"
          name="Ty? 🤔😎"
          email="Zajímá tě víc? Ozvi se nám a něco spolu vymyslíme!"
        />
      </Group>
    </>
  );
}
