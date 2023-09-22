import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Anchor,
} from "@mantine/core";
import Link from "next/link";
import { ReactNode } from "react";
import translations from "translations/translations";

type AccordionItemProps = {
  value: string;
  control: string;
  panel: ReactNode | string;
};

export default function Page() {
  return (
    <Accordion variant="contained" className="w-1/3">
      {accordionData.map((item) => (
        <AccordionItem key={item.value} value={item.value} className="w-full">
          <AccordionControl>{item.control}</AccordionControl>
          <AccordionPanel>{item.panel}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

const accordionData: AccordionItemProps[] = [
  {
    value: "own-purpose",
    control: translations.systemFaq.question1,
    panel: translations.systemFaq.answer1,
  },
  {
    value: "damaged",
    control: translations.systemFaq.question2,
    panel: translations.systemFaq.answer2,
  },
  {
    value: "contact",
    control: translations.systemFaq.question3,
    panel: (
      <>
        {translations.systemFaq.answer3A}{" "}
        <Anchor component={Link} href="kontakt">
          {translations.systemFaq.answer3B}
        </Anchor>
      </>
    ),
  },
];
