import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Metadata } from "next";
import React from "react";
import GoogleScripts from "./_analytics/GoogleScripts";
import GoogleTagsNoScript from "./_analytics/GoogleTagsNoScript";
import "./global.css";

export const metadata: Metadata = {
  title: "ReKrabice",
  description:
    "Nestav doma věže z kartonových krabic. Všechny ReKrabice můžeš vrátit a ušetřit tak našim lesům. A to zcela zdarma!",
  robots: "none, noimageindex",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <head>
        <title>ReKrabice</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="robots" content="noimageindex" />
        <ColorSchemeScript />
      </head>
      <body>
        <GoogleTagsNoScript />
        <MantineProvider theme={{ primaryColor: "green" }}>
          <Notifications />
          {children}
        </MantineProvider>
      </body>
      <GoogleScripts />
    </html>
  );
}
