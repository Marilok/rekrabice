import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
// import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
// import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { getCookie, setCookie } from "cookies-next";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import "../app/globals.css";

export default function App({
  Component,
  pageProps,
  colorSchemeProps,
}: {
  Component: any;
  colorSchemeProps: ColorScheme;
  pageProps: any;
}) {
  // const [supabaseClient] = useState(() => createPagesBrowserClient());

  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    colorSchemeProps || "dark",
  );

  useEffect(() => {
    if (
      window.matchMedia("(prefers-color-scheme: dark)").matches
      && !colorSchemeProps
    ) {
      setColorScheme("dark");
    } else if (
      window.matchMedia("(prefers-color-scheme: light)").matches
      && !colorSchemeProps
    ) {
      setColorScheme("light");
    } else if (
      window.matchMedia("(prefers-color-scheme: normal)").matches
      && !colorSchemeProps
    ) {
      setColorScheme("light");
    }
  }, [colorSchemeProps]);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === "dark" ? "light" : "dark");
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
      {/* <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps?.initialSession}
      > */}
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
          <Notifications />
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
      <GoogleScripts />
      {/* </SessionContextProvider> */}
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorSchemeProps: getCookie("mantine-color-scheme", ctx),
});

function GoogleScripts() {
  return (
    <>
      <GoogleTagsScript />
      <GoogleAnalyticsFist />
      <GoogleAnalyticsSecond />
    </>
  );
}

function GoogleTagsScript() {
  return (
    <Script id="gtag3">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NXPWLNM');`}
    </Script>
  );
}

function GoogleAnalyticsFist() {
  return (
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-7G3GVM43NK"
      id="gtag1"
    />
  );
}
function GoogleAnalyticsSecond() {
  return (
    <Script id="gtag2">
      {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7G3GVM43NK');`}
    </Script>
  );
}
