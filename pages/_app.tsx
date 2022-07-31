import { AppProps } from "next/app";
import Head from "next/head";
import { NotificationsProvider } from "@mantine/notifications";
import { UserProvider } from "@supabase/auth-helpers-react";
import { supabaseClient as supabase } from "@supabase/auth-helpers-nextjs";
import { GetServerSidePropsContext } from "next";
import { getCookie, setCookie } from "cookies-next";
import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
} from "@mantine/core";
import { useState } from "react";
import { useColorScheme } from "@mantine/hooks";
import "../styles/globals.css";

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;

  //This does not work on SSR
  // const preferredColorScheme = useColorScheme();

  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    props.colorScheme
  );

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    setCookie("mantine-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  return (
    <>
      <Head>
        <title>Zelená krabice</title>
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
          theme={{ colorScheme }}
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
  colorScheme: getCookie("mantine-color-scheme", ctx),
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
