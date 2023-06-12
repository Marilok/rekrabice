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
import { usePathname, useRouter } from "next/navigation";
import translations from "../../../dictionaries/translations";
import {
  Code,
  Divider,
  Group,
  Navbar,
  createStyles,
  getStylesRef,
} from "../../mantineClientComponents";
import UserButton from "./UserButton/UserButton";

const useStyles = createStyles((theme) => ({
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
const LINKS_OBJECT = [
  {
    link: "/system/prijmout",
    label: translations.systemNavbar.accept,
    icon: IconArrowDown,
  },
  {
    link: "/system/odeslat",
    label: translations.systemNavbar.send,
    icon: IconArrowUp,
  },
  {
    link: "/system/navod",
    label: translations.systemNavbar.faq,
    icon: IconQuestionMark,
  },
  {
    link: "/system/kontakt",
    label: translations.systemNavbar.contact,
    icon: IconPhone,
  },
];

export default function StyledNavbar() {
  const { classes, cx } = useStyles();
  const pathname = usePathname();
  const supabase = useSupabaseClient();

  const links = LINKS_OBJECT.map((item) => (
    <Link
      href={item.link}
      key={item.label}
      className={cx(classes.link, pathname === item.link && classes.linkActive)}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  // const { data } = await supabase.auth.getSession();
  const router = useRouter();

  return (
    <Navbar width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        <Group position="apart">
          <Image src="/logo_text.svg" height={30} width="100" alt="logo icon" />
          <Code>
            {translations.systemNavbar.version}
            {" "}
            0.3
          </Code>
        </Group>
        <Divider my="sm" />

        {links}
      </Navbar.Section>
      <Divider my="sm" />

      <Navbar.Section>
        <Link href="system/nastaveni" className={classes.link}>
          <IconSettings className={classes.linkIcon} stroke={1.5} />
          <span>{translations.systemNavbar.settings}</span>
        </Link>
        <Link
          href="system/prijmout"
          className={`${classes.link} cursor-pointer`}
          onClick={() => {
            supabase.auth.signOut();
            router.refresh();
          }}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>{translations.systemNavbar.logout}</span>
        </Link>
        <Divider my="sm" />
        <UserButton
          // email={data.session?.user.email}
          name="Acme - Brno, Česká"
          email="acme@email.cz"
          image="https://picsum.photos/200"
        />
      </Navbar.Section>
    </Navbar>
  );
}
