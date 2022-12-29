import { useState } from "react";
import { AppShell, Navbar, MediaQuery } from "@mantine/core";
import Script from "next/script";

import CustomNavbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
import { useDisclosure } from "@mantine/hooks";

export default function App({ children, session, supabase }: any) {
  const [isOpen, { toggle }] = useDisclosure(false);

  return (
    <>
      <AppShell
        // padding="md"
        navbar={
          <CustomNavbar links={HEADER_DATA} isOpen={isOpen} toggle={toggle} />
        }
        header={<Header links={HEADER_DATA} isOpen={isOpen} toggle={toggle} />}
        footer={<Footer data={FOOTER_DATA} />}
        navbarOffsetBreakpoint={5000}

        // styles={(theme) => ({
        //   main: {
        //     backgroundColor:
        //       theme.colorScheme === "dark"
        //         ? theme.colors.dark[8]
        //         : theme.colors.gray[0],
        //   },
        // })}
      >
        {children}
      </AppShell>
      <Script src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js" />
    </>
  );
}

const FOOTER_DATA = [
  {
    title: "Pro zákazníky",
    links: [
      // {
      //   label: "Kde ji vrátit?",
      //   link: "/mapa",
      // },
      {
        label: "Jak to funguje?",
        link: "/otoc",
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
        link: "/otoc",
      },
      {
        label: "Kontakty",
        link: "/kontakt",
      },
      //     {
      //       label: "Ceník",
      //       link: "#",
      //     },
      //     {
      //       label: "Kontakty",
      //       link: "/kontakt",
      //     },
    ],
  },
  {
    title: "O nás",
    links: [
      {
        label: "O projektu",
        link: "o-nas",
      },
      // {
      //   label: "GDPR",
      //   link: "/gdpr",
      // },
      {
        label: "Kontakty",
        link: "/kontakt",
      },
    ],
  },
];

const HEADER_DATA = [
  {
    link: "/otoc",
    label: "Jak to funguje?",
  },
  // {
  //   link: "/obchod",
  //   label: "Pro obchody",
  //   links: [
  //     {
  //       link: "/otoc",
  //       label: "Jak to funguje?",
  //     },
  //     // {
  //     //   link: "/krabice",
  //     //   label: "Krabice",
  //     // },
  //     // {
  //     //   link: "/cenik",
  //     //   label: "Ceník",
  //     // },
  //     {
  //       link: "/kontakt",
  //       label: "Kontakt",
  //     },
  //   ],
  // },
  // {
  //   link: "/statistika",
  //   label: "Statistika",
  // },
  {
    link: "/o-nas",
    label: "O nás",
    links: [
      {
        link: "/o-nas",
        label: "O projektu",
      },
      // {
      //   link: "/faq",
      //   label: "FAQ",
      // },
      {
        link: "/kontakt",
        label: "Kontakt",
      },
    ],
  },
];
