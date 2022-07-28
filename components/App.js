import { createStyles, Navbar, Group, Code, Button, Menu, AppShell} from "@mantine/core";
import { UserButton } from "./UserButton/UserButton";
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import Link from "next/link";
import CustomNavbar from "./Navbar";
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


export default function App({ children }) {

  return (
    <AppShell
      padding="md"
      navbar={
        <CustomNavbar/>
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
