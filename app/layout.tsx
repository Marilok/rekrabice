// import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider } from "./mantineClientComponents";
import SupabaseProvider from "./supabase-provider";

export const metadata = {
  title: "ReKrabice",
  description: "Some dummy text.",
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
            {children}
          </MantineProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
