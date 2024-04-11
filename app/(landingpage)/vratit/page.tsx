import { Metadata } from "next";
import HeroContainer from "./_components/HeroContainer";

export const metadata: Metadata = {
  title: "Vrátit",
  description: "Návod, jak vrátit ReKrabici",
};

export const dynamic = "force-dynamic";

export default function Page() {
  return <HeroContainer />;
}
