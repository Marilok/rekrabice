import { AreaChart, LineChart } from "@mantine/charts";
import { Card, SimpleGrid, Space, Text, Title } from "@mantine/core";
import { data as MonthlyRetailers } from "../../_data/monthly_retailers";
import { data as MonthlyRetention } from "../../_data/monthly_retailers_retention";
import { data as MonthlyReturned } from "../../_data/monthly_returned";
import { data as MonthlyUsed } from "../../_data/monthly_used";

interface ChartCardProps {
  title: string;
  description: string;
  ChartComponent: React.ElementType;
  chartProps: any;
}

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  description,
  ChartComponent,
  chartProps,
}) => (
  <Card w="500" p={"md"}>
    <Title order={2}>{title}</Title>
    <Text c="dimmed" h={60}>
      {description}
    </Text>
    <Space h="md" />
    <ChartComponent {...chartProps} />
  </Card>
);

const series = [
  { name: "2023", color: "teal.6" },
  { name: "2024", color: "brand.6" },
  { name: "2025", color: "gray.6" },
];

export default function Charts() {
  return (
    <SimpleGrid spacing={"md"} cols={2}>
      <ChartCard
        title="Využitých ReKrabic za měsíc 📦"
        description="Primární metrika (north-star metric), kterou sledujeme náš růst a dopad na svět"
        ChartComponent={LineChart}
        chartProps={{
          h: "280",
          data: MonthlyUsed,
          dataKey: "month",
          series,
          curveType: "monotone",
          gridAxis: "xy",
          withLegend: true,
          legendProps: { verticalAlign: "bottom", height: 50 },
        }}
      />
      <ChartCard
        title="Počet vrácených ReKrabic ♻️"
        description="Touto metrikou sledujeme, jak jednoduché je pro zákazníky ReKrabici vrátit"
        ChartComponent={LineChart}
        chartProps={{
          h: "280",
          data: MonthlyReturned,
          dataKey: "month",
          series,
          curveType: "monotone",
          gridAxis: "xy",
          withLegend: true,
          legendProps: { verticalAlign: "bottom", height: 50 },
        }}
      />
      <ChartCard
        title="Počet eshopařů 🛒"
        description="Touto metrikou sledujeme, kolik eshopů udělalo krok k zero-waste a používá ReKrabice"
        ChartComponent={AreaChart}
        chartProps={{
          h: "280",
          data: MonthlyRetailers,
          dataKey: "month",
          yAxisProps: { domain: [0, 10] },
          series,
          curveType: "step",
          gridAxis: "xy",
          withLegend: true,
          legendProps: { verticalAlign: "bottom", height: 50 },
        }}
      />
      <ChartCard
        title="Retence eshopařů 💚"
        description="Touto metrikou sledujeme, jak jsou spokojení naši eshopaři"
        ChartComponent={AreaChart}
        chartProps={{
          h: "280",
          data: MonthlyRetention,
          dataKey: "month",
          yAxisProps: { domain: [0, 100] },
          series,
          unit: "%",
          curveType: "step",
          gridAxis: "xy",
          withLegend: true,
          legendProps: { verticalAlign: "bottom", height: 50 },
        }}
      />
    </SimpleGrid>
  );
}
