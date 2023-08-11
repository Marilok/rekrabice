import { AspectRatio, Card, Container, SimpleGrid, Text } from "@mantine/core";
import Image from "next/image";

// export const metadata: Metadata = {
//   title: "Napsali o ReKrabicích | ReKrabice",
//   description: "Podívej se co o ReKrabicích píšou v médiích.",
// };

export default function Page() {
  const cards = data.map((article) => (
    <Card
      key={article.title}
      p="md"
      component="a"
      href={article.url}
      target="_blank"
      shadow="sm"
      maw={400}
      className="block transition-transform hover:scale-105 hover:shad"
    >
      <AspectRatio ratio={160 / 90} className="relative">
        <Image
          src={article.image}
          fill
          className="object-cover object-center"
          alt="Image"
        />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" w={700} mt="md">
        {article.date}
      </Text>
      <Text
        style={{ fontFamily: "Greycliff CF, var(--mantine-font-family)" }}
        fw="bolder"
        mt={4}
      >
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container>
      <SimpleGrid cols={{ base: 1, md: 3, lg: 3 }} mt="md" mx="xl" spacing="4">
        {cards}
      </SimpleGrid>
    </Container>
  );
}

const data = [
  {
    title:
      "Výherní projekt soutěžě Validation Contest v rámci E-commerce summitu.",
    image: "/images/napsali-o-nas/ecommerce_summit.png",
    date: "28.2. 2023",
    url: "https://www.ecommercesummit.cz/validation-contest-technologic-festival-2023/",
  },
  {
    title:
      "Vratné mohou být i krabice, tvrdí mladí vynálezci z Moravy. Ta jejich vydrží až 60 cest.",
    image: "/images/napsali-o-nas/novinky.png",
    date: "2.4. 2023",
    url: "https://www.novinky.cz/clanek/domaci-vratne-mohou-byt-i-krabice-tvrdi-mladi-vynalezci-z-moravy-ta-jejich-vydrzi-az-60-cest-40426658",
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
