"use client";

import { Accordion, Anchor, Container, Title } from "@mantine/core";
import Link from "next/link";
import classes from "./Faq.module.css";

export default function Faq() {
  return (
    <Container size="sm">
      <Title ta="center" order={2} className={classes.title} mb={40}>
        Často kladené dotazy
      </Title>
      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="first">
          <Accordion.Control>Bude mě ReKrabice něco stát?</Accordion.Control>
          <Accordion.Panel>
            Ne, nestojí tě ani korunu. Jediné, co od tebe potřebujeme, je
            vratnou zálohu, kterou ti však pošleme zpátky po vrácení krabice.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="second">
          <Accordion.Control>Jak mohu ReKrabici vrátit?</Accordion.Control>
          <Accordion.Panel>
            Stačí ji přinést na tvou nejbližší pobočku Zásilkovny. Pokud hoříš
            nedočkavostí, můžeš balíček rozbalit taky přímo na výdejně a
            ReKrabici tam rovnou nechat. Nebo se ti ReKrabice natolik zalíbila,
            že ji vracet nechceš. V takovém případě ti akorát nevrátíme zálohu.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="third">
          <Accordion.Control>Jak mi vrátíte zálohu?</Accordion.Control>
          <Accordion.Panel>
            Až se ReKrabice dostane zpátky k nám na sklad, pošleme ti
            padesátikorunu zpátky na tvůj účet.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="fourth">
          <Accordion.Control>Z čeho jsou ReKrabice vyrobeny?</Accordion.Control>
          <Accordion.Panel>
            ReKrabice jsou z recyklovaného plastu. Možná si teď říkáš, co je na
            tom ekologického. Kartonové krabice s trochou štěstí přežijí 4
            cesty, ReKrabice jich zvládne až 100. Celkový dopad jedné ReKrabice
            po 100 použitích (včetně cesty zpátky na sklad) je o 70 % nižší, než
            kdyby byly použity jen ty obyčejné kartonové.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="companies">
          <Accordion.Control>Proč tu nejsou další e-shopy?</Accordion.Control>
          <Accordion.Panel>
            Zatím o ReKrabice projevily zájem jen tyto e-shopy, na rozšíření
            jejich sítě však pilně pracujeme. Chybí ti tu nějaký e-shop? Dej nám
            nebo svému e-shopu vědět!
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="start">
          <Accordion.Control>
            Kdy budu moct ReKrabice začít používat?
          </Accordion.Control>
          <Accordion.Panel>
            Spuštění plánujeme na druhou půlku letošního roku. Nemůžeš se toho
            dočkat? Spuštění můžeš urychlit projevením zájmu na konci stránky!
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="last">
          <Accordion.Control>Mám další dotaz!</Accordion.Control>
          <Accordion.Panel>
            Všechny otázky ti moc rádi zodpovíme. Ozvi se nám v sekci
            <Anchor component="span">
              <Link href="/kontakt"> Kontakty </Link>
            </Anchor>
            nebo na našich sociálních sítích.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
