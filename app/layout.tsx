// import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider } from "./mantineClientComponents";

export const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
