import {
  ActionIcon,
  Avatar,
  Container,
  createStyles,
  Group,
  Text,
} from "@mantine/core";
import Link from "next/link";
import SOCIALS from "../../../data/SOCIALS";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: theme.spacing.xl,
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export default function Footer({ data }: FooterLinksProps) {
  const { classes } = useStyles();
  const groups = data.map((group) => {
    const links = group.links.map((link) => (
      <Text
        className={classes.link}
        component={Link}
        href={link.link}
        key={link.label}
        passHref
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Avatar src="/favicon.svg" size={30} alt="logo icon" />
          <Text size="xs" color="dimmed" className={classes.description}>
            Přestaňme si posílat odpad.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          &copy;
          <span>{new Date().getFullYear()}</span>
          <span> Zatím hledáme jméno s.r.o.</span>
        </Text>
        <Text color="dimmed" size="sm">
          Vytvořeno s ❤️ ke 🌲 v Česku.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          {SOCIALS.map((item) => (
            <ActionIcon
              size="lg"
              className={classes.social}
              component="a"
              key={item.label}
              href={item.url}
              target="_blank"
              aria-label={item.label}
            >
              <item.icon size={22} stroke={1.5} />
            </ActionIcon>
          ))}
        </Group>
      </Container>
    </footer>
  );
}
