import {
  AspectRatio,
  Card,
  Container,
  createStyles,
  SimpleGrid,
  Text,
} from "@mantine/core";
import Image from "next/image";
import LandingPageWrapper from "../components/Layouts/LandingPage/LandingPageWrapper";

export default function Kontakt() {
  const { classes } = useStyles();
  const cards = data.map((article) => (
    <Card
      key={article.title}
      p="md"
      radius="md"
      component="a"
      href={article.url}
      target="_blank"
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080} className="relative">
        <Image
          src={article.image}
          fill
          className="object-cover object-top rounded"
          alt="Image"
        />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <LandingPageWrapper
      title="Napsali o ReKrabicích"
      titleRemoveName={true}
      description="Podívej se co o ReKrabicích píšou v médiích."
    >
      <Container py="xl">
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          {cards}
        </SimpleGrid>
      </Container>
    </LandingPageWrapper>
  );
}

const data = [
  {
    title:
      "ReKrabice. Studenti ukázali projekt přepravních obalů na Validation Campu v Brně",
    image: "/images/napsali-o-nas/brnan.jpeg",
    date: "27.2. 2023",
    url: "https://www.brnan.cz/udalosti/rekrabice-studenti-ukazali-projekt-prepravnich-obalu-na-validation-campu-v-brne",
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",
    boxShadow: theme.shadows.sm,

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));