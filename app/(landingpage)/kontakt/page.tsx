import { Metadata } from "next";
import Contact from "./_components/Contact/Contact";

export const metadata: Metadata = {
  title: "Kontakt | ReKrabice",
  description: "Kontaktujte nás a spojme síly pro lepší svět",
};

export default async function Kontakt() {
  return <Contact />;
}
