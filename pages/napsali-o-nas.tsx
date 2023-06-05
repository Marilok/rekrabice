import {
  AspectRatio,
  Card,
  Container,
  createStyles,
  SimpleGrid,
  Text,
} from "@mantine/core";
import Image from "next/image";
import LandingPageWrapper from "../components/Layouts/LandingPage/layout";

export default function Kontakt() {
  const { classes } = useStyles();
  const cards = data.map((article) => (
    <Card
      key={article.title}
      p="md"
      component="a"
      href={article.url}
      target="_blank"
      className={classes.card}
    >
      <AspectRatio ratio={1600 / 900} className="relative">
        <Image
          src={article.image}
          fill
          className="object-cover object-center"
          alt="Image"
        />
      </AspectRatio>
      <Text
        color="dimmed"
        size="xs"
        transform="uppercase"
        weight={700}
        mt="md"
      >
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
      titleRemoveName
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
        "Vratné mohou být i krabice, tvrdí mladí vynálezci z Moravy. Ta jejich vydrží až 60 cest.",
    image: "/images/napsali-o-nas/novinky.png",
    date: "2.4. 2023",
    url: "https://www.novinky.cz/clanek/domaci-vratne-mohou-byt-i-krabice-tvrdi-mladi-vynalezci-z-moravy-ta-jejich-vydrzi-az-60-cest-40426658",
  },
  {
    title:
        "Výherní projekt soutěžě Validation Contest v rámci E-commerce summitu.",
    image: "/images/napsali-o-nas/ecommerce_summit.png",
    date: "28.2. 2023",
    url: "https://www.ecommercesummit.cz/validation-contest-technologic-festival-2023/",
  },
  {
    title:
        "ReKrabice. Studenti ukázali projekt přepravních obalů na Validation Campu v Brně",
    image: "/images/napsali-o-nas/brnan.png",
    date: "27.2. 2023",
    url: "https://www.brnan.cz/udalosti/rekrabice-studenti-ukazali-projekt-prepravnich-obalu-na-validation-campu-v-brne",
  },
  {
    title:
        "Startupoví nováčci i zavedené firmy. Tohle je desítka nových účastníků akcelerátoru ČSOB",
    image: "/images/napsali-o-nas/startit.png",
    date: "24.5. 2023",
    url: "https://sj.news/startupovi-novacci-i-zavedene-firmy-tohle-je-desitka-novych-ucastniku-akceleratoru-start-it-csob/",
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
