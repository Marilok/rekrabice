import { Container, Group, Title } from "@mantine/core";
import Image from "next/image";

export default function Media() {
  return (
    <Container>
      <Title order={2} ta="center">
        Napsali o nás
      </Title>
      <Group wrap="wrap" justify="center" mt="md">
        {items}
      </Group>
    </Container>
  );
}

const data = [
  {
    title:
      "Lidé jsou ochotni platit za šetrnější obal. My jim navíc peníze vrátíme, říká zakladatel ReKrabice",
    image: "/images/media/e15.svg",
    url: "https://www.e15.cz/byznys/startupy/lide-jsou-ochotni-platit-za-setrnejsi-obal-my-jim-navic-penize-vratime-rika-zakladatel-rekrabice-1410703",
  },

  {
    title:
      "Vratné mohou být i krabice, tvrdí mladí vynálezci z Moravy. Ta jejich vydrží až 60 cest.",
    image: "/images/media/novinky.svg",
    url: "https://www.novinky.cz/clanek/domaci-vratne-mohou-byt-i-krabice-tvrdi-mladi-vynalezci-z-moravy-ta-jejich-vydrzi-az-60-cest-40426658",
  },
  {
    title: "Výherní projekt E-Commerce Summitu",
    image: "/images/media/e15.svg",
    url: "https://www.ecommercesummit.cz/validation-contest-technologic-festival-2023/",
  },
  {
    title:
      "ReKrabice. Studenti ukázali projekt přepravních obalů na Validation Campu v Brně",
    image: "/images/media/brnan.svg",
    url: "https://www.brnan.cz/udalosti/rekrabice-studenti-ukazali-projekt-prepravnich-obalu-na-validation-campu-v-brne",
  },
  {
    title:
      "Startupoví nováčci i zavedené firmy. Tohle je desítka nových účastníků akcelerátoru ČSOB",
    image: "/images/media/startit.svg",
    url: "https://sj.news/startupovi-novacci-i-zavedene-firmy-tohle-je-desitka-novych-ucastniku-akceleratoru-start-it-csob/",
  },
];

const items = data.map((item) => (
  <div className="w-60 h-14 relative" key={item.image}>
    {/* <Tooltip label={item.title} position="bottom" className="text-center"> */}
    <a href={item.url} target="_blank" rel="noreferrer">
      <Image
        src={item.image}
        fill
        alt="Start it"
        className="object-contain opacity-80 hover:scale-110 hover:opacity-100 transition-all grayscale-40 hover:grayscale-0"
      />
    </a>
    {/* </Tooltip> */}
  </div>
));
