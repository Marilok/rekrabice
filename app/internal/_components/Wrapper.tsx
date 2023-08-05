"use client";

import { AppShell } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import StyledHeader from "./Header";
import StyledNavbar from "./Navbar";

export default function Wrapper({ children }: { children: any }) {
  const [opened, setOpened] = useState(false);
  const smallScreen = useMediaQuery("(max-width: 48em)"); // TODOL refactor this to sm breakpoint

  return (
    <AppShell
      layout={smallScreen ? "default" : "alt"}
      navbarOffsetBreakpoint="sm"
      navbar={<StyledNavbar opened={opened} />}
      header={<StyledHeader opened={opened} setOpened={setOpened} />}
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
