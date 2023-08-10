import { AppShell, UnstyledButton } from "@mantine/core";
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
    >
      {link.label}
    </UnstyledButton>
  ));

  return (
    <AppShell.Navbar py="md" px={4}>
      {items}
    </AppShell.Navbar>
  );
}
