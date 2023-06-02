// import "@mantine/core/styles.css";

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
      <MantineProvider>
        <body>{children}</body>
      </MantineProvider>
    </html>
  );
}
