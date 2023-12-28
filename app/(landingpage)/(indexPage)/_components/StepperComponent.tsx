"use client";

import { Button, Container, Portal, Stepper, Text, Title } from "@mantine/core";
import { useHotkeys, useScrollIntoView, useViewportSize } from "@mantine/hooks";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

export default function StepperComponent() {
  const [active, setActive] = useState(0);
  const { width } = useViewportSize();
  const numberOfSteps = 4;

  const nextStep = () =>
    setActive((current) => (current < numberOfSteps ? current + 1 : current));

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

  const Confetti = dynamic(() => import("react-confetti"), {
    loading: () => null,
    // This line is important. It's what prevents server-side render
    ssr: false,
  });

  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  return (
    <>
      <Portal>
        <Confetti
          width={width - 40}
          height={1200}
          recycle={false}
          run={active === numberOfSteps}
          numberOfPieces={500}
          onConfettiComplete={(confetti) => {
            confetti?.reset();
          }}
          confettiSource={{
            x: 0,
            y: 800,
            w: width,
            // @ts-expect-error number is not assignable to type iract
            height: 100,
          }}
        />
      </Portal>
      <Container maw="900">
        <div className="flex flex-col h-full">
          <Stepper
            active={active}
            onStepClick={setActive}
            color="green"
            mt="lg"
            onClick={() => scrollIntoView({ alignment: "center" })}
            classNames={{
              stepBody: "hidden sm:block",
            }}
            ref={targetRef}
            id="top"
          >
            <Stepper.Step label="Jak to funguje?" id="stepper_0">
              <Title order={2} mt="xl">
                Jak to funguje?
              </Title>
              <Text mt="sm">
                <br />
                <br />
              </Text>
              <div className="m-auto flex justify-center mt-5 w-full h-72 relative">
                <Image
                  src="/prototype.png"
                  fill
                  alt="Jak to funguje"
                  className="m-auto rounded shadow object-contain"
                  priority
                />
              </div>
            </Stepper.Step>
            <Stepper.Step label="Zvol ReKrabici" id="stepper_1">
              <Title order={2} mt="xl">
                Vyměň karton za ReKrabici
              </Title>
              <Text mt="sm">
                Při objednávaní na svém oblíbeném e-shopu zaškrtni v košíku
                možnost zabalení do ReKrabice. K ceně objednávky ti bude
                přičteno 50 Kč – neboj, jedná se o vratnou zálohu. Jakmile nám
                ReKrabici vrátíš, pošleme ti peníze zpátky. 😉
              </Text>
              <div className="m-auto flex justify-center relative mt-5 w-full h-72">
                <Image
                  src="/otoc_button.png"
                  fill
                  alt="Vybrat balení do vratné krabice z e-shopu"
                  className="m-auto rounded shadow object-contain"
                  priority
                />
              </div>
            </Stepper.Step>

            <Stepper.Step label="Rozbal balíček" id="stepper_2">
              <Title order={2} mt="xl">
                Rozbal svůj balíček a raduj se ze svého nákupu
              </Title>
              <Text mt="sm">
                Konečně ti dorazil balíček? Rozbal ho jako normálně a užívej si
                jeho obsah. Nebo to třeba tentokrát nebyla trefa do černého, i
                to se stane. V každém případě teď už jen zbývá ReKrabici vrátit.
                Jak na to?
              </Text>
              <div className="m-auto flex justify-center relative mt-5 w-full h-72">
                <Image
                  src="/gifs/open.gif"
                  fill
                  alt="Box opening gif"
                  className="m-auto rounded shadow object-contain"
                  priority
                />
              </div>
            </Stepper.Step>
            <Stepper.Step label="Vrať nám ReKrabici" id="stepper_3">
              <Title order={2} mt="xl">
                Vrať nám ReKrabici
              </Title>
              <Text mt="sm">
                Prázdnou ReKrabici vrať buď přímo na výdejně nebo ji dones na
                jedno z našich vratných míst. Hodláš-li nějakou část objednávky
                vracet, zabal ji do ReKrabice. Až k nám doputuje zpátky, vrátíme
                ti zálohu zpátky na účet.
              </Text>
              <div className="m-auto flex justify-center relative mt-5 w-full h-72">
                <Image
                  src="/images/mapa.png"
                  fill
                  alt="Box opening gif"
                  className="m-auto rounded shadow object-contain"
                  priority
                />
              </div>
            </Stepper.Step>
            <Stepper.Completed>
              <Title order={2} mt="xl">
                Wohoooo! 🥳
              </Title>
              <Text mt="sm">
                ReKrabici vyčistíme a opět poskytneme zapojeným e-shopům. Díky
                tomu, že sis ji zvolil/a místo té kartonové, se ušetřil kus
                stromu! 😎🌲
              </Text>
              <div className="m-auto flex justify-center relative mt-5 w-full h-72">
                <Image
                  src="/images/logs.jpg"
                  fill
                  alt="A tree in misty cloud"
                  className="m-auto rounded shadow object-contain"
                  priority
                />
              </div>
            </Stepper.Completed>
          </Stepper>
          <Button.Group mt="md" className="mx-auto w-full">
            {active !== 0 && (
              <Button
                size="xl"
                onClick={prevStep}
                variant="outline"
                fullWidth
                id="stepper_prev"
                leftSection={<IconArrowLeft size={14} />}
              >
                Zpátky
              </Button>
            )}
            {active !== numberOfSteps && (
              <Button
                size="xl"
                onClick={nextStep}
                fullWidth
                rightSection={<IconArrowRight size={14} />}
                id="stepper_next"
              >
                {active === 0 ? "Ukaž mi jak fungují ReKrabice!" : "A co dál?"}
              </Button>
            )}
          </Button.Group>
        </div>
      </Container>
    </>
  );
}
