import {
  createStyles,
  Navbar,
  Group,
  Code,
  Button,
  Menu,
  AppShell,
} from "@mantine/core";
import { UserButton } from "./UserButton/UserButton";
import { useState, useEffect } from "react";
import { supabaseClient as supabase } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import CustomNavbar from "./Navbar";
import { withPageAuth, User } from "@supabase/auth-helpers-nextjs";

export default function App({ children, session, supabase }: any) {
  return (
    <AppShell
      padding="md"
      navbar={<CustomNavbar session={session} />}
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
