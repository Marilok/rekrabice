"use client";

import createClientBrowser from "@/utils/supabase/client";
import {
  AppShell,
  Avatar,
  Code,
  Divider,
  Group,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import translations from "translations/translations";
import classes from "./Navbar.module.css";

export default function StyledNavbar({
  links,
  data,
}: {
  links: any[];
  data: any;
}) {
  const pathname = usePathname();
  const supabase = createClientBrowser();
  const router = useRouter();

  const handleSignout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    } else {
      router.push("/eshop/login");
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
            height={40}
            width="120"
            alt="logo icon"
          />
          <Code>{translations.systemNavbar.version} 0.3.0</Code>
        </Group>
        <Divider my="sm" />
        {navLinks}
      </AppShell.Section>

      <Divider my="sm" />

      <AppShell.Section>
        <Link
          href="/eshop/login"
          className={classes.link}
          onClick={handleSignout}
        >
          <IconLogout stroke={1.5} />
          <span>{translations.systemNavbar.logout}</span>
        </Link>
      </AppShell.Section>

      <Divider my="sm" />
      <UnstyledButton className={classes.user}>
        <Group>
          <Avatar src={data.eshop_id.favicon_url} radius="xl" />

          <div style={{ flex: 1 }}>
            <Text size="sm" fw={500}>
              {data.eshop_id.brand_name}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </AppShell.Navbar>
  );
}
