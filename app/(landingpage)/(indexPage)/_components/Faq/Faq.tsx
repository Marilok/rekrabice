import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Anchor,
  Container,
  Title,
} from "@mantine/core";
import Link from "next/link";
import classes from "./Faq.module.css";

export default function Faq() {
  return (
    <Container size="sm">
      <Title ta="center" order={2} className={classes.title} mb={40}>
        Často kladené dotazy
      </Title>
      <Accordion variant="separated">
        <AccordionItem className={classes.item} value="first">
          <AccordionControl>Bude mě ReKrabice něco stát?</AccordionControl>
          <AccordionPanel>
            Ne, nestojí tě ani korunu. Jediné, co od tebe potřebujeme, je
            vratnou zálohu, kterou ti však pošleme zpátky po vrácení krabice.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className={classes.item} value="second">
          <AccordionControl>Jak mohu ReKrabici vrátit?</AccordionControl>
          <AccordionPanel>
            Stačí ji přinést na tvou nejbližší sběrné místo. Pokud hoříš
            nedočkavostí, můžeš balíček rozbalit taky přímo na výdejně a
            ReKrabici tam rovnou nechat. Nebo se ti ReKrabice natolik zalíbila,
            že ji vracet nechceš. V takovém případě ti akorát nevrátíme zálohu.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className={classes.item} value="third">
          <AccordionControl>Jak mi vrátíte zálohu?</AccordionControl>
          <AccordionPanel>
            Až se ReKrabice dostane zpátky k nám na sklad, pošleme ti
            padesátikorunu zpátky na tvůj účet.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className={classes.item} value="fourth">
          <AccordionControl>Z čeho jsou ReKrabice vyrobeny?</AccordionControl>
          <AccordionPanel>
            ReKrabice jsou z recyklovaného plastu. Možná si teď říkáš, co je na
            tom ekologického. Kartonové krabice s trochou štěstí přežijí 4
            cesty, ReKrabice jich zvládne až 60. Celkový dopad jedné ReKrabice
            po 60 použitích (včetně cesty zpátky na sklad) je o 70 % nižší, než
            kdyby byly použity jen ty obyčejné kartonové.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className={classes.item} value="companies">
          <AccordionControl>Proč tu nejsou další e-shopy?</AccordionControl>
          <AccordionPanel>
            Zatím o ReKrabice projevily zájem jen tyto e-shopy, na rozšíření
            jejich sítě však pilně pracujeme. Chybí ti tu nějaký e-shop? Dej nám
            nebo svému e-shopu vědět!
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className={classes.item} value="start">
          <AccordionControl>
            Kdy budu moct ReKrabice začít používat?
          </AccordionControl>
          <AccordionPanel>
            Spuštění plánujeme na začátek roku 2024. Nemůžeš se toho dočkat?
            Spuštění můžeš urychlit projevením zájmu na konci stránky!
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className={classes.item} value="last">
          <AccordionControl>Mám další dotaz!</AccordionControl>
          <AccordionPanel>
            Všechny otázky ti moc rádi zodpovíme. Ozvi se nám v sekci{" "}
            <Anchor component="span">
              <Link href="/kontakt">Kontakty</Link>
            </Anchor>{" "}
            nebo na našich sociálních sítích.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}
