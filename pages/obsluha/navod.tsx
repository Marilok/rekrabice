import { Accordion, Anchor } from "@mantine/core";
import Link from "next/link";
import { ReactNode } from "react";
import ObsluhaLayout from "../../components/Layouts/Obsluha/layout";

type AccordionItem = {
  value: string;
  control: string;
  panel: ReactNode | string;
};

const accordionData: AccordionItem[] = [
  {
    value: "own-purpose",
    control: "Mohu ReKrabice použít k vlastním účelům?",
    panel:
      "Bohužel ne. Každá ReKrabice se před použitím musí vyčistit a zkontrolovat, to se děje jen na našem skladě.",
  },
  {
    value: "damaged",
    control: "Co s poškozenou ReKrabicí?",
    panel:
      "To nechte na nás. ReKrabici prosím přijměte od zákazníka. Na skladě ji dáme druhý život.",
  },
  {
    value: "contact",
    control: "Máte další dotaz?",
    panel: (
      <>
        Rádi ho uslyšíme, obraťte se na nás na stránce{" "}
        <Link href="kontakt" passHref>
          <Anchor>stránce kontakty</Anchor>
        </Link>
      </>
    ),
  },
];

export default function QuestionsPage() {
  return (
    <ObsluhaLayout>
      <Accordion variant="contained" className="w-1/3">
        {accordionData.map((item) => (
          <Accordion.Item
            key={item.value}
            value={item.value}
            className="w-full"
          >
            <Accordion.Control>{item.control}</Accordion.Control>
            <Accordion.Panel>{item.panel}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </ObsluhaLayout>
  );
}
