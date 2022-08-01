import type { NextPage } from "next";
import Link from "next/link";
import {
  createStyles,
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
} from "@mantine/core";

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

const FiveOhThree: NextPage = () => {
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
            Všechny naše servery jsou přetíženy.
          </Title>
          <Text color="dimmed" size="lg">
            We cannot handle your request right now, please wait for a couple of
            minutes and refresh the page. Our team is already working on this
            issue.
          </Text>
          <Button
            variant="gradient"
            gradient={{ from: "#DA1F05", to: "#FFC11F" }}
            size="md"
            mt="xl"
            onClick={() => window.location.reload()}
            className={classes.control}
          >
            Zkusit znovu načíst stránku
          </Button>
        </div>
        <Image
          radius="md"
          alt="Disaster girl"
          src="/disaster-girl.jpg"
          width={450}
          height={300}
          className={classes.desktopImage}
        />
      </SimpleGrid>
    </Container>
  );
};

export default FiveOhThree;
