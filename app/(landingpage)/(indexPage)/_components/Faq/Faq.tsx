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
        <AccordionItem className={classes.item} value="second">
          <AccordionControl>Jak mohu ReKrabici vrátit?</AccordionControl>
          <AccordionPanel>
            Stačí ji přinést na tvou nejbližší Balíkovnu. Pokud hoříš
            nedočkavostí, můžeš balíček rozbalit taky přímo na Balíkovně a
            ReKrabici tam rovnou nechat. Nebo se ti ReKrabice natolik zalíbila,
            že ji vracet nechceš.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem className={classes.item} value="fourth">
          <AccordionControl>Z čeho jsou ReKrabice vyrobeny?</AccordionControl>
          <AccordionPanel>
            ReKrabice jsou z recyklovaného polypropylenu. Možná si teď říkáš, co
            je na tom ekologického. Kartonové krabice s trochou štěstí přežijí 3
            cesty, ReKrabice jich zvládne desítky. Celkový dopad jedné ReKrabice
            po 15 použitích (včetně cesty zpátky na sklad) je přibližně o 60 %
            nižší, než kdyby byly použity jen ty obyčejné kartonové.
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
