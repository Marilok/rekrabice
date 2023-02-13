import {
  Button,
  Container,
  createStyles,
  Image,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import Link from "next/link";
import LandingPageWrapper from "../components/Layouts/LandingPage/LandingPageWrapper";

export default function FourOhFour() {
  const { classes } = useStyles();

  return (
    <LandingPageWrapper>
      <Container className={classes.root}>
        <SimpleGrid
          spacing={80}
          cols={2}
          breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}
        >
          {/* <Image radius="md" src={image} className={classes.mobileImage} /> */}
          <div>
            <Title className={classes.title}>
              Otevřeli jste prázdnou stránku
            </Title>
            <Text color="dimmed" size="lg">
              Možná jste špatně zadali adresu nebo byla stránka přesunuta na
              jinou URL adresu.
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
    </LandingPageWrapper>
  );
}

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
