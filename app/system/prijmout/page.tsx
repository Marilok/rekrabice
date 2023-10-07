"use client";

import {
  AspectRatio,
  Button,
  Modal,
  PinInput,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import Image from "next/image";
import translations from "translations/translations";
import createLoopUpdate from "utils/supabase_helpers/createLoopUpdate";
import getBoxFromTrackingName from "utils/supabase_helpers/getBoxFromTrackingName";
import createPorReturn from "./_functions/createPorReturn";
import getLocationId from "./_functions/getLocationId";
import getPairing from "./_functions/getPairing";
import isReturned from "./_functions/isReturned";
import updatePorId from "./_functions/updatePorId";
import coin from "./_images/50czk.jpg";
import check from "./_images/check.png";

export default function Page() {
  const [openedCash, handlersCash] = useDisclosure(false);
  const [openedBank, handlersBank] = useDisclosure(false);

  const form = useForm<FormValues>({
    initialValues: { packaging_id: "" },

    validate: {
      packaging_id: (value: string) =>
        value.length < 8 ? "Označení má přesně 8 znaků." : null,
    },

    transformValues: (values) => ({
      packaging_id: values.packaging_id.toLocaleUpperCase(),
    }),
  });

  const handlePinChange = (value: string) => {
    form.setValues({ packaging_id: value.toUpperCase() });
  };

  const handleCloseCash = () => {
    handlersCash.close();
  };

  const handleCloseBank = () => {
    handlersBank.close();
  };

  return (
    <form
      onSubmit={form.onSubmit(async (values: any) => {
        const { active_loop_id: activeLoopId } = await getBoxFromTrackingName(
          values.packaging_id,
        );

        if (!activeLoopId) {
          notifications.show({
            title: "Krabice neexistuje",
            message:
              "Tato krabice neexistuje. Pokud to nesedí, prosím kontaktujte nás.",
            color: "red",
          });
          return;
        }

        if (await isReturned(activeLoopId)) {
          notifications.show({
            title: "Krabice už byla vrácena",
            message:
              "Tato krabice už byla vrácena. Pokud to nesedí, prosím kontaktujte nás.",
            color: "red",
          });
        } else {
          const locationId = await getLocationId();
          await createLoopUpdate(activeLoopId, 301);
          await updatePorId(activeLoopId, locationId!);

          const pairing = await getPairing(activeLoopId);

          if (pairing) {
            handlersBank.open();
            await createPorReturn(locationId!, activeLoopId, null);
            await createLoopUpdate(activeLoopId, 402);
            const paymentResult = await fetch(
              `${process.env.NEXT_PUBLIC_URL}/api/create-payment`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  bankAccount: pairing.bank_account_number,
                  bankPrefix: pairing.bank_account_prefix,
                  bankCode: pairing.bank_code,
                  pairingId: pairing.pairing_id,
                  loopId: pairing.loop_id,
                  email: pairing.email,
                }),
              },
            );
            // console.log(paymentResult);
          } else {
            handlersCash.open();
            createPorReturn(locationId!, activeLoopId, 50);
            await createLoopUpdate(activeLoopId, 401);
          }
        }
        form.reset();
      })}
    >
      <Stack>
        <Text>{translations.systemReceive.code}</Text>
        <PinInput
          length={8}
          autoFocus
          size="xl"
          {...form.getInputProps("packaging_id")}
          onChange={(event) => handlePinChange(event)}
        />
        <Button type="submit">{translations.systemReceive.button}</Button>
        <Modal
          opened={openedCash}
          onClose={handlersCash.close}
          closeOnClickOutside={false}
          closeOnEscape={false}
          withCloseButton={false}
          centered
        >
          <Stack gap="md">
            <Title order={2}>Vyplaťte prosím 50 Kč</Title>
            <AspectRatio ratio={16 / 9}>
              <Image
                src={coin}
                layout="fill"
                objectFit="cover"
                alt="Mince 50 Kč"
              />
            </AspectRatio>
            <Text ta="justify">
              Vraťte prosím zákazníkovi jeho vratnou vratnou zálohu, která činí
              50 korun. Tento výdej hotovosti Vám samozřejmě proplatíme. Poté
              uskladněte prosím krabici do velké přepravky.
            </Text>
            <Button onClick={handleCloseCash} fullWidth size="md">
              Potvrzuji převzetí krabice a vyplacení 50 Kč
            </Button>
          </Stack>
        </Modal>
        <Modal
          opened={openedBank}
          onClose={handlersBank.close}
          closeOnClickOutside={false}
          closeOnEscape={false}
          withCloseButton={false}
          centered
        >
          <Stack gap="md">
            <Title order={2}>Nic nevyplácejte</Title>
            <AspectRatio ratio={16 / 9}>
              <Image
                src={check}
                layout="fill"
                objectFit="contain"
                className="bg-slate-200"
                alt="Fajfka"
              />
            </AspectRatio>
            <Text>
              Zákazník už dopředu vyplnil své bankovní číslo účtu. Na ten mu
              pošleme jeho zálohu. V téhle chvíli je vše hotovo a můžete krabici
              vložit do přepravky.
            </Text>
            <div>
              <Title order={3}>Nastal problém?</Title>
              <Text ta="justify">
                V případě jakéhokoliv problému sdělte zákazníkovi, ať si opíše
                jméno krabice a ozve se nám na podporu. My s ním daný problém
                vyřešíme.
              </Text>
            </div>
            <Button onClick={handleCloseBank} fullWidth size="md">
              Potvrzuji převzetí krabice
            </Button>
          </Stack>
        </Modal>
      </Stack>
    </form>
  );
}

interface FormValues {
  packaging_id: string;
}
