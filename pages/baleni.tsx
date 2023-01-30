import {
  Anchor, Container, List, Text, Title, TypographyStylesProvider, Code, Mark, Table,
} from '@mantine/core';
import LandingPageWrapper from '../components/Layouts/LandingPage/LandingPageWrapper';

export default function SlashPackaging() {
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.name}</td>
      <td><Anchor href={element.url} target="_blank">{element.url}</Anchor></td>
    </tr>
  ));
  return (
    <LandingPageWrapper>
      <TypographyStylesProvider>
        <Container size="md">
          <div>
            <Title order={2}>
              Co je podstránka
              <Code color="green">/baleni</Code>
              ?
            </Title>
            <Text>
              Na většině webových stránek naleznete
              {' '}
              <Code>/o-nas</Code>
              {' '}
              nebo
              {' '}
              <Code>/kontakt</Code>
              {' '}
              stránku, kde
              návštěvníci najdou informace o dané osobě nebo firmě a nebo kontaktní informace. Na stránce
              <Code color="green">/baleni</Code>
              {' '}
              se návštěvníci dozvědí, jak vaše společnost přemýšlí o
              obalech a co by měli s vašimi obaly dělat.
            </Text>
          </div>
          <div>
            <Title order={2}>K čemu je to dobré a proč bychom ji měli mít?</Title>
            <Text>
              Zodpovědný přístup k obalovému odpadu je důležitým tématem pro stále
              větší počet lidí.
              {' '}
              <br />
              Jen v USA se každoročně skládkují desítky milionů tun obalů.
              Neobnovitelné zdroje se těží nebývalou rychlostí a znečišťují naše
              nejkrásnější přírodní stanoviště od pláží až po vrcholky našich
              nejvyšších hor.
              {' '}
              <br />
              Spotřebitelé chtějí podporovat společnosti, pro které jsou
              udržitelné obaly prioritou. Stránka
              {' '}
              <Code color="green">doména.cz/baleni</Code>
              {' '}
              pomáhá lidem poznat, že
              vám na tom záleží.
            </Text>
          </div>
          <div>
            <Title order={2}>Jak se můžeme přidat?</Title>
            <Text>
              Jednoduše! Přidejte podstránku na váš web podstránku
              {' '}
              <Code color="green">doména.cz/baleni</Code>
              . Tuto adresu URL můžete také přesměrovat na
              existující stránku na vašem webu.
              <br />
              Až bude adresa URL připravena, odešlete stránku sem.
            </Text>
          </div>
          <div>
            <Title order={2}>Co by vaše podstránka měla obsahovat?</Title>
            <Text>
              Slash Packaging je o pokroku, ne o dokonalosti. Je lepší mít něco
              než nic. Zpočátku se držte jednoduchosti, časem můžete stránku vždy
              vylepšit. Zvažte zahrnutí některé nebo všech následujících
              informací:
            </Text>
            <List>
              <List.Item>
                Pokyny k likvidaci, jak obal recyklovat, kompostovat nebo znovu
                použít.
              </List.Item>
              <List.Item>
                Materiály, ze kterých jsou vaše obaly vyrobeny
              </List.Item>
              <List.Item>
                Certifikáty nebo normy, které váš obal dodržuje, například
                FSC/SFI, kompostovatelnost atd.
              </List.Item>
              <List.Item>
                Filozofie vaší společnosti a pokrok v oblasti udržitelnosti obalů.
              </List.Item>
            </List>
          </div>
          <div>
            <Title order={2}>Nejsem firma, jak mohu pomoci?</Title>
            <Text>
              Nejlepší způsob, jak pomoci této iniciativě, je požádat vaše
              oblíbené značky, aby se k této iniciativě připojili. Můžete jim to
              poslat e-mailem nebo prostřednictvím sociálních sítí.
            </Text>
          </div>
          <div>
            <Title order={2}>Kdo za tím stojí?</Title>
            <Text>
              Tuto myšlenku založil
              {' '}
              <Anchor href="https://www.slashpackaging.org/" target="_blank">
                Stephan Ango
              </Anchor>
              . V Česku tuto iniciativu propaguje tým z ReKrabic.
            </Text>
          </div>
          <Title order={2}>Přehled zapojených firem</Title>

          <Table>
            <thead>
              <tr>
                <th>Název</th>
                <th>Stránka</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Container>
      </TypographyStylesProvider>
    </LandingPageWrapper>
  );
}

const elements = [
  { name: 'Tierra Verde', url: 'tierraverde.cz/vraceni-obalu' },
  { name: 'Nákup na Dobro', url: 'nakupnadobro.cz/eko-logistika' },
  { name: 'Amazon', url: 'amazon.com/packaging' },
  { name: 'Vaše firma', url: 'kouzelnafirma.cz/baleni' },
];
