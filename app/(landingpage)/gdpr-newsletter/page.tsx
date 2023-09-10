import {
  Container,
  List,
  ListItem,
  Text,
  Title,
  TypographyStylesProvider,
} from "@mantine/core";
import { CONTACT } from "../../../data/CONTACT_DATA";

export default function Gdpr() {
  return (
    <Container size="lg" p="lg">
      <TypographyStylesProvider>
        <Title order={1}>Zásady zpracování osobních údajů</Title>
        <div>
          <Title order={2}>I. Základní ustanovení</Title>
          <Text component="p">
            Správcem osobních údajů je {CONTACT.legalName}, IČO: {CONTACT.ico},
            se sídlem {CONTACT.address} (dále jen: „Správce“).
          </Text>
          <Text component="p">
            Kontaktní údaje správce jsou následující: adresa elektronické pošty{" "}
            <b>gdpr@rekrabice.cz</b> (dále jen „Kontaktní údaje Správce“).
          </Text>
          <Text>Správce nejmenoval pověřence pro ochranu osobních údajů.</Text>
        </div>
        <div>
          <Title order={2}>II. Poskytnutí osobních údajů</Title>
          <p>
            Návštěvník e-shopu jako fyzická osoba (dále jen „Subjekt údajů“)
            vyplněním a odesláním své emailové adresy v žádosti o zasílání
            newsletteru Správce uděluje Správci souhlas se zpracováním osobních
            údajů (dále jen „Souhlas“) dle čl. 6 odst. 1 písm. a) a čl. 7
            Nařízení Evropského parlamentu a Rady (EU) 2016/679 (dále též jako
            „GDPR“). Tento souhlas je udělován rovněž podle zákona č. 480/2004
            Sb., o některých službách informační společnosti, ve znění
            pozdějších předpisů. Správce v souvislosti se zpracováním osobních
            údajů poskytuje Subjektu údajů dle čl. 13 GDPR níže uvedené
            informace.
          </p>
          <p>
            Správce bude na základě uděleného Souhlasu o Subjektu údajů
            zpracovávat následující osobní údaje:
          </p>
          <List>
            <ListItem>E-mailová adresa</ListItem>
          </List>
          <p>(dále jen „Osobní údaje“).</p>
        </div>
        <div>
          <Title order={2}>III. Účel zpracování Osobních údajů</Title>
          <Text>
            Správce bude na základě tohoto Souhlasu zpracovávat Osobní údaje pro
            zasílání obchodních sdělení Správce, zejména zasílání slev na zboží
            nabízené Správcem, zasílání nabídek a informačních e-mailů o zboží a
            službách nabízených Správcem a dalších reklamních, marketingových či
            obchodních sdělení Správce, včetně provádění průzkumů trhu Správcem.
          </Text>
          <p>
            Ze strany Správce nedochází na základě Souhlasu k automatickému
            individuálnímu rozhodování ve smyslu čl. 22 GDPR.
          </p>
          <p>
            Udělení Souhlasu není smluvním požadavkem Správce a není jím
            podmíněno další trvání jakéhokoli vztahu.
          </p>
        </div>
        <div>
          <Title order={2}>IV. Další příjemci Osobních údajů</Title>
          <Text component="p">
            Osobní údaje Subjektu údajů mohou být Správcem zpřístupněny těmto
            třetím osobám:
          </Text>
          <List>
            <ListItem>
              osobám poskytujícím Správci a/nebo dalším příjemcům serverové,
              webové, cloudové nebo IT služby.
            </ListItem>
          </List>
          <Text component="p">
            Správce nemá v úmyslu předat Osobní údaje Subjektu údajů do třetí
            země či mezinárodní organizaci.
          </Text>
        </div>
        <div>
          <Title order={2}>V. Doba uložení osobních údajů</Title>
          <Text component="p">
            Osobní údaje Subjektu údajů budou Správcem zpracovávány po dobu
            potřebnou k naplnění účelu zpracování Osobních údajů, nejdéle však
            tři (3) roky od udělení Souhlasu.
          </Text>
        </div>
        <div>
          <Title order={2}>VI. Práva subjektu údajů</Title>
          <Text component="p">
            V souladu s předpisy na ochranu osobních údajů má Subjekt údajů tato
            práva:
          </Text>
          <List>
            <ListItem>
              <b>Právo na přístup</b> k Osobním údajům u Správce, což znamená,
              že Subjekt údajů může kdykoliv požádat o potvrzení Správce, zda
              Osobní údaje jsou či nejsou zpracovávány, a pokud jsou, pak za
              jakými účely, v jakém rozsahu, komu jsou zpřístupněny, jak dlouho
              budou zpracovávány, zda má právo na opravu, výmaz, omezení
              zpracování či vznést námitku, odkud Osobní údaje byly získány, a
              zda dochází na základě zpracování Osobních údajů k automatickému
              rozhodování, včetně případného profilování. Subjekt údajů má také
              právo získat kopii Osobních údajů, přičemž první poskytnutí je
              bezplatné, za další poskytnutí pak může Správce požadovat
              přiměřenou úhradu administrativních nákladů;
            </ListItem>
            <ListItem>
              <b>Právo na opravu</b> Osobních údajů, což znamená, že Subjekt
              údajů může kdykoliv požádat Správce o opravu či doplnění Osobních
              údajů, pokud by byly nepřesné či neúplné;
            </ListItem>
            <ListItem>
              <b>Právo na výmaz</b> Osobních údajů, což znamená, že Správce musí
              vymazat Osobní údaje pokud (i) již nejsou potřebné pro účely, pro
              které byly shromážděny nebo jinak zpracovány, (ii) Subjekt údajů
              odvolá souhlas a neexistuje žádný další důvod pro zpracování,
              (iii) Subjekt údajů vznese námitky proti zpracování a neexistují
              žádné převažující oprávněné důvody pro zpracování, (iv) zpracování
              je protiprávní nebo (v) to ukládá zákonná povinnost;
            </ListItem>
            <ListItem>
              <b>Právo na omezení zpracování</b> zpracování Osobních údajů, což
              znamená, že dokud se nevyřeší sporné otázky ohledně zpracování
              Osobních údajů, konkrétně pokud (i) Subjekt údajů popírá přesnost
              Osobních údajů, (ii) zpracování je protiprávní, ale místo výmazu
              Osobních údajů chce Subjekt údajů jejich zpracování pouze omezit,
              (iii) Správce již Osobní údaje nepotřebuje pro účely zpracování,
              ale Subjekt údajů ano, nebo (iv) pokud Subjekt údajů vznese
              námitku proti zpracování dle čl. 6.1.6. této informační doložky,
              tak Správce může mít Osobní údaje pouze uloženy a další zpracování
              je podmíněno souhlasem Subjektu údajů, případně tím, že tyto
              Osobní údaje jsou potřeba z důvodu určení, výkonu nebo obhajoby
              právních nároků;
            </ListItem>
            <ListItem>
              <b>Právo na přenositelnost</b> údajů, což znamená, že Subjekt
              údajů má právo získat Osobní údaje, které poskytl Správci se
              souhlasem ke zpracování nebo pro účely plnění smlouvy, ve
              strukturovaném, běžně používaném a strojově čitelném formátu, a
              dále má právo, je-li to technicky proveditelné, aby Správce tyto
              údaje předal jinému správci;
            </ListItem>
            <ListItem>
              <b>Právo vznést námitku</b> proti zpravování Osobních údajů, což
              znamená, že Subjekt údajů může u Správce podat písemnou či
              elektronickou námitku proti zpracování svých Osobních údajů, čímž
              způsobí, že Správce Osobní údaje dále nezpracovává, pokud
              neprokáže závažné oprávněné důvody pro zpracování, které převažují
              nad zájmy Subjektu údajů nebo jeho právy a svobodami.
            </ListItem>
          </List>
          <p>
            Veškerá svá práva, stanovená předchozím odstavcem, může Subjekt
            údajů uplatnit u Správce buďto písemnou formou doporučeným dopisem
            či elektronickou formou na Kontaktních údajích Správce.
          </p>
        </div>
        <div>
          <Title order={2}>VII. Odvolání Souhlasu</Title>
          <Text component="p">
            Tento Souhlas může Subjekt údajů kdykoliv odvolat, tudíž tak lze
            učinit i před skončením výše uvedených skutečností. Souhlas může
            Subjekt údajů odvolat prostřednictvím formuláře dostupného u Správce
            nebo libovolnou formou prostřednictvím Kontaktních údajů Správce.
          </Text>
          <Text component="p">
            Odvoláním Souhlasu není dotčena zákonnost zpracování vycházející ze
            Souhlasu, který byl udělen před jeho odvoláním. Po skončení
            platnosti Souhlasu v souladu s tímto článkem Osobní údaje budou
            smazány, pokud pro jejich další zpracování nebude existovat jiný
            zákonný důvod.
          </Text>
        </div>
      </TypographyStylesProvider>
    </Container>
  );
}
