import type { NextPage } from "next";
import Link from "next/link";
import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
  Image,
} from "@mantine/core";
//TODO2 image from next instead of mantine and other pages
// import Image from "next/image";

const FourOhFour: NextPage = () => {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <SimpleGrid
        spacing={80}
        cols={2}
        breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}
      >
        {/* <Image radius="md" src={image} className={classes.mobileImage} /> */}
        <div>
          <Title className={classes.title}>
            Narazili jste na neexistující stránku...
          </Title>
          <Text color="dimmed" size="lg">
            Našli jste prázdnou krabici. (Page you are trying to open does not
            exist. You may have mistyped the address, or the page has been moved
            to another URL. If you think this is an error contact support.)
          </Text>
          <Button
            component={Link}
            href="/"
            variant="outline"
            size="md"
            mt="xl"
            className={classes.control}
          >
            Vrátit se na hlavní stránku
          </Button>
        </div>
        <Image
          radius="md"
          alt="Confused gif"
          src="/gifs/confused.gif"
          width={450}
          height={300}
          className={classes.desktopImage}
        />
      </SimpleGrid>
    </Container>
  );
};

export default FourOhFour;

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  title: {
    fontWeight: 900,
    fontSize: 34,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  control: {
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },

  mobileImage: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  desktopImage: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));
