/* eslint-disable camelcase */

"use client";

import { Avatar, Button, Flex, Group, Select, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { forwardRef } from "react";
import sellPallete from "./_functions/actions";

export default function Page() {
  const form = useForm({
    initialValues: {
      palletesIds: [],
      retailer_id: "",
    },
  });

  //   async function loadPalletes() {
  //     const supabase = createClientComponentClient();
  //     const { data, error } = await supabase
  //       .from("palletes")
  //       .select("pallete_id, count, boxes")
  //       .eq("status", 2)
  //       .order("pallete_id", { ascending: true });
  //     if (error) {
  //       console.log("error");
  //     } else console.log(data);
  //   }

  // const [data, setData] = useState<TransferListData>([[], palletesMockdata]);
  return (
    <form
      onSubmit={form.onSubmit(() => {
        // (values)
        sellPallete(3, 1001);
      })}
    >
      <Flex gap="md" direction="column">
        {/* <TransferList
          value={data}
          onChange={setData}
          searchPlaceholder="Vyhledat paletu, rozměr..."
          nothingFound="Žádná tu není"
          titles={["Zvolené palety k prodání", "Dostupné palety na skladě"]}
          listHeight={300}
          breakpoint="sm"
          itemComponent={ItemComponent}
          //   {...form.getInputProps("palletesIds")}
          filter={(query, item) =>
            item.value.toLowerCase().includes(query.toLowerCase().trim()) ||
            item.count.toString().includes(query.toLowerCase().trim()) ||
            item.dimensions.includes(query.toLowerCase().trim()) ||
            item.color.toLowerCase().includes(query.toLowerCase().trim())
          }
        /> */}
        <Select
          label="Zvol komu se paleta odešle"
          placeholder="Pick one"
          itemComponent={SelectItem}
          data={retailersData}
          searchable
          {...form.getInputProps("retailerId")}
          maxDropdownHeight={400}
          nothingFound="Žádná taková firmu neznáme"
          filter={(value, item) =>
            item.label!.toLowerCase().includes(value.toLowerCase().trim())
          }
          required
        />
        <Button type="submit">Prodat palety</Button>
      </Flex>
    </form>
  );
}

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  logo_url: string;
  brand_name: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ logo_url, brand_name, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others} key={brand_name}>
      <Group noWrap>
        <Avatar src={logo_url} />
        <Text size="sm">{brand_name}</Text>
      </Group>
    </div>
  ),
);

const retailersData = [
  {
    value: "Decathlon",
    label: "Decathlon",
    logo_url:
      "https://vlzmneddlwojekmklqnf.supabase.co/storage/v1/object/public/retailers_favicons/decathlon.svg",
    brand_name: "Decathlon",
  },
  {
    value: "T-Mobile",
    label: "T-Mobile",
    logo_url:
      "https://vlzmneddlwojekmklqnf.supabase.co/storage/v1/object/public/retailers_favicons/tmobile.svg",
    brand_name: "T-Mobile",
  },
];
// const palletesMockdata = [
//   {
//     value: "1002",
//     label: "1002",
//     count: 1000,
//     dimensions: "1200 x 800 x 150",
//     color: "SKYDIVE BLUE",
//   },
//   {
//     value: "1001",
//     label: "1001",
//     count: 1200,
//     dimensions: "1300 x 800 x 150",
//     color: "green",
//   },
// ];

// function ItemComponent({ data, selected }: TransferListItemComponentProps) {
//   return (
//     <Group noWrap key={data.value}>
//       <div style={{ flex: 1 }}>
//         <Text size="sm" weight={500}>
//           Paleta {data.value}
//         </Text>
//         <Text size="xs" color="dimmed" weight={400}>
//           Počet: {data.count}
//         </Text>
//         <Text size="xs" color="dimmed" weight={400}>
//           Rozměr: {data.dimensions}
//         </Text>
//         <Text size="xs" color="dimmed" weight={400}>
//           Barva: {data.color}
//         </Text>
//       </div>
//       <Checkbox
//         checked={selected}
//         onChange={() => {}}
//         tabIndex={-1}
//         sx={{ pointerEvents: "none" }}
//       />
//     </Group>
//   );
// }
