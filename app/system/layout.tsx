import { Metadata } from "next";
import React from "react";
import { AppShell } from "../mantineClientComponents";
import StyledNavbar from "./_components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Systém ReKrabice",
  description: "Interní systém pro trasování ReKrabic.",
  robots: "none, noimageindex",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell
      // @ts-ignore TODO
      navbar={<StyledNavbar />}
      styles={{
        main: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        },
      }}
      layout="alt"
    >
      {children}
    </AppShell>
  );
}
