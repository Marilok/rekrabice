import {
  Container,
  Text,
  Title,
  TypographyStylesProvider,
} from "@mantine/core";
import { IconArrowBarToDown, IconBulb, IconTree } from "@tabler/icons-react";
import { Metadata } from "next";
import FeaturesAsymmetrical from "./_components/FeaturesAsymmetrical/FeaturesAsymmetrical";
import Team from "./_components/Team";

export const metadata: Metadata = {
  title: "O nás | ReKrabice",
  description:
    "Dozvěď se více o vzniku projektu ReKrabice, který přináší koncept cirkulární ekonomiky do Česka.",
};

export default function Page() {
  return (
    <Container size="lg" p="lg" mt="xl">
      <TypographyStylesProvider>
        <Title order={1} hidden>
          O nás
        </Title>
        <Title order={2}>Příběh</Title>
        <Text>
          To se tak jednou sešel jeden středoškolák z Brna s druhým z Velkého
          Meziříčí. A štvalo je neustálé vyhazování kartonových krabic, tak si
          řekli, že spolu něco vymyslí. No a zrodily se z toho ReKrabice.
          Projekt, který do Česka přináší koncept cirkulární ekonomiky, aby naši
          přírodu zatěžovalo zase o trochu míň zbytečného odpadu.
        </Text>
        <Title order={2}>Vize</Title>
        <Text>
          Představ si svět, kde při nakupování online nevzniká žádný odpad.
          Svět, kde po každém nákupu nemusíš vyhazovat krabici a starat se o
          hromadu výplně, u které nikdy nevíš, co s ní.
        </Text>
        <Title order={2}>Mise</Title>
        <Text>
          Naší bezodpadové vize chceme docílit prostřednictvím poskytování
          znovupoužitelných obalů e-shopům.
        </Text>
        <Title order={2}>Hodnoty</Title>
        <Text>
          Mezi naše hlavní hodnoty, podle kterých tento projekt žije, patří:
        </Text>
        <FeaturesAsymmetrical data={values} />
        <Title mb="sm" order={2}>
          Tým
        </Title>
        <Team />
      </TypographyStylesProvider>
    </Container>
  );
}

const values = [
  {
    icon: IconTree,
    title: "Redukce odpadu",
    description:
      "Naše rozhodnutí stavíme primárně na tom, kolik odpadu jsme schopni ušetřit. Motivuje nás fakt, že snižujeme množství obalových materiálů, které jinak končí ve spalovně, na skládkách, nebo v přírodě. Dlouhodobě směřujeme ke stavu zero waste.",
  },
  {
    icon: IconArrowBarToDown,
    title: "Smysl a dopad",
    description:
      "Vše, co děláme, musí mít smysl a pozitivní dopad na svět kolem nás. Neděláme něco jen proto, že to je zrovna trend.",
  },
  {
    icon: IconBulb,
    title: "Inovace",
    description:
      "Chceme bořit nynější přesvědčení, proto přícházíme s inovacemi, jak dělat věci efektivněji.",
  },
];
