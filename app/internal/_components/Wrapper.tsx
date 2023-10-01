"use client";

import { AppShell, AppShellMain } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
  IconBarcode,
  IconCashBanknote,
  IconFileInvoice,
  IconPackage,
  IconScan,
  IconSticker,
  IconTruckDelivery,
} from "@tabler/icons-react";
import StyledNavbar from "components/apps/Navbar/Navbar";
import React from "react";
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
    link: "/internal/scanner",
    label: "Skenování",
    icon: <IconScan stroke={1.5} />,
  },
  {
    link: "/internal/pallete",
    label: "Palety",
    icon: <IconPackage stroke={1.5} />,
  },
  {
    link: "/internal/sell",
    label: "Prodat paletu",
    icon: <IconCashBanknote stroke={1.5} />,
  },
  {
    link: "/internal/orders",
    label: "Objednávky",
    icon: <IconTruckDelivery stroke={1.5} />,
  },
  {
    link: "/internal/invoices",
    label: "Faktury",
    icon: <IconFileInvoice stroke={1.5} />,
  },
  {
    link: "/internal/stickers-generator",
    label: "Generátor štítků",
    icon: <IconSticker stroke={1.5} />,
  },
  {
    link: "/internal/new-word",
    label: "Návrh nových slov",
    icon: <IconBarcode stroke={1.5} />,
  },
];
