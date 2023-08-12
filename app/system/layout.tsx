"use server";

import { AppShell, AppShellMain } from "@mantine/core";
import {
  IconArrowDown,
  IconArrowUp,
  IconPhone,
  IconQuestionMark,
} from "@tabler/icons-react";
import { Metadata } from "next";
import React from "react";
import StyledNavbar from "../../components/apps/Navbar/Navbar";
import translations from "../../translations/translations";

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
      navbar={{ width: 300, breakpoint: "xs" }}
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
      <StyledNavbar links={LINKS_OBJECT} />
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
}

const LINKS_OBJECT = [
  {
    link: "/system/prijmout",
    label: translations.systemNavbar.accept,
    icon: <IconArrowDown stroke={1.5} />,
  },
  {
    link: "/system/odeslat",
    label: translations.systemNavbar.send,
    icon: <IconArrowUp stroke={1.5} />,
  },
  {
    link: "/system/navod",
    label: translations.systemNavbar.faq,
    icon: <IconQuestionMark stroke={1.5} />,
  },
  {
    link: "/system/kontakt",
    label: translations.systemNavbar.contact,
    icon: <IconPhone stroke={1.5} />,
  },
];
