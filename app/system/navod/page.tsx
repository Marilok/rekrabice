"use client";

import { Accordion, Anchor } from "@mantine/core";
import Link from "next/link";
import { ReactNode } from "react";
import translations from "../../../dictionaries/translations";

type AccordionItem = {
  value: string;
  control: string;
  panel: ReactNode | string;
};

const accordionData: AccordionItem[] = [
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
        {translations.systemFaq.answer3A}
        {" "}
        <Link href="kontakt" passHref legacyBehavior>
          <Anchor>{translations.systemFaq.answer3B}</Anchor>
        </Link>
      </>
    ),
  },
];

export default function QuestionsPage() {
  return (
    <Accordion variant="contained" className="w-1/3">
      {accordionData.map((item) => (
        <Accordion.Item key={item.value} value={item.value} className="w-full">
          <Accordion.Control>{item.control}</Accordion.Control>
          <Accordion.Panel>{item.panel}</Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
