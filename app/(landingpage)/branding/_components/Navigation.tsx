import { Box, Group, Text, rem } from "@mantine/core";
import { IconListSearch } from "@tabler/icons-react";
import Link from "next/link";
import classes from "./Navigation.module.css";

const links = [
  { label: "Logotyp", link: "#logotyp", order: 1 },
  { label: "Barvy", link: "#barvy", order: 1 },
  { label: "Primární barvy", link: "#primarni-barvy", order: 1 },
  { label: "Sekundární barvy", link: "#sekundarni-barvy", order: 1 },
  { label: "Typografie", link: "#typografie", order: 1 },
  { label: "Hlavní písmo", link: "#hlavni-pismo", order: 2 },
  { label: "Doplňkové písmo", link: "#doplnkove-pismo", order: 2 },
  { label: "Ikonky", link: "#ikonky", order: 1 },
  { label: "Emotikony", link: "#emotikony", order: 1 },
  { label: "Správné psaní názvů", link: "#spravne-psani-nazvu", order: 1 },
  { label: "Assets", link: "#assets", order: 1 },
];

// TODO: fix active link
// const active = "#overlays";

export default function Navigation() {
  const items = links.map((item) => (
    <Box
      component={Link}
      href={item.link}
      key={item.label}
      className={classes.link}
      //   className={cx(classes.link, {
      //     [classes.linkActive]: active === item.link,
      //   })}
      style={{ paddingLeft: `calc(${item.order} * var(--mantine-spacing-md))` }}
    >
      {item.label}
    </Box>
  ));

  return (
    <div className="sticky top-24">
      <Group mb="md">
        <IconListSearch
          style={{ width: rem(18), height: rem(18) }}
          stroke={1.5}
        />
        <Text>Branding Guidelines</Text>
      </Group>
      {items}
    </div>
  );
}
