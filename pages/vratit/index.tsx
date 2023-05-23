import {
  Autocomplete,
  Avatar,
  Button,
  Checkbox,
  Flex,
  Group,
  NumberInput,
  SelectItemProps,
  Text,
} from "@mantine/core";
import { isEmail, useForm } from "@mantine/form";
import { useRouter } from "next/router";
import { forwardRef } from "react";
import LandingPageWrapper from "../../components/Layouts/LandingPage/LandingPageWrapper";

export default function ReturnPackagePage() {
  const router = useRouter();
  const { packaging_id } = router.query;

  const form = useForm({
    initialValues: {
      email: "",
      bankAccount: {
        prefix: "",
        number: "",
        bankCode: "",
      },
      termsOfService: false,
    },

    validate: {
      email: isEmail("Chybný email"),
      bankAccount: {
        // prefix: matches(/^\d{0,6}$|^$/, "Chybné předčíslí"),
        // number: isNotEmpty("Chybí bankovní číslo účtu"),
        // bankCode: matches(/^\d{4}$/, "Chybný kód banky"),
      },
    },
  });

  return (
    <LandingPageWrapper
      title="Vrátit ReKrabici"
      titleRemoveName={true}
      description="Spáruj svou ReKrabici se svým bankovním účtem."
    >
      <Text>
        Chystáš se vrátit ReKrabici s označením{" "}
        <span className="font-bold">{packaging_id}</span>.
      </Text>
      <form onSubmit={form.onSubmit(console.log)}>
        {/* <EmailInput id="email"></EmailInput> */}
        <Flex direction={"row"} gap="sm" align={"center"}>
          <NumberInput
            type="number"
            label="Předčíslí"
            mt="sm"
            hideControls
            className="w-24"
            {...form.getInputProps("bankAccount.prefix")}
          />

          <Text className="mt-8">-</Text>
          <NumberInput
            type="number"
            label="Číslo účtu"
            withAsterisk
            hideControls
            required
            className="w-40"
            {...form.getInputProps("bankAccount.number")}
            mt="sm"
          />
          <Text className="mt-8">/</Text>

          <Autocomplete
            label="Kód banky"
            required
            withAsterisk
            {...form.getInputProps("bankAccount.bankCode")}
            mt="sm"
            data={BANK_CODES.map((item) => ({ ...item, value: item.code }))}
            itemComponent={AutoCompleteItem}
            filter={(value, item) =>
              item.code.toLowerCase().includes(value.trim()) ||
              item.bank.toLowerCase().includes(value.toLowerCase().trim())
            }
            limit={5}
          />
        </Flex>
        <Checkbox
          mt="md"
          label="Souhlasím se zpracováním osobních údajů"
          {...form.getInputProps("termsOfService", { type: "checkbox" })}
        />
        <Button type="submit" fullWidth mt="sm">
          Spárovat ReKrabici
        </Button>
      </form>
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
        <Avatar size={"sm"} src={img} />

        <div>
          <Text>{value}</Text>
          <Text size="xs" color="dimmed">
            {bank}
          </Text>
        </div>
      </Group>
    </div>
  )
);

const BANK_CODES = [
  {
    bank: "Komerční banka",
    code: "0100",
    img: "https://vlzmneddlwojekmklqnf.supabase.co/storage/v1/object/public/bank_icons/komercni_banka?t=2023-05-22T09%3A34%3A30.764Z",
  },
  {
    bank: "ČSOB",
    code: "0300",
    img: "https://vlzmneddlwojekmklqnf.supabase.co/storage/v1/object/public/bank_icons/csob",
  },
  {
    bank: "MONETA",
    code: "0600",
    img: "https://vlzmneddlwojekmklqnf.supabase.co/storage/v1/object/public/bank_icons/moneta?t=2023-05-22T09%3A34%3A13.877Z",
  },
  {
    bank: "Česká spořitelna",
    code: "0800",
    img: "https://vlzmneddlwojekmklqnf.supabase.co/storage/v1/object/public/bank_icons/ceska_sporitelna",
  },
  {
    bank: "Fio banka",
    code: "2010",
    img: "https://vlzmneddlwojekmklqnf.supabase.co/storage/v1/object/public/bank_icons/fio",
  },
  {
    bank: "Trinity Bank",
    code: "2070",
    img: "https://vlzmneddlwojekmklqnf.supabase.co/storage/v1/object/public/bank_icons/trinity",
  },
  {
    bank: "Banka CREDITAS",
    code: "2250",
    img: "https://vlzmneddlwojekmklqnf.supabase.co/storage/v1/object/public/bank_icons/creditas",
  },
  {
    bank: "UniCredit Bank",
    code: "2700",
    img: "https://vlzmneddlwojekmklqnf.supabase.co/storage/v1/object/public/bank_icons/unicredit",
  },
  {
    bank: "Air Bank",
    code: "3030",
    img: "https://vlzmneddlwojekmklqnf.supabase.co/storage/v1/object/public/bank_icons/air_bank",
  },
  {
    bank: "Max banka",
    code: "4000",
    img: "https://vlzmneddlwojekmklqnf.supabase.co/storage/v1/object/public/bank_icons/max_banka?t=2023-05-22T09%3A33%3A27.549Z",
  },
  {
    bank: "Raiffeisenbank",
    code: "5500",
    img: "https://vlzmneddlwojekmklqnf.supabase.co/storage/v1/object/public/bank_icons/raiffeisenbank?t=2023-05-22T09%3A38%3A22.551Z",
  },
  {
    bank: "J&T Banka",
    code: "5800",
    img: "https://vlzmneddlwojekmklqnf.supabase.co/storage/v1/object/public/bank_icons/j_and_t",
  },
  {
    bank: "PPF banka",
    code: "6000",
    img: "https://vlzmneddlwojekmklqnf.supabase.co/storage/v1/object/public/bank_icons/ppf?t=2023-05-22T09%3A32%3A13.852Z",
  },
  {
    bank: "Equa Banka",
    code: "6100",
    img: "https://vlzmneddlwojekmklqnf.supabase.co/storage/v1/object/public/bank_icons/equa_bank",
  },
  {
    bank: "mBank",
    code: "6210",
    img: "https://vlzmneddlwojekmklqnf.supabase.co/storage/v1/object/public/bank_icons/mbank?t=2023-05-22T09%3A37%3A40.593Z",
  },
];
