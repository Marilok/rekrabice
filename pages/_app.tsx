import { NotificationsProvider } from "@mantine/notifications";
import { AppProps } from "next/app";
import Head from "next/head";
// import { UserProvider } from "@supabase/auth-helpers-react";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { getCookie, setCookie } from "cookies-next";
import { GetServerSidePropsContext } from "next";
import Script from "next/script";
import { useEffect, useState } from "react";
import "../styles/globals.css";

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;

  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    props.colorScheme || "dark"
  );

  useEffect(() => {
    if (
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      !props.colorScheme
    ) {
      setColorScheme("dark");
    } else if (
      window.matchMedia("(prefers-color-scheme: light)").matches &&
      !props.colorScheme
    ) {
      setColorScheme("light");
    } else if (
      window.matchMedia("(prefers-color-scheme: normal)").matches &&
      !props.colorScheme
    ) {
      setColorScheme("light");
    }
  }, [props.colorScheme]);

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
        <title>ReKrabice</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            primaryColor: "green",
            colorScheme,
          }}
        >
          <NotificationsProvider>
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.G_TAG}`}
        id="gtag1"
      ></Script>
      <Script id="gtag2">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.G_TAG}');`}
      </Script>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie("mantine-color-scheme", ctx),
});
