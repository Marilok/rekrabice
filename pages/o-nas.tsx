import type { NextPage } from "next";
import { Table, Title, Text, List, Container } from "@mantine/core";
import {
  IconArrowBarToDown,
  IconRecycle,
  IconBox,
  IconTree,
  IconBulb,
} from "@tabler/icons";
import Link from "next/link";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Layouts/LandingPage/Footer";
import Team from "../components/Team/Team";
import { FeaturesAsymmetrical } from "../components/About/FeaturesAsymmetrical";
import { TypographyStylesProvider } from "@mantine/core";
import LandingPageWrapper from "../components/Layouts/LandingPage/LandingPageWrapper";

const About: NextPage = () => {
  return (
    <LandingPageWrapper>
      <Container size="lg" p={"lg"}>
        <TypographyStylesProvider>
          <Title order={1}>O projektu</Title>
          {/* <Title order={2}>Příběh</Title>
          <Text>
            Byli jednou jeden středoškolák z Brna a druhý z Vysočinu. Oboum , kterému se nelíbilo neustálé
            vyhazování krabic od zásilek z e-shopu. ...
          </Text> */}
          <Title order={2}>Vize</Title>
          <Text>
            Představte si svět, kde už nevzniká žádný odpad při objednání
            online. Svět, kde už zbytečně nemusíte vyhazovat tu kartonou
            krabici, ve které vám přišly vaše nové boty či nová sluchátka.
            Opravdu to by to tak nešlo dělat i teď? Určitě šlo a od toho jsme tu
            my. Mladý tým, který se snaží zavést cirkularní ekonomiku u nás v
            Česku. Věříme, že zero-waste není jen hezká představa, o které
            můžeme jen snít, ale že ho dokážeme implementovat i u nás doma.
          </Text>
          <Title order={2}>Mise</Title>
          <Text>
            Docílit naší bezodpadové vize chceme skrze poskytování
            znovupoužitelných balení pro e-shopy a starání se o jejich
            bezproblémové vracení.
          </Text>
          <Title order={2}>Hodnoty</Title>
          <Text>Mezi naše hodnoty, kterými se řídíme a rozhodujeme patří:</Text>
          <FeaturesAsymmetrical data={values} />

          <Title mb={"sm"} order={1}>
            Tým
          </Title>
          <Team />
        </TypographyStylesProvider>
      </Container>
    </LandingPageWrapper>
  );
};

export default About;
const values = [
  {
    icon: IconTree,
    title: "Redukce odpadu",
    description:
      "Primárně se rozhodujeme podle toho, kolik odpadu jsme schopni celkově ušetřit, kolik zbytečného odpadu neskončí v našich lesích a vodách. Míříme ke stavu zero-waste.",
  },
  {
    icon: IconArrowBarToDown,
    title: "Smysl a dopad",
    description:
      "Všechny věci co děláme musí mít smysl, tak aby měli pozitivní dopad na svět. Neděláme věci jen proto, že to je trendy.",
  },
  {
    icon: IconBulb,
    title: "Inovace",
    description:
      "Snažíme se bořit stávající přesvědčení, děláme věci inovativně a přicházíme se způsoby, jak to dělat efektivněji.",
  },
];
