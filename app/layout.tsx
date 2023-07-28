// mantine v7
// import "@mantine/core/styles.css";
// import "@mantine/form/styles.css";
// import "@mantine/notifications/styles.css";

import React from "react";
import { Notifications } from "./_components/client/Notifications";
import "./global.css";
import { MantineProvider } from "./mantineClientComponents";
import SupabaseProvider from "./supabase-provider";

export const metadata = {
  title: "ReKrabice",
  description:
    "Nestav doma věže z kartonových krabic. Všechny ReKrabice můžeš vrátit a ušetřit tak našim lesům. A to zcela zdarma!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      {/* <head><ColorSchemeScript /> future migration to Mantine v7</head> */}
      <body>
        <SupabaseProvider>
          <MantineProvider
            theme={{ primaryColor: "green" }}
            withCSSVariables
            withGlobalStyles
            withNormalizeCSS
          >
            <Notifications />
            {children}
          </MantineProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
