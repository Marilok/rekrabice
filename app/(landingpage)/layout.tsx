"use client";

import { AppShell, AppShellMain } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Footer from "./_components/Footer/Footer";
import HeaderAction from "./_components/Header/Header";
import Navbar from "./_components/Navbar/Navbar";

export default function LandingPageLayout({ children }: { children: any }) {
  const [isOpen, { toggle }] = useDisclosure(false);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !isOpen },
      }}
    >
      <HeaderAction links={HEADER_DATA} isOpen={isOpen} toggle={toggle} />
      <Navbar links={HEADER_DATA} toggle={toggle} />
      <AppShellMain>{children}</AppShellMain>
      <Footer data={FOOTER_DATA} />
    </AppShell>
  );
}

const FOOTER_DATA = [
  {
    title: "Rozcestník",
    links: [
      {
        label: "Jak to funguje?",
        link: "/",
      },
      {
        label: "Napsali o nás",
        link: "napsali-o-nas",
      },
    ],
  },
  {
    title: "O nás",
    links: [
      {
        label: "O projektu",
        link: "o-nas",
      },
      {
        label: "Kontakty",
        link: "/kontakt",
      },
    ],
  },
];
const HEADER_DATA = [
  {
    link: "/",
    label: "Jak to funguje?",
  },
  {
    link: "/o-nas",
    label: "O nás",
  },
  {
    link: "/napsali-o-nas",
    label: "Napsali o nás",
  },
  {
    link: "/kontakt",
    label: "Kontakt",
  },
];
