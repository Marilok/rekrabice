import type { NextPage } from "next";
import Link from "next/link";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Kontakt: NextPage = () => {
  return (
    <>
      <Contact />
      <Footer data={MOCK_DATA} />
    </>
  );
};

export default Kontakt;

const MOCK_DATA = [
  {
    title: "Pro zákazníky",
    links: [
      {
        label: "Kde ji vrátit?",
        link: "#",
      },
      {
        label: "Jak to funguje?",
        link: "#",
      },
      {
        label: "Kontakty",
        link: "/kontakt",
      },
    ],
  },
  {
    title: "Pro obchodníky",
    links: [
      {
        label: "Jak to funguje?",
        link: "#",
      },
      {
        label: "Ceník",
        link: "#",
      },
      {
        label: "Kontakty",
        link: "/kontakt",
      },
    ],
  },
  {
    title: "O nás",
    links: [
      {
        label: "O projektu",
        link: "#",
      },
      {
        label: "GDPR",
        link: "/gdpr",
      },
      {
        label: "Kontakty",
        link: "/kontakt",
      },
    ],
  },
];
