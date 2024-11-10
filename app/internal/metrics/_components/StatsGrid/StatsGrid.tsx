import { Group, Paper, SimpleGrid, Text } from "@mantine/core";
import {
  IconArrowDownRight,
  IconArrowUpRight,
  IconBuildingBank,
  IconCoin,
  IconMinus,
  IconPlus,
} from "@tabler/icons-react";
import { data as financialData, FinancialRecord } from "../../_data/financials";
import classes from "./StatsGrid.module.css";

const icons = {
  coin: IconCoin,
  plus: IconPlus,
  minus: IconMinus,
  bank: IconBuildingBank,
};

const getCurrentDateData = () => {
  const date = new Date();
  const month = date.getMonth() + 1; // months are 0-indexed
  const year = date.getFullYear();

  const currentData = financialData.find((item: FinancialRecord) => {
    const [, itemMonth, itemYear] = item.date.split(".");
    return month === parseInt(itemMonth, 10) && year === parseInt(itemYear, 10);
  });

  const previousData = financialData.find((item: FinancialRecord) => {
    const [, itemMonth, itemYear] = item.date.split(".");
    return (
      month - 1 === parseInt(itemMonth, 10) && year === parseInt(itemYear, 10)
    );
  });

  return { currentData, previousData };
};

const calculateDiff = (current: number, previous: number) =>
  (((current - previous) / previous) * 100).toFixed(2);

const formatNumber = (number: number) =>
  new Intl.NumberFormat("cs-CZ").format(number);

const getColor = (diff: string, isGrowPositive: boolean) => {
  if (diff === "0.00") return "dark";
  return parseFloat(diff) > 0 === isGrowPositive ? "teal" : "red";
};

const { currentData, previousData } = getCurrentDateData();

if (!currentData || !previousData) {
  throw new Error("Data for the current or previous month is missing.");
}

const { income, expenses, liabilities } = currentData;
const profit = income - expenses;

const {
  income: previousIncome,
  expenses: previousExpenses,
  liabilities: previousLiabilities,
} = previousData;
const previousProfit = previousIncome - previousExpenses;

const incomeDiff = calculateDiff(income, previousIncome);
const expensesDiff = calculateDiff(expenses, previousExpenses);
const liabilitiesDiff = calculateDiff(liabilities, previousLiabilities);
const profitDiff = calculateDiff(profit, previousProfit);

const data = [
  {
    title: "Profit (měsíčně)",
    icon: "coin",
    value: `${formatNumber(profit)} Kč`,
    diff: profitDiff,
    color: getColor(profitDiff, true),
  },
  {
    title: "Příjmy (měsíčně)",
    icon: "plus",
    value: `${formatNumber(income)} Kč`,
    diff: incomeDiff,
    color: getColor(incomeDiff, true),
  },
  {
    title: "Výdaje (měsíčně)",
    icon: "minus",
    value: `${formatNumber(expenses)} Kč`,
    diff: expensesDiff,
    color: getColor(expensesDiff, false),
  },
  {
    title: "Závazky (celkem)",
    icon: "bank",
    value: `${formatNumber(liabilities)} Kč`,
    diff: liabilitiesDiff,
    color: getColor(liabilitiesDiff, false),
  },
] as const;

export function StatsGrid() {
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];
    const DiffIcon =
      parseFloat(stat.diff) > 0 ? IconArrowUpRight : IconArrowDownRight;

    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group justify="space-between">
          <Text size="xs" c="dimmed" className={classes.title}>
            {stat.title}
          </Text>
          <Icon className={classes.icon} size="1.4rem" stroke={1.5} />
        </Group>

        <Group align="flex-end" gap="xs" mt={25}>
          <Text className={classes.value}>{stat.value}</Text>
          <Text c={stat.color} fz="sm" fw={500} className={classes.diff}>
            <span>{stat.diff}%</span>
            {stat.diff !== "0.00" && <DiffIcon size="1rem" stroke={1.5} />}
          </Text>
        </Group>
      </Paper>
    );
  });

  return (
    <div className={classes.root}>
      <SimpleGrid spacing="md" cols={4}>
        {stats}
      </SimpleGrid>
    </div>
  );
}
