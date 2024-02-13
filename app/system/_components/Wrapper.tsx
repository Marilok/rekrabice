"use client";

import { AppShell, AppShellMain } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
  IconArrowDown,
  IconArrowUp,
  IconHistory,
  IconPhone,
  IconQuestionMark,
} from "@tabler/icons-react";
import StyledNavbar from "components/apps/Navbar/Navbar";
import React from "react";
import translations from "translations/translations";
import StyledHeader from "./Header";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();

  const smallScreen = useMediaQuery("(max-width: 48em)"); // TODOL refactor this to sm breakpoint

  return (
    <AppShell
      navbar={{
        width: 300,
        breakpoint: "xs",
        collapsed: { mobile: !mobileOpened, desktop: false },
      }}
      styles={{
        main: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        },
      }}
      header={{
        height: { base: 50, md: 70 },
        collapsed: !smallScreen,
      }}
      layout={smallScreen ? "default" : "alt"}
    >
      <StyledHeader mobileOpened={mobileOpened} toggleMobile={toggleMobile} />
      <StyledNavbar links={LINKS} />
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
}

const LINKS = [
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
    link: "/system/historie",
    label: translations.systemNavbar.history,
    icon: <IconHistory stroke={1.5} />,
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
