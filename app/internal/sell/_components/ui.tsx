/* eslint-disable camelcase */

"use client";

import { Button, Container } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { useRouter } from "next/navigation";
import CustomSelect from "./CustomSelect";
import TransferList from "./TransferList";

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
        console.log(values.retailerId);
        // console.log(values.transferListData[0]);

        // sellPalletes(
        //   parseInt(values.retailerId, 10),
        //   values.palletesIds,
        //   values.products,
        // );
        form.reset();
        router.refresh(); // TODO: doesnt refresh the data in the transfer list
        // notifications.show({
        //   title: "Palety byly prodány",
        //   message: "Faktura byla poslána do mailu.",
        //   color: "green",
        //   autoClose: 8000,
        // });
      })}
    >
      <Container className="flex flex-col gap-md">
        <TransferList />
        {/* <TransferList palletes={allPalletes} form={form} /> */}
        <CustomSelect retailers={retailers} form={form} />
        <Button type="submit">Prodat palety</Button>
      </Container>
    </form>
  );
}

// function ItemComponent({ data, selected }: TransferListItemComponentProps) {
//   return (
//     <Group wrap="nowrap" key={data.value}>
//       <div style={{ flex: 1 }}>
//         <Text size="sm" fw={500}>
//           Paleta {data.value}
//         </Text>
//         <Text size="xs" c="dimmed" fw={400}>
//           Počet krabic: {data.count}
//         </Text>
//         <Text size="xs" c="dimmed" fw={400}>
//           Rozměr: {data.dimensions}
//         </Text>
//         <Text size="xs" c="dimmed" fw={400}>
//           Barva: {data.color}
//         </Text>
//       </div>
//       <Checkbox checked={selected} onChange={() => {}} tabIndex={-1} />
//     </Group>
//   );
// }
