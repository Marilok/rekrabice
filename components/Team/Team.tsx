import { Avatar, createStyles, Flex, Group, Text } from "@mantine/core";
import { IconAt } from "@tabler/icons";
import Link from "next/link";

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

const useStyles = createStyles((theme) => ({
  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface TeamMemberProps {
  avatar: string;
  name: string;
  title: string;
  // phone: string;
  email: string;
  disabled?: boolean;
}

function TeamMember({
  avatar,
  name,
  title,
  // phone,
  email,
  disabled,
}: TeamMemberProps) {
  const { classes } = useStyles();
  return (
    <Group noWrap className="w-80">
      <Avatar src={avatar} size={94} radius="md" alt="team member" />
      <div className="pr-4">
        <Text
          size="xs"
          sx={{ textTransform: "uppercase" }}
          weight={700}
          color="dimmed"
        >
          {title}
        </Text>

        <Text size="lg" weight={500} className={classes.name}>
          {name}
        </Text>

        <Group noWrap spacing={10} mt={3}>
          <IconAt stroke={1.5} size={16} className={classes.icon} />
          <Link href={disabled ? "" : `mailto:${email}`}>
            <Text size="xs" color="dimmed">
              {email}
            </Text>
          </Link>
        </Group>

        {/* <Group noWrap spacing={10} mt={5}>
            <IconPhoneCall stroke={1.5} size={16} className={classes.icon} />
            <Text size="xs" color="dimmed">
              {phone}
            </Text>
          </Group> */}
      </div>
    </Group>
  );
}
