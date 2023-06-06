import {
  Anchor,
  Autocomplete,
  Avatar,
  Button,
  Checkbox,
  Flex,
  Group,
  MediaQuery,
  NumberInput,
  Paper,
  PinInput,
  SelectItemProps,
  Stack,
  Text,
} from "@mantine/core";
import { isEmail, isNotEmpty, matches, useForm } from "@mantine/form";
import Link from "next/link";
import { useRouter } from "next/router";
import { forwardRef } from "react";
import LandingPageWrapper from "../../components/Layouts/LandingPage/layout";
import { EmailButtons } from "../../components/SocialButtons/EmailButtons";
import BANK_CODES from "../../data/bankCodes";
import EMAIL_PROVIDERS from "../../data/emailProviders";

export default function ReturnPackagePage() {
  const router = useRouter(),
    { packaging_id, submitted } = router.query,
    FirstStep = () => {
      const idForm = useForm({
          initialValues: {
            packaging_id: "",
          },

          validate: {
            packaging_id: isNotEmpty("Chybný email"),
          },

          transformValues: (values) => ({
            packaging_id: values.packaging_id.toUpperCase(),
          }),
        }),
        handlePinChange = (value: string) => {
          idForm.setValues({ packaging_id: value.toUpperCase() });
        };

      return (
        <>
          <form
            onSubmit={idForm.onSubmit((values) => {
              router.push(`/vratit?packaging_id=${values.packaging_id}`);
            })}
          >
            <Stack spacing={"md"} maw={500} m="sm" mx="auto">
              <Text>
                Pokud preferujete vyplacení záloh digitálně místo hotovosti na
                místě, tak vyplň prosím tento krátký formulář.
              </Text>
              <Text>Zadejte 8-ciferný kód, který naleznete na ReKrabici:</Text>
              <PinInput
                length={8}
                spacing={"xs"}
                autoFocus
                required
                {...idForm.getInputProps("packaging_id")}
                onChange={(event) => handlePinChange(event)}
              />
              <Button type="submit" fullWidth>
                Načíst ReKrabici
              </Button>
            </Stack>
          </form>
        </>
      );
    },
    SecondStep = () => {
      const form = useForm({
          initialValues: {
            packaging_id,
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
              prefix: (value) => (/^\d{2,6}$|^$/.test(value) ? null : "Chybné předčíslí"),
              number: (value) => (/^\d{2,10}$/.test(value) ? null : "Chybné číslo účtu"),
              bankCode: matches(/^\d{4}$/, "Chybný kód banky"),
            },
            termsOfService: (value) => (value === false ? "Musíte souhlasit s podmínkami" : null),
          },
        }),
        email_providers =
          form.values.email.trim().length > 0 &&
          !form.values.email.includes("@")
            ? EMAIL_PROVIDERS.map((provider) => `${form.values.email}@${provider}`)
            : [];

      return (
        <>
          <form
            onSubmit={form.onSubmit((values) => {
              router.push(`/vratit?packaging_id=${values.packaging_id}&submitted=true`);
            })}
          >
            <Stack maw={500} m="sm" mx="auto">
              <Text align="center">
                Chystáš se spárovat ReKrabici s označením{" "}
                <span className="font-bold">{packaging_id}</span>.
              </Text>
              <Autocomplete
                data={email_providers}
                type="email"
                label="Email"
                autoFocus
                required
                placeholder="petr@seznam.cz"
                {...form.getInputProps("email")}
              />
              <Flex
                gap="sm"
                direction={{ base: "column", sm: "row" }}
                align={{ base: "flex-start", sm: "center" }}
              >
                <NumberInput
                  type="number"
                  label="Předčíslí"
                  hideControls
                  className="w-24"
                  {...form.getInputProps("bankAccount.prefix")}
                />
                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                  <Text className="mt-6">-</Text>
                </MediaQuery>
                <NumberInput
                  type="number"
                  label="Číslo účtu"
                  hideControls
                  required
                  className="w-40"
                  placeholder="1234567890"
                  {...form.getInputProps("bankAccount.number")}
                />
                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                  <Text className="mt-6">/</Text>
                </MediaQuery>

                <Autocomplete
                  label="Kód banky"
                  required
                  placeholder="1111"
                  {...form.getInputProps("bankAccount.bankCode")}
                  data={BANK_CODES.map((item) => ({
                    ...item,
                    value: item.code,
                  }))}
                  itemComponent={AutoCompleteItem}
                  filter={(value, item) => item.code.toLowerCase().includes(value.trim()) ||
                    item.bank.toLowerCase().includes(value.toLowerCase().trim())
                  }
                  limit={5}
                />
              </Flex>
              <Checkbox
                label="Souhlasím se zpracováním osobních údajů"
                {...form.getInputProps("termsOfService", { type: "checkbox" })}
              />
              <Button type="submit" fullWidth>
                Spárovat ReKrabici
              </Button>
            </Stack>
          </form>
        </>
      );
    },
    ThirdStep = () => (
      <EmailButtons
        title="Povedlo se!"
        subtitle={
          <>
            Do pošty jsme Vám poslali potvrzení. Teď už jen stačí kdykoliv
            ReKrabici zanést na jedno z{" "}
            <Link href="/mapa" passHref>
              <Anchor>vratných míst.</Anchor>
            </Link>
          </>
        }
      />
    );

  return (
    <LandingPageWrapper
      title="Vrátit ReKrabici"
      titleRemoveName
      description="Spáruj svou ReKrabici se svým bankovním účtem."
    >
      <Paper m="auto" p="sm" maw={600} withBorder mt={"xl"}>
        {!packaging_id && <FirstStep />}
        {packaging_id && !submitted && <SecondStep />}
        {packaging_id && submitted && <ThirdStep />}
      </Paper>
    </LandingPageWrapper>
  );
}

interface ItemProps extends SelectItemProps {
  code: string;
  bank: string;
  img?: string;
}

const AutoCompleteItem = forwardRef<HTMLDivElement, ItemProps>(({ bank, value, img, ...others }: ItemProps, ref) => (
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
));

AutoCompleteItem.displayName = "AutoCompleteItem";
