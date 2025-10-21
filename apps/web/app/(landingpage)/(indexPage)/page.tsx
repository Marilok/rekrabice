import { Space } from "@mantine/core";
import { Metadata } from "next";
import BottomCta from "./_components/BottomCta";
import EndProjectModal from "./_components/EndProjectModal";
import Faq from "./_components/Faq/Faq";
import Hero from "./_components/Hero/Hero";
import Partners from "./_components/Partners";
import ShoptetLogo from "./_components/ShoptetLogo";
import StepperComponent from "./_components/StepperComponent";

export const metadata: Metadata = {
  description:
    "Nestav doma věže z kartonových krabic. Všechny ReKrabice můžeš vrátit a ušetřit tak našim lesům a předejít vzniku nového odpadu.",
};

export default function Page() {
  return (
    <>
      <EndProjectModal />
      <Hero />
      <Space h="xl" />
      <StepperComponent />
      <Space h={80} />
      <Partners />
      <ShoptetLogo />
      <Space h={80} />
      <Faq />
      <BottomCta />
      <Space h={80} />
    </>
  );
}
