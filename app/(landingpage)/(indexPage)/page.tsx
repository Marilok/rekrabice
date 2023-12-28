import { Space } from "@mantine/core";
import { Metadata } from "next";
import BottomCta from "./_components/BottomCta";
import Faq from "./_components/Faq/Faq";
import Hero from "./_components/Hero/Hero";
import Media from "./_components/Media/Media";
import Partners from "./_components/Partners";
import StepperComponent from "./_components/StepperComponent";

export const metadata: Metadata = {
  description:
    "Nestav doma věže z kartonových krabic. Všechny ReKrabice můžeš vrátit a ušetřit tak našim lesům. A to zcela zdarma!",
};

export default function Page() {
  return (
    <>
      <Hero />
      <Space h="xl" />
      <StepperComponent />
      <Space h={80} />
      <Partners />
      <Space h={80} />
      <Faq />
      <BottomCta />
      <Space h={80} />
      <Media />
    </>
  );
}
