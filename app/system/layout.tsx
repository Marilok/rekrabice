import { Metadata } from "next";
import React from "react";
import StyledNavbar from "../_components/Layouts/Navbar";
import { AppShell } from "../mantineClientComponents";

export const metadata: Metadata = {
  title: "Systém ReKrabice",
  description: "Interní systém pro trasování ReKrabic.",
  robots: "none, noimageindex",
};

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell
      // @ts-expect-error Server Component TODO
      navbar={<StyledNavbar />}
      styles={{
        main: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        },
      }}
    >
      {children}
    </AppShell>
  );
}
