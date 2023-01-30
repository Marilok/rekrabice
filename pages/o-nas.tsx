import {
  Table, Title, Text, List, Container,
  TypographyStylesProvider,
} from '@mantine/core';
import {
  IconArrowBarToDown,
  IconRecycle,
  IconBox,
  IconTree,
  IconBulb,
} from '@tabler/icons';
import Team from '../components/Team/Team';
import { FeaturesAsymmetrical } from '../components/About/FeaturesAsymmetrical';
import LandingPageWrapper from '../components/Layouts/LandingPage/LandingPageWrapper';

export default function About() {
  return (
    <LandingPageWrapper title="O nás">
      <Container size="lg" p="lg">
        <TypographyStylesProvider>
          <Title order={1}>O nás</Title>
          <Title order={2}>Příběh</Title>
          <Text>
            Byl jednou jeden středoškolák z Brna a druhý z Velkého Meziříčí. Oba štvalo neustálé vyhazování kartónových krabic, které jim zbyly po nákupu online. Řekli si, že zkusí spolu něco vymyslet. A tak vznikl projekt ReKrabice. Projekt, který se snaží přinést cirkulární ekonomiku k nám do Česka, aby už žádný odpad nekončil v našich lesech a vodách.
          </Text>
          <Title order={2}>Vize</Title>
          <Text>
            Představte si svět, kde už nevzniká žádný odpad při nakupování
            online. Svět, kde už zbytečně nemusíte vyhazovat tu kartonou
            krabici a nebo se nemusíte starat o tu zbytečnou výplň.
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
          <Title mb="sm" order={2}>
            Tým
          </Title>
          <Team />
        </TypographyStylesProvider>
      </Container>
    </LandingPageWrapper>
  );
}

const values = [
  {
    icon: IconTree,
    title: 'Redukce odpadu',
    description:
      'Primárně se rozhodujeme podle toho, kolik odpadu jsme schopni celkově ušetřit. Motivuje nás, že jsme schopni ušetřit odpad, který neskončí v naší přírodě nebo ve spalovně. Dlouhodobě míříme ke stavu zero-waste.',
  },
  {
    icon: IconArrowBarToDown,
    title: 'Smysl a dopad',
    description:
      'Všechny věci co děláme musí mít určitý smysl. Každá naše aktivita by měla mít pozitivní dopad na svět okolo nás. Neděláme věci jen proto, že jsou trendy.',
  },
  {
    icon: IconBulb,
    title: 'Inovace',
    description:
      'Snažíme se bořit stávající přesvědčení, děláme věci inovativně a přicházíme se způsoby, jak to dělat efektivněji.',
  },
];
