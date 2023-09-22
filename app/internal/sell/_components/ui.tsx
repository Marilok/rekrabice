"use client";

import { Button, Container } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import sellPalletes from "../_functions/actions";
import CustomSelect from "./CustomSelect";
import TransferList from "./TransferList";

export default function UI({
  avaiablePalletes,
  retailers,
}: {
  avaiablePalletes: any;
  retailers: any;
}) {
  const form = useForm({
    initialValues: {
      transferListData: [[], avaiablePalletes],
      retailerId: "",
      products: [],
    },

    transformValues: (values) => ({
      ...values,
      palletesIds: values.transferListData[0].map(
        (item: any) => item.palleteId,
      ),
      products: values.transferListData[0].map((item: any) => ({
        price: item.price,
        count: item.count,
        dimensions: item.dimensions,
        color: item.color,
      })),
    }),

    validate: {
      retailerId: isNotEmpty("Vyber komu se palety odešlou"),
    },
  });

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        sellPalletes(
          parseInt(values.retailerId, 10),
          values.palletesIds,
          values.products,
        );
        form.reset();
        notifications.show({
          title: "Palety byly prodány",
          message: "Teď je potřeba odeslat fakturu, zaplatit a odeslat palety.",
          color: "green",
          autoClose: 10000,
        });
      })}
    >
      <Container className="flex flex-col gap-md">
        <TransferList palletes={avaiablePalletes} form={form} />
        <CustomSelect retailers={retailers} form={form} />
        <Button type="submit">Prodat palety</Button>
      </Container>
    </form>
  );
}
