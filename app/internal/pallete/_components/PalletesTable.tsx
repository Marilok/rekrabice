"use client";

import {
  ActionIcon,
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
import { IconCheck } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import updatePalleteStatus from "../_functions/updatePalleteStatus";

interface PalleteTableProps {
  palletes: {
    pallete_id: number;
    status: { status_id: number; description: string };
    count: number;
  }[];
}

const statusColors: Record<string, string> = {
  0: "blue",
  1: "grape",
  2: "green",
  3: "red",
};

export default function PalletesTable({ palletes }: PalleteTableProps) {
  const router = useRouter();

  const markPalleteAsFull = async (palleteId: number) => {
    await updatePalleteStatus(palleteId, 2);
    router.refresh();
  };

  const rows = palletes.map((pallete) => (
    <TableTr key={pallete.pallete_id}>
      <TableTd>
        <Text size="sm">{pallete.pallete_id}</Text>
      </TableTd>

      <TableTd>
        <Text size="sm">{pallete.count}</Text>
      </TableTd>

      <TableTd>
        <Badge color={statusColors[pallete.status.status_id]} variant="light">
          {pallete.status.description}
        </Badge>
      </TableTd>

      <TableTd>
        <Group gap={4} justify="right">
          <Tooltip label="Označit, že je paleta plná a připravena k prodeji">
            <ActionIcon
              onClick={() => markPalleteAsFull(pallete.pallete_id)}
              variant="subtle"
            >
              <IconCheck size="1rem" stroke={1.5} color="green" />
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
            <TableTh>Číslo palety</TableTh>
            <TableTh>Počet krabic</TableTh>
            <TableTh>Stav</TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>{rows}</TableTbody>
      </Table>
    </ScrollArea>
  );
}
