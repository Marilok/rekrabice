//@ts-nocheck
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Stepper,
  Button,
  Title,
  Text,
  Portal,
  Container,
  Card,
  Center,
  Loader,
} from "@mantine/core";
import { useHotkeys, useViewportSize } from "@mantine/hooks";
import { IconArrowLeft, IconArrowRight, IconMapPin } from "@tabler/icons";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

export default function StepperComponent() {
  const [active, setActive] = useState(0);
  const { height, width } = useViewportSize();
  const [opened, setOpened] = useState(false);

  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  useHotkeys([
    ["ArrowDown", nextStep],
    ["ArrowUp", prevStep],

    ["Enter", nextStep],
    ["Shift+Enter", prevStep],

    ["space", nextStep],
    ["Shift+space", prevStep],
  ]);

  const router = useRouter();
  const { query } = router;
  // {
  //   referer: string | undefined;
  //   name: string | undefined;
  // }
  // ?referrer=aktin.cz&name=Aktin

  const Map = dynamic(() => import("./Map/CustomMap"), {
    loading: () => (
      <Center className="h-full relative">
        <Loader size="xl" />
        <Text ml="md">Načítání mapy</Text>
      </Center>
    ),
    ssr: false, // This line is important. It's what prevents server-side render
  });

  const Confetti = dynamic(() => import("react-confetti"), {
    loading: () => <></>,
    ssr: false, // This line is important. It's what prevents server-side render
  });

  return (
    <>
      <Portal>
        <Confetti
          width={width}
          height={height}
          recycle={false}
          run={active === 3}
          numberOfPieces={777}
          onConfettiComplete={(confetti) => {
            confetti?.reset();
          }}
        />
      </Portal>
      <Container>
        <div className="flex flex-col h-full">
          <Stepper
            active={active}
            onStepClick={setActive}
            // breakpoint="md"
            color="green"
            mt="xl"
          >
            <Stepper.Step label="Zvol ReKrabici">
              <Title order={2} mt="xl">
                Nech si nákup zabalit do ReKrabice.
              </Title>
              <Text mt="sm">
                Tato možnost stojí 50 Kč, ale nenech se odradit, je to totiž
                vratná záloha. 😉
              </Text>
              <div className="m-auto flex justify-center mt-5">
                <Image
                  src="/otoc_button.png"
                  height={300}
                  width={540}
                  alt="Vybrat balení do vratné krabice z eshopu"
                  className="m-auto rounded shadow"
                />
              </div>
            </Stepper.Step>

            <Stepper.Step label="Rozbal balíček">
              <Title order={2} mt="xl">
                Rozbal svůj balíček a raduj se ze svého nákupu.
              </Title>
              <Text mt="sm">
                Při tomto kroku ti jen popřejeme, aby jsi byl spokojen se svým
                nákupem. 😅
              </Text>
              <div className="m-auto flex justify-center mt-5">
                <Image
                  src="/gifs/open.gif"
                  height={300}
                  width={525}
                  alt="Box opening gif"
                  className="m-auto rounded shadow"
                />
              </div>
            </Stepper.Step>
            <Stepper.Step label="Přines krabici">
              <Title order={2} mt="xl">
                Přines krabici do vratného místa
              </Title>
              <Text mt="sm">
                Prázdnou krabici přines do jednoho z 23 vratných míst. Vratnou
                zálohu ti automaticky připíšeme na účet.
              </Text>
              <Card
                radius="sm"
                className="w-[525px] h-[300px] mx-auto"
                shadow="sm"
                p={0}
              >
                <Map />
              </Card>
              {/* <Button
                size="md"
                mt="md"
                onClick={() => {
                  setOpened(true);
                }}
                variant="light"
                color="green"
                component={Link}
                href="/mapa"
                leftIcon={<IconMapPin size={14} />}
              >
                Podrobná mapa vratných míst
              </Button> */}
            </Stepper.Step>
            <Stepper.Completed>
              <Title order={2} mt="xl">
                Wohoooo! 🥳
              </Title>
              <Text mt="sm">
                Právě jsi otočil krabici a zachránil 1/156 stromu jen díky tomu,
                že si využil ReKrabici. 🌳
              </Text>
              <div className="m-auto flex justify-center mt-5">
                <Image
                  src="/images/tree.jpg"
                  height={300}
                  width={525}
                  alt="A tree in misty cloud"
                  className="m-auto rounded shadow"
                />
              </div>
            </Stepper.Completed>
          </Stepper>
          <Button.Group mt="md" className="mx-auto">
            {active !== 0 && (
              <Button
                size="xl"
                onClick={prevStep}
                variant="outline"
                className="w-60"
                color="green"
                leftIcon={<IconArrowLeft size={14} />}
              >
                Předchozí krok
              </Button>
            )}
            {active !== 3 && (
              <Button
                size="xl"
                color="green"
                onClick={nextStep}
                className={`w-60 ${active == 0 ? "w-96 !rounded" : ""}`}
                rightIcon={<IconArrowRight size={14} />}
              >
                Další krok
              </Button>
            )}
          </Button.Group>

          {/* <Group position="center" mt="xl">
            <Button.Group orientation="vertical">
              {active !== 0 && (
                <Button
                  size="xl"
                  onClick={prevStep}
                  variant="outline"
                  color="green"
                  leftIcon={<IconArrowUp size={14} />}
                >
                  Předchozí krok
                </Button>
              )}
              {active !== 3 && (
                <Button
                  size="xl"
                  color="green"
                  onClick={nextStep}
                  style={
                    active == 0
                      ? {
                          height: "120px",
                          borderRadius: "4px",
                        }
                      : {}
                  }
                  leftIcon={<IconArrowDown size={14} />}
                >
                  Další krok
                </Button>
              )}
            </Button.Group>
          </Group> */}
        </div>
      </Container>
    </>
  );
}
