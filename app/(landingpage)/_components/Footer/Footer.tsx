import {
  ActionIcon,
  Anchor,
  AppShell,
  Avatar,
  Container,
  Divider,
  Group,
  Text,
} from "@mantine/core";
import Link from "next/link";
import { CONTACT } from "../../../../data/CONTACT_DATA";
import SOCIALS from "../../../../data/SOCIALS";
import classes from "./footer.module.css";

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export default function Footer({ data }: FooterLinksProps) {
  const groups = data.map((group) => {
    const links = group.links.map((link) => (
      <Anchor
        underline="hover"
        className={classes.link}
        py="3"
        size="sm"
        component={Link}
        href={link.link}
        key={link.label}
      >
        {link.label}
      </Anchor>
    ));

    return (
      <div className="w-40" key={group.title}>
        <Text
          className={classes.title}
          size="lg"
          ff="Greycliff CF, var(--mantine-font-family)"
          fw={700}
          my="xs"
        >
          {group.title}
        </Text>
        {links}
      </div>
    );
  });

  return (
    <AppShell.Footer mt="xl" p="lg" className={classes.footer} withBorder>
      <Container maw={1000}>
        <Container
          className="flex justify-between flex-col items-center mantine-sm:flex-row mantine-md:items-left"
          py="lg"
        >
          <div className=" flex justify-between flex-col items-center">
            <Avatar src="/favicon.svg" size={30} alt="logo icon" />
            <Text
              size="xs"
              c="dimmed"
              ta={{ base: "center", md: "left" }}
              mt="xs"
            >
              Přestaňme si posílat odpad.
            </Text>
          </div>
          <div className="hidden flex-nowrap mantine-sm:flex">{groups}</div>
        </Container>
        <Divider maw="100%" size="1" />
        <Container
          py="xl"
          className="flex items-center justify-between flex-col mantine-sm:flex-row gap-2 mantine-md:gap-0"
        >
          <Text c="dimmed" size="sm">
            &copy;&nbsp;
            <span>{new Date().getFullYear()}&nbsp;</span>
            <span>{CONTACT.legalName}</span>
          </Text>
          <Text c="dimmed" size="sm">
            Vytvořeno s ❤️ ke 🌲 v Česku.
          </Text>

          <Group gap={0} justify="right" wrap="nowrap">
            {SOCIALS.map((item) => (
              <ActionIcon
                size="lg"
                className={classes.social}
                component="a"
                key={item.label}
                href={item.url}
                target="_blank"
                aria-label={item.label}
                variant="subtle"
                color="gray"
              >
                <item.icon size={22} stroke={1.5} />
              </ActionIcon>
            ))}
          </Group>
        </Container>
      </Container>
    </AppShell.Footer>
  );
}
