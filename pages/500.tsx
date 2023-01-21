import Link from "next/link";
import {
  createStyles,
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
  Anchor,
} from "@mantine/core";
import LandingPageWrapper from "../components/Layouts/LandingPage/LandingPageWrapper";

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

export default function FiveOhThree() {
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
          <Title className={classes.title}>Ach ty technologie...</Title>
          <Text color="dimmed" size="lg">
          Něco se pokazilo a nejsme si jisti, co konkrétně. Zkuste prosím obnovit stránku. Pokud potřebujete pomoc, můžete nás zkusit <Link href="/kontakt" legacyBehavior><Anchor>kontaktovat</Anchor></Link>.
          </Text>
          <Button
            size="md"
            mt="xl"
            onClick={() => window.location.reload()}
            className={classes.control}
          >
            Obnovit stránku
          </Button>
        </div>
        <Image
          radius="md"
          alt="Smashing computer"
          src="/gifs/smash-computer.gif"
          width={450}
          height={300}
          className={classes.desktopImage}
        />
      </SimpleGrid>
    </Container>
    </LandingPageWrapper>
  );
};