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
        <AccordionItem className={classes.item} value="karton">
          <AccordionControl>
            Mají pro mě ReKrabice smysl, když už využívám kartonové krabice z
            druhé ruky?
          </AccordionControl>
          <AccordionPanel>
            Ano! Je super, že používáte kartonové krabice z druhé ruky a
            chráníte tak přírodu aspoň o něco víc, než ostatní e-shopy. Bohužel
            kartonová krabice zvládne těch cest jenom pár a v tom koši skončí
            stejně poměrně brzy. <br />
            <br />
            ReKrabice oproti kartonové krabici vydrží mnohonásobně víc cest,
            takže se ve výsledku ušetří více odpadu. Pro porovnání - při 15
            posláních kartonových krabic se vyprodukuje asi 7 kg odpadu, při 15
            použitích ReKrabice je to neustále pouze 250 g.
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
