import {
  ActionIcon,
  Anchor,
  AppShell,
  Burger,
  Center,
  Container,
  Group,
  Menu,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconChevronDown, IconMoonStars, IconSun } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import classes from "./Header.module.css";

interface HeaderActionProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
  isOpen: boolean;
  toggle: () => void;
}

export default function HeaderAction({
  links,
  isOpen,
  toggle,
}: HeaderActionProps) {
  const { setColorScheme } = useMantineColorScheme();

  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link} component={Link} href={item.link}>
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover">
          <Menu.Target>
            <Center>
              <Anchor
                component={Link}
                href={link.link}
                // eslint-disable-next-line max-len
                className={`block leading-none px-3 py-2 rounded no-underline font-semibold text-sm ${classes.link}`}
              >
                <span className="mr-1">{link.label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Anchor>
            </Center>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Anchor
        component={Link}
        key={link.label}
        href={link.link}
        // eslint-disable-next-line max-len
        className={`block leading-none px-3 py-2 rounded no-underline font-semibold text-sm ${classes.link}`}
      >
        {link.label}
      </Anchor>
    );
  });

  return (
    <AppShell.Header className="!mb-0">
      <Container
        size="lg"
        h="100%"
        display="flex"
        className="justify-between items-center"
      >
        <Group>
          <Burger
            opened={isOpen}
            onClick={toggle}
            size="sm"
            aria-label="Side navigation toggle"
            hiddenFrom="md"
          />
          <Link href="/" className="contents">
            <Image
              src="/logo_text.svg"
              width={120}
              height={30}
              className="cursor-pointer"
              alt="Logo"
            />
          </Link>
        </Group>
        <Group gap={5} visibleFrom="md">
          {items}
        </Group>
        <Group justify="center" my="xl">
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
      </Container>
    </AppShell.Header>
  );
}
