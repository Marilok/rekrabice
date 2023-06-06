// import "@mantine/core/styles.css";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import React from "react";
import { MantineProvider } from "./mantineClientComponents";
import SupabaseProvider from "./supabase-provider";

export const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log("root - ", session);

  return (
    <html lang="cs">
      <body>
        <SupabaseProvider>
          <MantineProvider>{children}</MantineProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
