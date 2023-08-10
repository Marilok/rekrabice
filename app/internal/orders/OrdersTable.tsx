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
} from "@mantine/core";
import { IconMoneybag, IconTruckDelivery } from "@tabler/icons-react";
import formatDate from "../../../utils/formatDate";
import formatInvoiceNumber from "../../../utils/formatInvoiceNumber";

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
  const rows = orders.map((order) => (
    <Table.Tr key={order.invoice_number}>
      <Table.Td>
        <Text size="sm">{formatInvoiceNumber(order.invoice_number)}</Text>
      </Table.Td>
      <Table.Td>
        <Group gap="sm">
          {/* // TODO: make this nextjs image */}
          <Avatar
            size={30}
            src={order.retailer_id.favicon_url}
            radius={30}
            alt="Logo eshopu"
          />
          <Text size="sm" fw={500}>
            {order.retailer_id.brand_name}
          </Text>
        </Group>
      </Table.Td>

      <Table.Td>
        <Badge
          color={statusColors[order.status_id.description.toLowerCase()]}
          variant="light"
        >
          {order.status_id.description}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Text size="sm" c="dimmed">
          {order.total_price} Kč
        </Text>
      </Table.Td>
      <Table.Td>
        <Text size="sm" c="dimmed">
          {formatDate(order.issue_date)}
        </Text>
      </Table.Td>
      <Table.Td>
        <Group gap={4} justify="right">
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
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea>
      <Table miw={800} verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Číslo objednávky</Table.Th>
            <Table.Th>Eshop</Table.Th>
            <Table.Th>Stav</Table.Th>
            <Table.Th>Celková cena</Table.Th>
            <Table.Th>Datum objednání</Table.Th>
            <Table.Th> </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
