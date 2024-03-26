import {
  ActionIcon,
  AppShell,
  Burger,
  Button,
  Center,
  Container,
  Group,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoonStars, IconRecycle, IconSun } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import classes from "./Header.module.css";

interface HeaderActionProps {
  // links: {
  //   link: string;
  //   label: string;
  //   links?: { link: string; label: string }[];
  // }[];
  isOpen: boolean;
  toggle: () => void;
}

export default function HeaderAction({ isOpen, toggle }: HeaderActionProps) {
  const { setColorScheme } = useMantineColorScheme();

  const computedColorScheme = useComputedColorScheme("light");

  return (
    <AppShell.Header className="!mb-0">
      <Container
        size="lg"
        h="100%"
        display="flex"
        className="justify-between items-center"
      >
        <Group>
          <Link href="/" className="contents">
            <Center
              bg="brand.10"
              w="140"
              h="var(--app-shell-header-height)"
              display="block"
              pos="relative"
            >
              <Image
                src="/branding/logo_colored.svg"
                fill
                className="cursor-pointer"
                alt="Logo"
              />
            </Center>
          </Link>
        </Group>

        {/* <Group gap={5} visibleFrom="md">
          {items}
        </Group> */}

        <Group justify="center" my="xl" visibleFrom="md" ml="auto" mr="md">
          <ActionIcon
            onClick={() =>
              setColorScheme(computedColorScheme === "light" ? "dark" : "light")
            }
            size="lg"
            aria-label="Toggle color scheme"
            className={classes.actionIcon}
          >
            <IconSun size={18} className={classes.sun} />
            <IconMoonStars size={18} className={classes.moon} />
          </ActionIcon>
        </Group>

        <Link href="/vratit">
          <Button
            size="md"
            leftSection={<IconRecycle size="16" />}
            visibleFrom="md"
          >
            Vrátit ReKrabici
          </Button>
        </Link>
        <Group
          gap="xs"
          onClick={toggle}
          h="var(--app-shell-header-height)"
          className="cursor-pointer"
          pl="md"
        >
          <Text h="full" hiddenFrom="md">
            Menu
          </Text>
          <Burger
            opened={isOpen}
            onClick={toggle}
            size="sm"
            aria-label="Side navigation toggle"
            hiddenFrom="md"
          />
        </Group>
      </Container>
    </AppShell.Header>
  );
}
