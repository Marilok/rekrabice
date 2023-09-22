import { Metadata } from "next";
import DynamicMap from "../../../components/Map/Map/DynamicMap";
import HeroContainer from "./_components/HeroContainer";
import ReturnForm from "./_components/ReturnForm";

export const metadata: Metadata = {
  title: "Vrátit",
  description: "Vrátit ReKrabici",
};

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <>
      <HeroContainer />
      <ReturnForm />
      <DynamicMap />
    </>
  );
}
