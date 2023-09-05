"use client";

import {
  Button,
  Card,
  CardSection,
  Flex,
  NumberInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
// import { useSearchParams } from "next/navigation";
import { isEmail, isInRange, isNotEmpty, useForm } from "@mantine/form";
import { IconBuildingBank } from "@tabler/icons-react";
import Image from "next/image";
import boxImgSrc from "../../../public/prototype.png";

export default function Page() {
  //   const searchParams = useSearchParams();
  //   const supabase = createServerComponentClient({ cookies });

  const trackingName = "TESTING1";

  //   const { data, error } = await supabase
  //     .rpc("get_retailer", {
  //       tracking_name: trackingName,
  //     })
  //     .single();

  //   console.log(data || error);

  const form = useForm({
    initialValues: {
      email: "",
      trackingName: "",
      bankPrefix: "",
      bankAccountNumber: "",
      bankCode: "",
    },
    validate: {
      email: isEmail("Není email"),
      trackingName: isNotEmpty("Nezvolena krabice"),
      bankCode: isInRange({ min: 0o0, max: 9999 }, "Špatný formát"),
      bankAccountNumber: isInRange(
        { min: 0, max: 9999999999 },
        "Špatný formát",
      ),
    },
  });

  return (
    <>
      <Card
        withBorder
        p="lg"
        w="full"
        mx="auto"
        maw="800"
        radius="md"
        className="flex flex-row gap-12"
      >
        <CardSection>
          <Text maw={400}>
            Ahoj! Jmenuji se{" "}
            <Text component="span" fw="bold">
              {trackingName}
            </Text>{" "}
            a nepatřím do koše. Jsem totiž znovupoužitelná krabice.
          </Text>
          {/* <p>{data.brand}</p>
          <Image
            src={data.favicon}
            width={200}
            height={200}
            alt="retailer logo"
        /> */}
        </CardSection>
        <CardSection>
          <Image src={boxImgSrc} width={200} height={200} alt="ReKrabice" />
        </CardSection>
      </Card>
      <form
        onSubmit={form.onSubmit(async (values: any) => {
          window.alert(values);
        })}
      >
        <Stack gap="sm" w={{ base: "full", md: "600" }}>
          <TextInput
            label="Email"
            placeholder="tatka.smoula@seznam.cz"
            required
            {...form.getInputProps("email")}
            type="email"
          />
          <Flex justify="center" gap="md">
            <NumberInput
              className="flex-1"
              label="Předčíslí"
              placeholder=""
              hideControls
              maxLength={6}
              {...form.getInputProps("bankPrefix")}
            />
            <NumberInput
              className="flex-auto"
              label="Číslo účtu"
              placeholder="1234567890"
              minLength={2}
              maxLength={10}
              required
              w="250"
              hideControls
              {...form.getInputProps("bankAccountNumber")}
            />
            <TextInput
              className="flex-1"
              label="Kód banky"
              placeholder="0000"
              minLength={4}
              maxLength={4}
              required
              type="number"
              {...form.getInputProps("bankCode")}
            />{" "}
          </Flex>
          <Button type="submit" fullWidth rightSection={<IconBuildingBank />}>
            Chci vyplatit zálohu na účet
          </Button>
        </Stack>
      </form>
    </>
  );
}
