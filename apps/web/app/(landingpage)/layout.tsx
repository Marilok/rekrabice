"use client";

import { AppShell, AppShellMain } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Footer from "./_components/Footer/Footer";
import HeaderAction from "./_components/Header/Header";
import Navbar from "./_components/Navbar/Navbar";

export default function Layout({ children }: { children: any }) {
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
      <HeaderAction isOpen={isOpen} toggle={toggle} />
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
        label: "O ReKrabicích",
        link: "/",
      },

      // {
      //   label: "Jak ji vrátit?",
      //   link: "/vratit",
      // },
      // {
      //   label: "Pro eshopy",
      //   link: "/pro-eshopy",
      // },
    ],
  },
  {
    title: "O nás",
    links: [
      {
        label: "Náš tým a příběh",
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
    label: "Jak fungují ReKrabice?",
  },
  {
    link: "/o-nas",
    label: "Náš tým a příběh",
  },
  {
    link: "/kontakt",
    label: "Kontakt",
  },
];
