"use client";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import {
  IconArrowDown,
  IconArrowUp,
  IconLogout,
  IconPhone,
  IconQuestionMark,
  IconSettings,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Code,
  Group,
  Navbar,
  createStyles,
  getStylesRef,
  rem,
} from "../../mantineClientComponents";

const useStyles = createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,

      [`& .${getStylesRef("icon")}`]: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef("icon"),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
      [`& .${getStylesRef("icon")}`]: {
        color: theme.fn.variant({
          variant: "light",
          color: theme.primaryColor,
        }).color,
      },
    },
  },
}));
const data = [
  {
    link: "/system/prijmout",
    label: "Přijmout ReKrabici od zákazníka",
    icon: IconArrowDown,
  },
  {
    link: "/system/odeslat",
    label: "Odeslat plnou přepravku",
    icon: IconArrowUp,
  },
  {
    link: "/system/navod",
    label: "Návod a časté dotazy",
    icon: IconQuestionMark,
  },
  {
    link: "/system/kontakt",
    label: "Kontakt",
    icon: IconPhone,
  },
];

export default function StyledNavbar() {
  const { classes, cx } = useStyles();
  const pathname = usePathname();
  const supabase = useSupabaseClient();

  const links = data.map((item) => (
    <Link
      href={item.link}
      key={item.label}
      className={cx(classes.link, pathname === item.link && classes.linkActive)}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <Navbar width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Image src="/logo_text.svg" height={30} width="100" alt="logo icon" />
          <Code>verze 0.2</Code>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <Link href="system/nastaveni" className={classes.link}>
          <IconSettings className={classes.linkIcon} stroke={1.5} />
          <span>Nastavení</span>
        </Link>
        <Link
          href="login"
          className={`${classes.link} cursor-pointer`}
          onClick={() => supabase.auth.signOut()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Odhlásit se</span>
        </Link>
      </Navbar.Section>
    </Navbar>
  );
}
