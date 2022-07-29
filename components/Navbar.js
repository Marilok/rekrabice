import {
  createStyles,
  Navbar,
  Group,
  Code,
  Button,
  Menu,
  Avatar,
  Text,
} from "@mantine/core";
import { UserButton } from "./UserButton/UserButton";
import { useState, useEffect } from "react";
import Link from "next/link";
import { supabaseClient as supabase } from "@supabase/auth-helpers-nextjs";

import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
  IconArrowBackUp,
  IconHelp,
  IconTransferIn,
  IconTransferOut,
  IconChartArea,
} from "@tabler/icons";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
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
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
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
        [`& .${icon}`]: {
          color: theme.fn.variant({
            variant: "light",
            color: theme.primaryColor,
          }).color,
        },
      },
    },
  };
});

const data = [
  { link: "/app/prijmout", label: "Přijmout krabici", icon: IconTransferIn },
  { link: "/app/odeslat", label: "Použít krabici", icon: IconTransferOut },
  { link: "/app/statistika", label: "Přehled", icon: IconChartArea },
];

export default function CustomNavbar({ session }) {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [avatar, setAvatar] = useState(null);

  async function getProfile() {
    try {
      setLoading(true);
      let { data, error, status } = await supabase
        .from("profiles")
        .select(`name, email, avatar_url`)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        console.log(data);
        setName(data.name);
        setEmail(data.email);
        setAvatar(data.avatar_url);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getProfile();
    console.log(session);
  }, [session]);

  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Billing");

  const links = data.map((item) => (
    <Link href={item.link} key={item.label} passHref>
      <a
        className={cx(classes.link, {
          [classes.linkActive]: item.label === active,
        })}
        onClick={(event) => {
          // event.preventDefault();
          setActive(item.label);
        }}
      >
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{item.label}</span>
      </a>
    </Link>
  ));

  return (
    <Navbar height={"100vh"} width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Group spacing="xs">
            <Avatar
              radius="xl"
              size="md"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fkirby%2Fimages%2F7%2F7d%2FKAR_GreenBox.png%2Frevision%2Flatest%3Fcb%3D20120130211244%26path-prefix%3Den&f=1&nofb=1"
            />
            <Text weight={600}>Zelená krabice</Text>
          </Group>
          <Code sx={{ fontWeight: 700 }}>0.0.1</Code>
        </Group>
        {links}
      </Navbar.Section>
      <Navbar.Section grow className={classes.footer}>
        <Link href="/napoveda" passHref>
          <a className={classes.link}>
            <IconHelp className={classes.linkIcon} stroke={1.5} />
            <span>Nápověda</span>
          </a>
        </Link>
        <Link href="/nastaveni" passHref>
          <a className={classes.link}>
            <IconSettings className={classes.linkIcon} stroke={1.5} />
            <span>Nastavení</span>
          </a>
        </Link>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => {
            event.preventDefault();
            supabase.auth.signOut();
          }}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Odhlásit se</span>
        </a>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UserButton image={avatar} name={name} email={email} />
        {/* <Menu position="top" openDelay={100} closeDelay={400}>
          <Menu.Target>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              icon={<IconLogout size={14} />}
              onClick={(event) => {
                event.preventDefault();
                supabase.auth.signOut();
              }}
            >
              Odhlásit se
            </Menu.Item>

          </Menu.Dropdown>
        </Menu> */}
      </Navbar.Section>
    </Navbar>
  );
}
