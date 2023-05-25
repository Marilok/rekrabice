import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Head from "next/head";
import Script from "next/script";
import Footer from "./Footer";
import Header from "./Header";
import CustomNavbar from "./Navbar";

export default function LandingPageWrapper({
  children,
  title,
  titleRemoveName = false,
  styles,
  description,
}: {
  children?: any;
  title?: string;
  titleRemoveName?: boolean;
  styles?: any;
  description?: string;
}) {
  const [isOpen, { toggle }] = useDisclosure(false);

  return (
    <>
      <Head>
        <title>
          {title && titleRemoveName === false
            ? `${title} | ReKrabice`
            : title && titleRemoveName === true
              ? `${title}`
              : "ReKrabice"}
        </title>
        <meta
          name="description"
          content={description ? `${description} | ReKrabice` : " "}
        />
      </Head>
      <AppShell
        // padding="md"
        navbar={
          <CustomNavbar links={HEADER_DATA} isOpen={isOpen} toggle={toggle} />
        }
        header={<Header links={HEADER_DATA} isOpen={isOpen} toggle={toggle} />}
        footer={<Footer data={FOOTER_DATA} />}
        navbarOffsetBreakpoint={5000}
        styles={styles}
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
      title: "Rozcestník",
      links: [
        // {
        //   label: "Kde ji vrátit?",
        //   link: "/mapa",
        // },
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
    // {
    //   title: "Pro firmy",
    //   links: [
    //     {
    //       label: "Co to je?",
    //       link: "/pro-firmy",
    //     },
    //   ],
    // },
    {
      title: "O nás",
      links: [
        {
          label: "O projektu",
          link: "o-nas",
        },
        // {
        //   label: "/baleni",
        //   link: "/baleni",
        // },
        {
          label: "Kontakty",
          link: "/kontakt",
        },
      ],
    },
  ],
  HEADER_DATA = [
    {
      link: "/",
      label: "Jak to funguje?",
    },
    // {
    //   link: "/pro-firmy",
    //   label: "Pro firmy",
    // },

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
