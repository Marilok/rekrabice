import { createStyles, Navbar, Group, Code, Button, Menu, AppShell} from "@mantine/core";
import { UserButton } from "./UserButton/UserButton";
import { useState, useEffect } from "react";
import {supabaseClient as supabase} from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import CustomNavbar from "./Navbar";
import { withPageAuth, User } from "@supabase/auth-helpers-nextjs";
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
  IconArrowBackUp,
  IconHelp,
  IconTransferIn,
  IconTransferOut,
  IconChartArea,
} from "@tabler/icons";


export default function App({ children }:any) {

  return (
    <AppShell
      padding="md"
      navbar={
        <CustomNavbar supabase={supabase} session={supabase.auth.session()}/>
      }
      
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
}
