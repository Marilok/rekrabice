import createClientServer from "@/utils/supabase/server";
import { Group, Paper, Stack, Text } from "@mantine/core";
import Image from "next/image";
import Tree from "public/emojis/animated/deciduous_tree.png";
import Package from "public/emojis/animated/package.png";
import getEshopId from "../_functions/getEshopId";

export default async function Page() {
  const supabase = createClientServer();
  const eshopId = await getEshopId();
  // get count of boxes used by this eshop
  const { count, error } = await supabase
    .from("eshops_sent")
    .select("*", { count: "estimated", head: true })
    .eq("eshop_id", eshopId);

  if (error) {
    console.log(error);
  }

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

  return <StatsRing data={dataStats} />;
}

type Stat = {
  label: string;
  description: string;
  stats: string;
  image: string;
};

function StatsRing({ data }: { data: Stat[] }) {
  const stats = data.map((stat) => (
    <Paper withBorder radius="md" p="xs" key={stat.label}>
      <Group gap="md">
        <Text fw={700} fz={40} w={120} ta="right">
          {stat.stats}
        </Text>
        <Image src={stat.image} alt={stat.label} width={60} height={60} />

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

  return <Stack>{stats}</Stack>;
}
