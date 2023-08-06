"use client";

import {
  ActionIcon,
  Avatar,
  Badge,
  Group,
  ScrollArea,
  Table,
  Text,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import { IconMoneybag, IconTruckDelivery } from "@tabler/icons-react";
import formatDate from "../../../lib/formatDate";
import formatInvoiceNumber from "../../../lib/formatInvoiceNumber";

interface OrdersTableProps {
  orders: {
    retailer_id: { favicon_url: string; brand_name: string };
    status_id: { description: string };
    total_price: number;
    issue_date: string;
    invoice_number: string;
  }[];
}

const statusColors: Record<string, string> = {
  "čeká na platbu": "blue",
  zaplaceno: "grape",
  odesláno: "green",
  stornováno: "red",
};

export default function OrdersTable({ orders }: OrdersTableProps) {
  const theme = useMantineTheme();
  const rows = orders.map((order) => (
    <tr key={order.invoice_number}>
      <td>
        <Text fz="sm">{formatInvoiceNumber(order.invoice_number)}</Text>
      </td>
      <td>
        <Group spacing="sm">
          {/* // TODO: make this nextjs image */}
          <Avatar
            size={30}
            src={order.retailer_id.favicon_url}
            radius={30}
            alt="Logo eshopu"
          />
          <Text fz="sm" fw={500}>
            {order.retailer_id.brand_name}
          </Text>
        </Group>
      </td>

      <td>
        <Badge
          color={statusColors[order.status_id.description.toLowerCase()]}
          variant={theme.colorScheme === "dark" ? "light" : "outline"}
        >
          {order.status_id.description}
        </Badge>
      </td>
      <td>
        <Text fz="sm" c="dimmed">
          {order.total_price} Kč
        </Text>
      </td>
      <td>
        <Text fz="sm" color="dimmed">
          {formatDate(order.issue_date)}
        </Text>
      </td>
      <td>
        <Group spacing={4} position="right">
          <Tooltip label="Označit jako zaplaceno">
            <ActionIcon disabled>
              <IconMoneybag size="1rem" stroke={1.5} color="pink" />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Označit jako odesláno">
            <ActionIcon disabled>
              <IconTruckDelivery size="1rem" stroke={1.5} color="green" />
            </ActionIcon>
          </Tooltip>
        </Group>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Číslo objednávky</th>
            <th>Eshop</th>
            <th>Stav</th>
            <th>Celková cena</th>
            <th>Datum objednání</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
