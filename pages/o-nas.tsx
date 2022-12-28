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
            Naší vizí je, aby se už žásná krabice nemusela nikdy vyhodit. Chceme
            udělat změnu, aby se zákazníkům už neposílal objednávky ve zbytečném
            odpadě. Jednoduše řečeno, chceme dosáhnout stavu
            &quot;zero-waste&quot; a cirkuklární ekonomiky u nás v České
            republice.
          </Text>
          <Title order={2}>Mise</Title>
          <Text>
            Docílit naší vize chceme skrze poskytování znovupoužitelných balení
            pro e-shopy.
          </Text>
          <Title order={2}>Hodnoty</Title>
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
      "Rozhodujeme se na základě dlouhodobé udžitelnosti vůči naší planetě. Snažíme se redukovat množství odpadu a dosáhnout stavu zero-waste.",
  },
  {
    icon: IconArrowBarToDown,
    title: "Smysl a dopad",
    description:
      "Všechny věci co děláme musí mít smysl, tak aby měli pozitivní dopad na svět.",
  },
  {
    icon: IconBulb,
    title: "Inovace",
    description:
      "Věci děláme inovativně a vždycky se snažíme najít lepší způsob jak to dělat efektivněji.",
  },
];
