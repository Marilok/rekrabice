import { AppShell } from '@mantine/core';
import Script from 'next/script';
import { useDisclosure } from '@mantine/hooks';
import Head from 'next/head';
import CustomNavbar from './Navbar';
import Footer from './Footer';
import Header from './Header';

export default function App({ children, title }: {children?:any, title?:string}) {
  const [isOpen, { toggle }] = useDisclosure(false);

  return (
    <>
      <Head>
        <title>{title ? `${title} | ReKrabice` : 'ReKrabice'}</title>
      </Head>
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
    title: 'Pro lidi',
    links: [
      // {
      //   label: "Kde ji vrátit?",
      //   link: "/mapa",
      // },
      {
        label: 'Jak to funguje?',
        link: '/clovek',
      },
      {
        label: 'Kontakty',
        link: '/kontakt',
      },
      {
        label: '/baleni',
        link: '/baleni',
      },
    ],
  },
  {
    title: 'Pro eshopy',
    links: [
      {
        label: 'Co to je?',
        link: '/firma',
      },
      {
        label: 'Kontakty',
        link: '/kontakt',
      },
      {
        label: '/baleni',
        link: '/baleni',
      },
    ],
  },
  {
    title: 'O nás',
    links: [
      {
        label: 'O projektu',
        link: 'o-nas',
      },
      {
        label: 'Kontakty',
        link: '/kontakt',
      },
    ],
  },
];

const HEADER_DATA = [
  {
    link: '/clovek',
    label: 'Jsem člověk',
  },
  {
    link: '/firma',
    label: 'Jsem firma',
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
    link: '/o-nas',
    label: 'O nás',

  },
  {
    link: '/kontakt',
    label: 'Kontakt',
  },
];
