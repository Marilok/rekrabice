import {
  Avatar,
  Combobox,
  Group,
  InputBase,
  Text,
  useCombobox,
} from "@mantine/core";
import { useState } from "react";

export default function CustomSelect({
  retailers,
  form,
}: {
  retailers: any[];
  form: any;
}) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const shouldFilterOptions = retailers.every((item) => item.label !== search);

  // TODO: implement limit
  // TODO: implement logo display of selected retailer
  // TODO: implement form validation

  const filteredOptions = shouldFilterOptions
    ? retailers.filter((item) =>
        item.brandName.toLowerCase().includes(search.toLowerCase().trim()),
      )
    : retailers;

  const getRetailerId = (label: string) => {
    const retailer = retailers.find((item) => item.label === label);
    return retailer?.retailerId;
  };

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item.brandName} key={item.retailerId}>
      <Group wrap="nowrap">
        <Avatar src={item.favicon} radius="sm" />
        <Text size="sm">{item.brandName}</Text>
      </Group>
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        setValue(val);
        setSearch(val);
        form.setFieldValue("retailerId", getRetailerId(val));
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          rightSection={<Combobox.Chevron />}
          value={search}
          onChange={(event) => {
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
            setSearch(event.currentTarget.value);
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            setSearch(value || "");
          }}
          placeholder="Eshop"
          rightSectionPointerEvents="none"
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length > 0 ? (
            options
          ) : (
            <Combobox.Empty>Žádný takový eshop neznáme</Combobox.Empty>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
