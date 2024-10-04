import { Group, Paper, SimpleGrid, Text } from "@mantine/core";
import { data as MonthlyUsed } from "../../_data/monthly_used";

import Image from "next/image";
import Tree from "public/emojis/animated/deciduous_tree.png";
import Package from "public/emojis/animated/package.png";

type Stat = {
  label: string;
  description: string;
  stats: string;
  image: string;
};

const getCount = () => {
  return MonthlyUsed.reduce(
    (acc, item) => acc + (item["2023"] || 0) + (item["2024"] || 0),
    0,
  );
};

const count = getCount();

const dataStats = [
  {
    label: "Ušetřených krabic",
    description: "Počet kartonových krabic, které nemusely skončit v koši.",
    stats: count!,
    image: Package,
  },
  {
    label: "Zachráněných stromů",
    description: "Přibližný počet stromů, které nemusely být pokáceny.",
    stats: (count! / 400).toFixed(2).toString(),
    image: Tree,
  },
] as const;

export default function StatsRing() {
  const stats = dataStats.map((stat) => (
    <Paper withBorder radius="md" p="xs" key={stat.label}>
      <Group gap="md" py={"md"}>
        <Text fw={700} fz={32} w={100} ta="right">
          {stat.stats}
        </Text>
        <Image src={stat.image} alt={stat.label} width={50} height={50} />

        <div>
          <Text size="md" tt="uppercase" fw={700}>
            {stat.label}
          </Text>
          <Text size="xs" c="dimmed" fw={400}>
            {stat.description}
          </Text>
        </div>
      </Group>
    </Paper>
  ));

  return <SimpleGrid cols={2}>{stats}</SimpleGrid>;
}
