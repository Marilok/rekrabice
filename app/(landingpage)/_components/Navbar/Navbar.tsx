import { AppShell, Button, UnstyledButton } from "@mantine/core";
import { IconRecycle } from "@tabler/icons-react";
import Link from "next/link";
import classes from "./Navbar.module.css";

export default function Navbar({
  links,
  toggle,
}: {
  links: any[];
  toggle: () => void;
}) {
  const items = links.map((link) => (
    <UnstyledButton
      key={link.label}
      component={Link}
      href={link.link}
      className={classes.control}
      onClick={toggle}
      fw={500}
    >
      {link.label}
    </UnstyledButton>
  ));

  return (
    <AppShell.Navbar py="md" px={4}>
      {items}
      <Link href="/vratit" className="w-full no-underline">
        <Button leftSection={<IconRecycle size="16" />} py="xs" px="md" fullWidth       onClick={toggle}
>
          Vrátit ReKrabici
        </Button>
      </Link>
    </AppShell.Navbar>
  );
}
