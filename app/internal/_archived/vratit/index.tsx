import { Avatar, Group, SelectItemProps, Text } from "@mantine/core";
import { forwardRef } from "react";
import LandingPageWrapper from "../../../../components/Layouts/LandingPage/layout";

export default function ReturnPackagePage() {
  // const router = useRouter();
  // function FirstStep() {
  //   const idForm = useForm({
  //     initialValues: {
  //       packaging_id: "",
  //     },

  //     validate: {
  //       packaging_id: isNotEmpty("Chybný email"),
  //     },

  //     transformValues: (values) => ({
  //       packaging_id: values.packaging_id.toUpperCase(),
  //     }),
  //   });
  //   const handlePinChange = (value: string) => {
  //     idForm.setValues({ packaging_id: value.toUpperCase() });
  //   };

  //   return (
  //     <form
  //       onSubmit={idForm.onSubmit((values) => {
  //         router.push(`/vratit?packaging_id=${values.packaging_id}`);
  //       })}
  //     >
  //       <Stack spacing="md" maw={500} m="sm" mx="auto">
  //         <Text>
  //           Pokud preferujete vyplacení záloh digitálně místo hotovosti na
  //           místě, tak vyplň prosím tento krátký formulář.
  //         </Text>
  //         <Text>Zadejte 8-ciferný kód, který naleznete na ReKrabici:</Text>
  //         <PinInput
  //           length={8}
  //           spacing="xs"
  //           autoFocus
  //           required
  //           {...idForm.getInputProps("packaging_id")}
  //           onChange={(event) => handlePinChange(event)}
  //         />
  //         <Button type="submit" fullWidth>
  //           Načíst ReKrabici
  //         </Button>
  //       </Stack>
  //     </form>
  //   );
  // }

  return (
    <LandingPageWrapper
      title="Vrátit ReKrabici"
      titleRemoveName
      description="Spáruj svou ReKrabici se svým bankovním účtem."
    >
      {/* <Paper m="auto" p="sm" maw={600} withBorder mt="xl">
        {!packaging_id && <FirstStep />}
        {packaging_id && !submitted && <SecondStep />}
        {packaging_id && submitted && <ThirdStep />} */}
      {/* </Paper> */}
    </LandingPageWrapper>
  );
}

interface ItemProps extends SelectItemProps {
  code: string;
  bank: string;
  img?: string;
}

const AutoCompleteItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ bank, value, img, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        {/* <Image src={img} width={48} height={48} alt="Bank logo" /> */}
        {/* TODO: make this nextjs image */}
        <Avatar size="sm" src={img} />

        <div>
          <Text>{value}</Text>
          <Text size="xs" color="dimmed">
            {bank}
          </Text>
        </div>
      </Group>
    </div>
  ),
);

AutoCompleteItem.displayName = "AutoCompleteItem";
