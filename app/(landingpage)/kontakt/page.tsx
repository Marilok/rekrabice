import { Metadata } from "next";
import Contact from "./_components/Contact/Contact";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktujte nás a spojme síly pro lepší svět",
};

export default function Page() {
  return <Contact />;
}
