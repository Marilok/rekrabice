import {
  Anchor,
  Container,
  List,
  Table,
  Text,
  Title,
  TypographyStylesProvider,
} from "@mantine/core";

import LandingPageWrapper from "../components/Layouts/LandingPage/layout";

export default function Cookies() {
  const rowsEssential = ESSENTIAL.map((element) => (
    <tr key={element.name}>
      <td>{element.name}</td>
      <td>{element.purpose}</td>
    </tr>
  ));
  const rowsOptional = OPTIONAL.map((element) => (
    <tr key={element.name}>
      <td>{element.name}</td>
      <td>{element.purpose}</td>
    </tr>
  ));

  return (
    <LandingPageWrapper title="Cookies">
      <Container size="lg" p="lg">
        <TypographyStylesProvider>
          <Title order={1}>Zásady používání souborů cookie 🍪</Title>
          <Text>
            Aby mohli naše stránky pracovat správně, využíváme soubory cookies.
            Tento malý soubor respektive soubory vznikají automaticky při
            návštěvě každé stránky na našich stránkách. Abychom mohli tyto
            cookies využívat musí je podporovat váš webový prohlížeč. Naše
            stránky fungují ve velmi omezené míře i bez cookies, ale nelze
            využívat některých zásadních funkcí.
          </Text>
          <Title order={2}>Jak a k čemu soubory cookie používáme?</Title>
          <Text>Použití máme hned několik typů:</Text>
          <List withPadding>
            <List.Item>
              <Text weight={700} component="span">
                Esenciální
                {" "}
              </Text>
              - Jde o technická a funkční cookies, která umožňují správné
              fungování našich stránek a pokročilých funkcí. Umožňují vám
              přihlásit se, přidat zboží do košíku, dokončit objednávku a další
              podobné základní funkce.
            </List.Item>
            <List.Item>
              <Text weight={700} component="span">
                Analytické a Marketingové
                {" "}
              </Text>
              - Jde o anonymizovaná cookies, která nám slouží ke statistickým
              účelům, díky kterým můžeme vylepšovat naše stránky a dělat je pro
              vás přístupnější, pohodlnější a můžeme se zaměřovat na ty části
              stránek, které vás nejvíce zajímají a které využíváte. Tyto data
              nelze spojit s vašimi osobními údaji ani s žádnou konkrétní
              osobou. Cookies nám také umožňují lépe na vás zacílit naši reklamu
              i na jiných stránkách, kde věříme, že je to pro vás relevantní.
            </List.Item>
          </List>
          <Text>
            Některé cookies včetně jejich obsahu mohou být využívány třetími
            stranami (tzn. “cookies třetích stran”) pro marketingové či
            analytické účely. Tyto cookies jsou pro třetí strany anonymizované a
            tedy třetí strany si nemohou data spojit s vaší konkrétní osobou.
          </Text>
          <Title order={3}>Esenciální</Title>

          <Table>
            <thead>
              <tr>
                <th>Název cookie</th>
                <th>Účel</th>
              </tr>
            </thead>
            <tbody>{rowsEssential}</tbody>
          </Table>
          <Title order={3}>Analytické a Marketingové</Title>

          <Table>
            <thead>
              <tr>
                <th>Název cookie</th>
                <th>Účel</th>
              </tr>
            </thead>
            <tbody>{rowsOptional}</tbody>
          </Table>
          <Title order={2}>Možnosti omezení cookies</Title>
          <Text component="p">
            Pokud byste měli zájem omezit využívání těchto souborů, můžete
            zvolit anonymní režim, který nabízí všechny běžné webové prohlížeče
            (Google Chrome, Firefox, Internet Explorer, Android nativní
            prohlížeč, apod.). Tento anonymní režim nezabrání používání cookies,
            ale lépe je anonymizuje a během prohlížení se neukládá automaticky
            historie navštívených stránek.
          </Text>
          <Text>
            Druhá možnost je cookies v prohlížeči kompletně vypnout. Tímto však
            omezíte fungování našich stránek a je potřeba počítat s tím, že
            nebudete mít možnost využívat všech našich funkcí včetně přihlášení.
            Návody pro běžné prohlížeče:
            {" "}
            <Anchor href="https://support.google.com/accounts/answer/61416?hl=cs">
              Chrome
            </Anchor>
            ,&nbsp;
            <Anchor href="http://support.mozilla.org/cs/kb/Pr%C3%A1ce%20s%20cookies">
              Firefox
            </Anchor>
            ,&nbsp;
            <Anchor href="http://support.microsoft.com/kb/283185/cs">
              Internet Explorer
            </Anchor>
            ,&nbsp;
            <Anchor href="https://support.google.com/chrome/answer/2392709?visit_id=1-636270856459123937-2696746637&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;rd=1&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;co=GENIE.Platform%3DAndroid&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;oco=1">
              Android
            </Anchor>
            &nbsp;nebo&nbsp;
            <Anchor href="https://support.google.com/accounts/answer/61416?hl=cs&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;co=GENIE.Platform%3DiOS&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;oco=1">
              iPhone a iPad
            </Anchor>
            .
          </Text>
        </TypographyStylesProvider>
      </Container>
    </LandingPageWrapper>
  );
}

const ESSENTIAL = [
  { name: "mantine-color-scheme", purpose: "Pro ukládání barevného režimu." },
];
const OPTIONAL = [
  { name: "_ga", purpose: "Pro statistické účely." },
  { name: "_ga_<container-id>", purpose: "Pro statistické účely." },
];
