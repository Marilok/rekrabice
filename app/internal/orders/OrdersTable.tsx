"use client";

import {
  ActionIcon,
  Avatar,
  Badge,
  Group,
  ScrollArea,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Text,
  Tooltip,
} from "@mantine/core";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { IconMoneybag, IconTruckDelivery } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import formatDate from "../../../utils/formatDate";
import formatInvoiceNumber from "../../../utils/formatInvoiceNumber";
import markOrder from "./markOrder";

interface OrdersTableProps {
  orders: {
    order_id: number;
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
  const supabase = createClientComponentClient();

  const router = useRouter();

  const markOrderAsPaid = async (orderId: number) => {
    await markOrder(orderId, 2, supabase);
    router.refresh();
  };

  const markOrderAsSent = async (orderId: number) => {
    await markOrder(orderId, 3, supabase);
    router.refresh();
  };

  const rows = orders.map((order) => (
    <TableTr key={order.invoice_number}>
      <TableTd>
        <Text size="sm">{formatInvoiceNumber(order.invoice_number)}</Text>
      </TableTd>
      <TableTd>
        <Group gap="sm">
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
      </TableTd>

      <TableTd>
        <Badge
          color={statusColors[order.status_id.description.toLowerCase()]}
          variant="light"
        >
          {order.status_id.description}
        </Badge>
      </TableTd>
      <TableTd>
        <Text size="sm" c="dimmed">
          {order.total_price} Kč
        </Text>
      </TableTd>
      <TableTd>
        <Text size="sm" c="dimmed">
          {formatDate(order.issue_date)}
        </Text>
      </TableTd>
      <TableTd>
        <Group gap={4} justify="right">
          <Tooltip label="Označit jako zaplaceno">
            <ActionIcon
              onClick={() => markOrderAsPaid(order.order_id)}
              variant="subtle"
            >
              <IconMoneybag size="1rem" stroke={1.5} color="pink" />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Označit jako odesláno">
            <ActionIcon
              onClick={() => markOrderAsSent(order.order_id)}
              variant="subtle"
            >
              <IconTruckDelivery size="1rem" stroke={1.5} color="green" />
            </ActionIcon>
          </Tooltip>
        </Group>
      </TableTd>
    </TableTr>
  ));

  return (
    <ScrollArea>
      <Table miw={800} verticalSpacing="sm">
        <TableThead>
          <TableTr>
            <TableTh>Číslo objednávky</TableTh>
            <TableTh>Eshop</TableTh>
            <TableTh>Stav</TableTh>
            <TableTh>Celková cena</TableTh>
            <TableTh>Datum objednání</TableTh>
            <TableTh> </TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>{rows}</TableTbody>
      </Table>
    </ScrollArea>
  );
}
