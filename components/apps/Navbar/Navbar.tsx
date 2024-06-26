"use client";

import { AppShell, Code, Divider, Group } from "@mantine/core";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { IconLogout, IconSettings } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import translations from "translations/translations";
import type { Database } from "types/supabase";
import classes from "./Navbar.module.css";

export default function StyledNavbar({ links }: { links: any[] }) {
  const pathname = usePathname();
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  const handleSignout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    } else {
      router.push("/login");
      router.refresh();
    }
  };

  const navLinks = links.map((item) => (
    <Link
      href={item.link}
      key={item.label}
      className={`${classes.link} ${
        pathname === item.link ? classes.linkActive : ""
      }`}
    >
      {item.icon}
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <AppShell.Navbar p="md">
      <AppShell.Section grow>
        <Group justify="space-between">
          <Image
            src="/branding/ReKrabice_logo_colored.svg"
            height={30}
            width="100"
            alt="logo icon"
          />
          <Code>{translations.systemNavbar.version} Alpha 0.8</Code>
        </Group>
        <Divider my="sm" />
        {navLinks}
      </AppShell.Section>

      <Divider my="sm" />

      <AppShell.Section>
        <Link
          href="nastaveni"
          className={`${classes.link} ${
            pathname!.endsWith("nastaveni") ? classes.linkActive : ""
          }`}
        >
          <IconSettings stroke={1.5} />
          <span>Nastavení</span>
        </Link>
        <Link href="/login" className={classes.link} onClick={handleSignout}>
          <IconLogout stroke={1.5} />
          <span>{translations.systemNavbar.logout}</span>
        </Link>
      </AppShell.Section>
    </AppShell.Navbar>
  );
}
