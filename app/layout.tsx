import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Metadata } from "next";
import { Lexend } from "next/font/google";
import React from "react";
import "./global.css";

export const metadata: Metadata = {
  title: {
    template: "%s | ReKrabice",
    default: "ReKrabice", // a default is required when creating a template
  },
  description:
    "Nestav doma věže z kartonových krabic. Všechny ReKrabice můžeš vrátit a ušetřit tak našim lesům. A to zcela zdarma!",
  robots: "noimageindex",
  metadataBase: new URL("https://rekrabice.cz"),
  openGraph: {
    images: "/opengraph-image.png.png",
    title: "ReKrabice",
    description: "Znovupoužitelná krabice, ze které budete mít radost. 📦♻️",
  },
};

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={lexend.className}>
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="robots" content="noimageindex" />
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider
          defaultColorScheme="auto"
          theme={{
            colors: {
              brand: [
                "#e7ffe9",
                "#d0fed2",
                "#9ffea2",
                "#6bfc6f",
                "#43fc45",
                "#2dfc2d",
                "#22fc1f",
                "#15e114",
                "#02c70a",
                "#00ad00",
                "#02BA09",
              ],
            },
            fontFamilyMonospace: "Lexend, monospace",
            headings: { fontFamily: "Lexend, sans-serif" },
            primaryColor: "green",
          }}
        >
          <Notifications />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
