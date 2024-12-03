import createClientServerCache from "@/utils/supabase/serverCache";
import { AppShell, AppShellMain } from "@mantine/core";
import {
  IconChartBar,
  IconCubeSend,
  IconHistory,
  IconPhone,
  IconServer,
} from "@tabler/icons-react";
import React from "react";
import StyledNavbar from "./Navbar/Navbar";

export default async function Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClientServerCache();

  const { data, error } = await supabase
    .from("eshops_users")
    .select("eshop_id(brand_name, logo_url, favicon_url)")
    .single();

  if (error) {
    console.log(error);
  }

  return (
    <AppShell
      navbar={{
        width: 300,
        breakpoint: "xs",
        collapsed: { mobile: false, desktop: false },
      }}
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
      <StyledNavbar links={LINKS} data={data} />
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
}

const LINKS = [
  {
    link: "/eshop/odeslat",
    label: "Odeslat krabici",
    icon: <IconCubeSend stroke={1.5} />,
  },
  {
    link: "/eshop/historie",
    label: "Historie pohybů",
    icon: <IconHistory stroke={1.5} />,
  },
  {
    link: "/eshop/statistika",
    label: "Statistika",
    icon: <IconChartBar stroke={1.5} />,
  },
  {
    link: "/eshop/api",
    label: "API dokumentace",
    icon: <IconServer stroke={1.5} />,
  },
  {
    link: "/eshop/kontakt",
    label: "Kontakt",
    icon: <IconPhone stroke={1.5} />,
  },
];
