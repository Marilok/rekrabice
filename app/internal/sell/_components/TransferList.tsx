import {
  ActionIcon,
  Checkbox,
  Combobox,
  Group,
  Stack,
  Text,
  TextInput,
  useCombobox,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";
import classes from "./TransferList.module.css";

interface RenderListProps {
  options: Pallete[];
  // eslint-disable-next-line no-unused-vars
  onTransfer(options: string[]): void;
  type: "forward" | "backward";
}

function RenderList({ options, onTransfer, type }: RenderListProps) {
  const combobox = useCombobox();
  const [value, setValue] = useState<Pallete["palleteId"][]>([]);
  const [search, setSearch] = useState("");

  const handleValueSelect = (val: string) => {
    setValue((current) =>
      current.includes(val)
        ? current.filter((v) => v !== val)
        : [...current, val],
    );
  };

  const items = options
    .filter(
      (item) =>
        item.palleteId
          .toString()
          .toLowerCase()
          .includes(search.toLowerCase().trim()) ||
        item.color
          .toString()
          .toLowerCase()
          .includes(search.toLowerCase().trim()) ||
        item.dimensions
          .toString()
          .toLowerCase()
          .includes(search.toLowerCase().trim()),
    )
    .map((item) => (
      <Combobox.Option
        value={item.palleteId}
        key={item.palleteId}
        active={value.includes(item.palleteId)}
        onMouseOver={() => combobox.resetSelectedOption()}
      >
        <Group gap="sm">
          <Checkbox
            checked={value.includes(item.palleteId)}
            onChange={() => {}}
            aria-hidden
            tabIndex={-1}
            style={{ pointerEvents: "none" }}
          />
          <Stack gap={0}>
            <Text size="sm" fw={500}>
              Paleta {item.palleteId}
            </Text>
            <Text size="xs" c="dimmed" fw={400}>
              Počet krabic: {item.count}
            </Text>
            <Text size="xs" c="dimmed" fw={400}>
              Rozměr: {item.dimensions}
            </Text>
            <Text size="xs" c="dimmed" fw={400}>
              Barva: {item.color}
            </Text>
            <Text size="xs" c="dimmed" fw={400}>
              Celková cena: {item.totalPrice} Kč
            </Text>
          </Stack>
        </Group>
      </Combobox.Option>
    ));

  return (
    <div className={classes.renderList} data-type={type}>
      <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
        <Combobox.EventsTarget>
          <Group wrap="nowrap" gap={0} className={classes.controls}>
            <TextInput
              placeholder="Hledat rozměr, barvu..."
              classNames={{ input: classes.input }}
              value={search}
              onChange={(event) => {
                setSearch(event.currentTarget.value);
                combobox.updateSelectedOptionIndex();
              }}
            />
            <ActionIcon
              radius={0}
              variant="default"
              size={36}
              className={classes.control}
              onClick={() => {
                onTransfer(value);
                setValue([]);
              }}
            >
              <IconChevronRight className={classes.icon} />
            </ActionIcon>
          </Group>
        </Combobox.EventsTarget>

        <div className={classes.list}>
          <Combobox.Options>
            {items.length > 0 ? (
              items
            ) : (
              <Combobox.Empty>Nic nenalezeno....</Combobox.Empty>
            )}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  );
}

interface Pallete {
  palleteId: string;
  dimensions: string;
  count: number;
  price: number;
  totalPrice: number;
  color: string;
}

export default function TransferList({
  palletes,
  form,
}: {
  palletes: any[];
  form: any;
}) {
  const [data, setData] = useState<[Pallete[], Pallete[]]>([[], palletes]);

  const handleTransfer = (transferFrom: number, options: string[]) =>
    setData((current) => {
      const transferTo = transferFrom === 0 ? 1 : 0;
      const transferFromData = current[transferFrom].filter(
        (item) => !options.includes(item.palleteId),
      );

      const onlyTransferedData = current[transferFrom].filter((item) =>
        options.includes(item.palleteId),
      );

      const transferToData = [...current[transferTo], ...onlyTransferedData];

      const result = [];
      result[transferFrom] = transferFromData;
      result[transferTo] = transferToData;

      form.setFieldValue("transferListData", result as [Pallete[], Pallete[]]);

      return result as [Pallete[], Pallete[]];
    });

  return (
    <div className={classes.root}>
      <RenderList
        type="forward"
        options={data[0]}
        onTransfer={(options) => handleTransfer(0, options)}
      />
      <RenderList
        type="backward"
        options={data[1]}
        onTransfer={(options) => handleTransfer(1, options)}
      />
    </div>
  );
}
