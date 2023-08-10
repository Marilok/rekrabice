import {
  Container,
  Text,
  Title,
  TypographyStylesProvider,
} from "@mantine/core";
import Link from "next/link";

export default function Gdpr() {
  return (
    <Container size="lg" p="lg">
      <TypographyStylesProvider>
        <Title order={1}>Zásady ochrany osobních údajů</Title>
        <div>
          <Title order={2}>I. Základní ustanovení</Title>
          <Text component="p">
            Správcem osobních údajů podle čl. 4 bod 7 nařízení Evropského
            parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v
            souvislosti se zpracováním osobních údajů a o volném pohybu těchto
            údajů (dále jen: „GDPR”) je Tadeáš Bíbr, IČ - se sídlem -, - Velké
            Meziříčí (dále jen: „správce“).
          </Text>
          <Text component="p">
            Kontaktní údaje správce jsou tadeas.bibr@rekrabice.cz.
          </Text>
          <Text component="p">
            Osobními údaji se rozumí veškeré informace o identifikované nebo
            identifikovatelné fyzické osobě; identifikovatelnou fyzickou osobou
            je fyzická osoba, kterou lze přímo či nepřímo identifikovat, zejména
            odkazem na určitý identifikátor, například jméno, identifikační
            číslo, lokační údaje, síťový identifikátor nebo na jeden či více
            zvláštních prvků fyzické, fyziologické, genetické, psychické,
            ekonomické, kulturní nebo společenské identity této fyzické osoby.
          </Text>
          <Text>Správce nejmenoval pověřence pro ochranu osobních údajů.</Text>
        </div>
        <div>
          <Title order={2}>II. Zpracování osobních údajů</Title>
          <p>
            Pokud projevíte zájem naše produkty a služby, budeme pracovat s
            vašimi kontaktními údaji, které nám sdělíte, hlavně prostřednictvím
            poptávkového formuláře.
          </p>
          <p>Jsou to:</p>
          {/* // TODO: v7 migration */}

          {/* <List>
            <List.Item>E-mailová adresa</List.Item>
            <List.Item>IP adresa</List.Item>
          </List> */}
          <strong>Z jakého důvodu?</strong>
          <p>
            Kontaktujeme vás přes ně pro další domluvu ohledně zboží a služeb.
            Na základě jakého právního důvodu? Jedná se o zpracování na základě
            čl. 6 odst. 1 písm. b) GDPR – jednání o smlouvě, resp. provedení
            opatření před uzavřením smlouvy na vaši žádost.
          </p>
          <strong>Jak dlouho budeme osobní údaje zpracovávat?</strong>
          <p>
            Pokud nenavážeme další spolupráci, vaše data budeme zpracovávat
            nejdéle 1 rok od naší poslední komunikace.
          </p>
        </div>
        <div>
          <Title order={2} />
          <Text>
            Vaše data zůstanou u nás. Přesto pro nás pracují některé společnosti
            nebo jiné osoby, které se k datům dostanou proto, že nám pomáhají s
            chodem našeho webu. Jsou to:
          </Text>
          {/* // TODO: v7 migration */}
          {/* <List>
            <List.Item>Provozovatel webhostingových služeb - Vercel</List.Item>
            <List.Item>Provozovatel databáze - Supabase</List.Item>
          </List> */}
          {/* <Text>Vaše osobní údaje se dále mohou dostat k těmto dalším subjektům:</Text> */}
          <Text>Osobní údaje zpracováváme pouze na území Evropské unie.</Text>
        </div>

        <div>
          <Title order={2}>IV. Používání souborů cookies</Title>
          <Text>
            <Link href="/cookies">Více o cookies na samostatné stránce</Link>
          </Text>
        </div>
        <div>
          <Title order={2}>
            V. Vaše práva v souvislosti se zpracováním osobních údajů
          </Title>
          <Text component="p">
            Nařízení GDPR vám dává mimo jiné právo obrátit se na nás a chtít
            informace, jaké vaše osobní údaje zpracováváme, vyžádat si u nás
            přístup k těmto údajům a nechat je aktualizovat nebo opravit,
            popřípadě požadovat omezení zpracování, můžete požadovat kopii
            zpracovávaných osobních údajů, požadovat po nás v určitých situacích
            výmaz osobních údajů a v určitých případech máte právo na jejich
            přenositelnost. Proti zpracování na základě oprávněného zájmu lze
            vznést námitku.
          </Text>
          <Text component="p">
            Pokud si myslíte, že s daty nenakládáme správně, máte právo podat
            stížnost u Úřadu pro ochranu osobních údajů, případně se se svými
            nároky obrátit na soud.
          </Text>
          <Text component="p">Tyto podmínky jsou účinné od 21.02.2023</Text>
        </div>
      </TypographyStylesProvider>
    </Container>
  );
}
