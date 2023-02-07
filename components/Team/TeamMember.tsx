import { Avatar, createStyles, Group, Text } from "@mantine/core";
import { IconAt } from "@tabler/icons";
import Link from "next/link";

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

export default function TeamMember({
  avatar,
  name,
  title,
  // phone,
  email,
  disabled,
}: TeamMemberProps) {
  const { classes } = useStyles();
  return (
    <div>
      <Group noWrap>
        <Avatar src={avatar} size={94} radius="md" alt="team member" />
        <div>
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
    </div>
  );
}
