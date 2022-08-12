import { useState } from "react";
import { Navbar, MediaQuery, Button, Accordion, Stack } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { IconMapPin } from "@tabler/icons";
import { NextLink } from "@mantine/next";
export default function CustomNavbar({
  links,
  isOpen,
}: {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
  isOpen: boolean;
  toggle: () => void;
}) {
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Link key={item.link} href={item.link}>
        <a>{item.label}</a>
      </Link>
    ));
    if (menuItems) {
      return (
        <Accordion key={link.label} variant="filled">
          <Accordion.Item value={link.label}>
            <Accordion.Control>{link.label}</Accordion.Control>
            <Accordion.Panel>
              <Stack ml={"md"}>
                <Link key={link.link} href={link.link}>
                  <a>{link.label}</a>
                </Link>
                {menuItems}
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      );
    }
    return (
      <Link key={link.label} href={link.link} passHref>
        <a className=" p-4 inline-block w-full">{link.label}</a>
      </Link>
    );
  });

  return (
    <MediaQuery largerThan="sm" styles={{ display: "none", width: 0 }}>
      <Navbar
        width={{ base: 300 }}
        p="xs"
        hidden={!isOpen}
        hiddenBreakpoint={"sm"}
      >
        <Navbar.Section grow>{items}</Navbar.Section>
        <Navbar.Section>
          <Button
            size="sm"
            variant="light"
            color="green"
            fullWidth
            component="a"
            //TODO1: change to brand color
            leftIcon={<IconMapPin size={14} />}
          >
            Vratná místa
          </Button>
        </Navbar.Section>
      </Navbar>
    </MediaQuery>
  );
}
