import { AppShell } from "@mantine/core";
import { supabaseClient as supabase } from "@supabase/auth-helpers-nextjs";
import Footer from "./Footer";
import Header from "./Header";

export default function App({ children, session, supabase }: any) {
  return (
    <AppShell
      padding="md"
      //   navbar={<CustomNavbar session={session} />}
      header={<Header links={HEADER_DATA} />}
      footer={<Footer data={FOOTER_DATA} />}
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
  );
}

const FOOTER_DATA = [
  {
    title: "Pro zákazníky",
    links: [
      {
        label: "Kde ji vrátit?",
        link: "/mapa",
      },
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
        link: "o-nas",
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

const HEADER_DATA = [
  {
    link: "/otoc",
    label: "Jak to funguje?",
  },
  {
    link: "/obchod",
    label: "Pro obchody",
    links: [
      {
        link: "/otoc-obchod",
        label: "Jak to funguje?",
      },
      {
        link: "/krabice",
        label: "Krabice",
      },
      {
        link: "/cenik",
        label: "Ceník",
      },
      {
        link: "/kontakt",
        label: "Kontakt",
      },
    ],
  },
  {
    link: "/o-nas",
    label: "O nás",
    links: [
      {
        link: "/o-nas",
        label: "O projektu",
      },
      {
        link: "/faq",
        label: "FAQ",
      },
      {
        link: "/kontakt",
        label: "Kontakt",
      },
    ],
  },
];
