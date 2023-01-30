import { AppProps } from 'next/app';
import Head from 'next/head';
import { NotificationsProvider } from '@mantine/notifications';
// import { UserProvider } from "@supabase/auth-helpers-react";
// import { supabaseClient as supabase } from "@supabase/auth-helpers-nextjs";
import { GetServerSidePropsContext } from 'next';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';
import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
} from '@mantine/core';
import { useState, useEffect } from 'react';
import { useColorScheme } from '@mantine/hooks';
import '../styles/globals.css';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;

  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    props.colorScheme || 'dark',
  );

  useEffect(() => {
    if (
      window.matchMedia('(prefers-color-scheme: dark)').matches
      && !props.colorScheme
    ) {
      setColorScheme('dark');
    } else if (
      window.matchMedia('(prefers-color-scheme: light)').matches
      && !props.colorScheme
    ) {
      setColorScheme('light');
    } else if (
      window.matchMedia('(prefers-color-scheme: normal)').matches
      && !props.colorScheme
    ) {
      setColorScheme('light');
    }
  }, [props.colorScheme]);

  const toggleColorScheme = (value?: ColorScheme) => {
    //     if (value == "system") {
    // deleteCookie("mantine-color-scheme");
    //     }
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  return (
    <>
      <Head>
        <title>ReKrabice</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      {/* <UserProvider supabaseClient={supabase}> */}
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            primaryColor: 'green',
            // colors: {
            //   brand: [
            //     "#8DAF87",
            //     "#79A971",
            //     "#64A759",
            //     "#54A148",
            //     "#459D37",
            //     "#369A27",
            //     "#289916",
            //     "#2D7E20",
            //     "#2E6925",
            //     "#2E5827",
            //     "#2D4B28",
            //     "#2A4027",
            //     ,
            //     "#283825",
            //   ],
            // },
            // primaryColor: "brand",

            colorScheme,
          }}
        >
          <NotificationsProvider>
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>

      {/* </UserProvider> */}
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx),
});

// App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => {
//   // const preferredColorScheme = useColorScheme(undefined);
//   const colorScheme = getCookie("mantine-color-scheme", ctx);
//   console.log("window", window);

//   return {
//     colorScheme: colorScheme,
//     // preferredColorScheme: preferredColorScheme,
//   };
// };
