import { Button, PinInput, Stack, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import ObsluhaWrapper from "../../components/Layouts/Obsluha/ObsluhaWrapper";

export default function Obsluha() {
  const form = useForm<FormValues>({
    initialValues: { pin: "" },

    validate: {
      pin: (value: string) =>
        value.length < 8 ? "Označení má přesně 8 znaků." : null,
    },

    transformValues: (values) => ({
      pin: values.pin.toLocaleUpperCase(),
    }),
  });

  const handlePinChange = (value: string) => {
    form.setValues({ pin: value.toUpperCase() });
  };

  return (
    <ObsluhaWrapper title="Obsluha">
      <form
        onSubmit={form.onSubmit((values) => {
          console.log(values);
          form.reset();
        })}
      >
        <Stack>
          <Text>Zadejte 8-ciferný kód, který naleznete na ReKrabici:</Text>
          <PinInput
            length={8}
            autoFocus
            size="xl"
            required
            {...form.getInputProps("pin")}
            onChange={(event) => handlePinChange(event)}
          />
          <Button type="submit">Vrátit ReKrabici</Button>
        </Stack>
      </form>
    </ObsluhaWrapper>
  );
}

interface FormValues {
  pin: string;
}
