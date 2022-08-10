import type { NextPage } from "next";
import { Table, Title, Text, List, Container } from "@mantine/core";
import { IconArrowBarToDown, IconRecycle, IconBox } from "@tabler/icons";
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
          <Title order={2}>Příběh</Title>
          <Text>
            Byl jednou jeden středoškolák z Brna, kterému se nelíbilo neustálé
            vyhazování krabic od zásilek z e-shopu. ...
          </Text>
          <Title order={2}>Vize</Title>
          <Text>
            Naší vizí je, aby se už žádná krabice nikdy nemusela vyhodit.
            Jednoduše, dosáhnout stavu &quot;zero-waste&quot;.
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
    icon: IconArrowBarToDown,
    title: "Smysl a dopad",
    description:
      "Všechny věci co děláme musí mít smysl, tak aby měli pozitivní dopad na svět.",
  },
  {
    icon: IconRecycle,
    title: "Udržitelnost",
    description:
      "Rozhodujeme se na základě dlouhodobé udžitelnosti vůči naší planetě, ale nepodporujeme ekoterorismus.",
  },
  {
    icon: IconBox,
    title: "Minimalismus",
    description: "Věci nekomplikujeme a děláme je jednoduché.",
  },
];
