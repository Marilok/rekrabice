"use client";

import {
  Code,
  Divider,
  Group,
  Navbar,
  createStyles,
  getStylesRef,
} from "@mantine/core";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import {
  IconBarcode,
  IconCashBanknote,
  IconFileInvoice,
  IconLogout,
  IconPlus,
  IconScan,
  IconSticker,
  IconTruckDelivery,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import translations from "../../../dictionaries/translations";

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
    link: "/internal/scanner",
    label: "Skenování",
    icon: IconScan,
  },
  {
    link: "/internal/sell",
    label: "Prodat paletu",
    icon: IconCashBanknote,
  },
  {
    link: "/internal/invoices",
    label: "Faktury",
    icon: IconFileInvoice,
  },
  {
    link: "/internal/stickers-generator",
    label: "Generátor štítků",
    icon: IconSticker,
  },
  {
    link: "/internal/new-word",
    label: "Návrh nových slov",
    icon: IconBarcode,
  },
  {
    link: "/internal/new-por",
    label: "Přidání nového vratného místa",
    icon: IconPlus,
  },
  {
    link: "/internal/orders",
    label: "Objednávky",
    icon: IconTruckDelivery,
  },
];

// TODO: make this navbar DRY with the navbar in app\system\_components\Navbar\Navbar.tsx
export default function StyledNavbar({ opened }: { opened: boolean }) {
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
    <Navbar width={{ sm: 300 }} p="md" hiddenBreakpoint="sm" hidden={!opened}>
      <Navbar.Section grow>
        <Group position="apart">
          <Image src="/logo_text.svg" height={30} width="100" alt="logo icon" />
          <Code>{translations.systemNavbar.version} Alpha 0.3</Code>
        </Group>
        <Divider my="sm" />

        {links}
      </Navbar.Section>
      <Divider my="sm" />

      <Navbar.Section>
        {/* <Link href="system/nastaveni" className={classes.link}>
          <IconSettings className={classes.linkIcon} stroke={1.5} />
          <span>{translations.systemNavbar.settings}</span>
        </Link> */}
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
        {/* TODO: make this work */}
        {/* <Divider my="sm" />
        <UserButton
          // email={data.session?.user.email}
          name="Acme - Brno, Česká"
          email="acme@email.cz"
          image="https://picsum.photos/200"
        /> */}
      </Navbar.Section>
    </Navbar>
  );
}
