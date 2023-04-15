
import { Code, createStyles, getStylesRef, Group, Navbar, rem } from '@mantine/core';
import { IconArrowDown, IconArrowUp, IconLogout, IconPhone, IconQuestionMark } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,

      [`& .${getStylesRef('icon')}`]: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      [`& .${getStylesRef('icon')}`]: {
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      },
    },
  },
}));

const data = [
   {
    link: "obsluha/prijmout",
    label: "Přijmout ReKrabici",
        icon: IconArrowDown

  },
    {
    link: "obsluha/odeslat",
    label: "Odeslat ReKrabice pryč",
            icon: IconArrowUp

  },
  {
    link: "obsluha/navod",
    label: "Návod a časté dotazy",
    icon: IconQuestionMark
  },
  {
    link: "obsluha/kontakt",
    label: "Kontakt",
    icon: IconPhone

  },
];

export default function StyledNavbar() {
  const { classes, cx } = useStyles();

  const links = data.map((item) => (
    <Link
      href={item.link}
      key={item.label}
      className={cx(classes.link, item.link === useRouter().pathname.split('/').pop() && classes.linkActive)}
      // onClick={() => { setActive(item.label)}}
    >
      {/* <NavLink active={item.label === active} component="a"
icon={<item.icon stroke={1.5} />} variant="light" label={item.label} onClick={(e) => { setActive(item.label)}}/> */}

      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <Navbar  width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Image src="/logo_text.svg" height={30} width="100" alt="logo icon" />
          <Code>verze 0.1</Code>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Odhlásit se</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}
