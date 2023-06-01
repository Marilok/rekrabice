"use client";

import { AppShell } from "@mantine/core";
import Head from "next/head";
import React from "react";
import StyledNavbar from "./components/Navbar";

export default function ObsluhaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Systém ReKrabice</title>
        <meta
          name="description"
          content="Interní systém pro trasování ReKrabic."
        />
      </Head>
      <AppShell
        navbar={<StyledNavbar />}
        styles={() => ({
          main: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          },
        })}
      >
        {children}
      </AppShell>
    </>
  );
}
