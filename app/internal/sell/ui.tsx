/* eslint-disable camelcase */

"use client";

import {
  Avatar,
  Button,
  Checkbox,
  Flex,
  Group,
  Select,
  Text,
  TransferList,
  TransferListItemComponentProps,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import React, { forwardRef } from "react";
import sellPalletes from "./_functions/actions";

export default function UI({
  allPalletes,
  retailers,
}: {
  allPalletes: any;
  retailers: any;
}) {
  const form = useForm({
    initialValues: {
      transferListData: [[], allPalletes],
      retailerId: "",
      products: [],
    },

    transformValues: (values) => ({
      ...values,
      palletesIds: values.transferListData[0].map((item: any) => item.value),
      products: values.transferListData[0].map((item: any) => ({
        price: item.price,
        count: item.count,
        width: item.width,
        depth: item.depth,
        height: item.height,
        color: item.color,
      })),
    }),

    validate: {
      transferListData: (value) =>
        value[0].length === 0 ? "Vyber alespoň 1 paletu k prodeji" : null,
      retailerId: isNotEmpty("Vyber komu se palety odešlou"),
    },
  });

  const router = useRouter();

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        console.log(values.transferListData[0]);

        sellPalletes(
          parseInt(values.retailerId, 10),
          values.palletesIds,
          values.products,
        );
        form.reset();
        router.refresh(); // TODO: doesnt refresh the data in the transfer list
        notifications.show({
          title: "Palety byly prodány",
          message: "Faktura byla poslána do mailu.",
          color: "green",
          autoClose: 8000,
        });
      })}
    >
      <Flex gap="md" direction="column">
        <TransferList
          searchPlaceholder="Vyhledat paletu, rozměr..."
          nothingFound={["Zatím žádná", "Už tu žádná nezbyla"]}
          titles={["Zvolené palety k prodání", "Dostupné palety na skladě"]}
          listHeight={300}
          breakpoint="sm"
          itemComponent={ItemComponent}
          filter={(query, item) =>
            item.value.toLowerCase().includes(query.toLowerCase().trim()) ||
            item.count.toString().includes(query.toLowerCase().trim()) ||
            item.dimensions.includes(query.toLowerCase().trim()) ||
            item.color.toLowerCase().includes(query.toLowerCase().trim())
          }
          {...form.getInputProps("transferListData")}
        />
        <Select
          label="Zvol komu se paleta odešle"
          placeholder="Pick one"
          searchable
          withAsterisk
          maxDropdownHeight={400}
          nothingFound="Žádná taková firmu neznáme"
          itemComponent={SelectItem}
          data={retailers}
          filter={(value, item) =>
            item.label!.toLowerCase().includes(value.toLowerCase().trim())
          }
          {...form.getInputProps("retailerId")}
        />
        <Button type="submit">Prodat palety</Button>
      </Flex>
    </form>
  );
}

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  favicon: string;
  label: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ favicon, label, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others} key={label}>
      <Group noWrap>
        <Avatar src={favicon} />
        <Text size="sm">{label}</Text>
      </Group>
    </div>
  ),
);

function ItemComponent({ data, selected }: TransferListItemComponentProps) {
  return (
    <Group noWrap key={data.value}>
      <div style={{ flex: 1 }}>
        <Text size="sm" weight={500}>
          Paleta {data.value}
        </Text>
        <Text size="xs" color="dimmed" weight={400}>
          Počet krabic: {data.count}
        </Text>
        <Text size="xs" color="dimmed" weight={400}>
          Rozměr: {data.dimensions}
        </Text>
        <Text size="xs" color="dimmed" weight={400}>
          Barva: {data.color}
        </Text>
      </div>
      <Checkbox
        checked={selected}
        onChange={() => {}}
        tabIndex={-1}
        sx={{ pointerEvents: "none" }}
      />
    </Group>
  );
}
