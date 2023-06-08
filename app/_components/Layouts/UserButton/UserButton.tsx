import {
  Avatar,
  createStyles,
  Group,
  Text,
  UnstyledButton,
  UnstyledButtonProps,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  user: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
    },
  },
}));

interface UserButtonProps extends UnstyledButtonProps {
  image: string | undefined;
  name: string | undefined;
  email: string | undefined;
}

export default function UserButton({ image, name, email }: UserButtonProps) {
  const { classes } = useStyles();

  return (
    <UnstyledButton className={`${classes.user} block w-full`} p="sm">
      <Group>
        <Avatar src={image} radius="xl" alt="Avatar image" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {name}
          </Text>

          <Text color="dimmed" size="xs">
            {email}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  );
}
