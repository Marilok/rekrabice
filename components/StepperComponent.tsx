// @ts-nocheck
import {
  Button,
  Center,
  Container,
  Loader,
  Portal,
  Stepper,
  Text,
  Title,
} from "@mantine/core";
import { useHotkeys, useScrollIntoView, useViewportSize } from "@mantine/hooks";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons";
import dynamic from "next/dynamic";
import Image from "next/image";

import { useState } from "react";

export default function StepperComponent() {
  const [active, setActive] = useState(0);
  const { height, width } = useViewportSize();
  const [opened, setOpened] = useState(false);

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
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  return (
    <>
      <Portal>
        <Confetti
          width={width}
          height={1200}
          recycle={false}
          run={active === numberOfSteps}
          numberOfPieces={777}
          onConfettiComplete={(confetti) => {
            confetti?.reset();
          }}
          confettiSource={{
            x: 0,
            y: 800,
            w: width,
            height: 100,
          }}
        />
      </Portal>
      <Container>
        <div className="flex flex-col h-full">
          <Stepper
            active={active}
            onStepClick={setActive}
            color="green"
            mt="lg"
            onClick={() => scrollIntoView({ alignment: "center" })}
            styles={(theme) => ({
              stepBody: {
                [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                  display: "none",
                },
              },
            })}
            ref={targetRef}
            id="top"
          >
            <Stepper.Step label="Jak to funguje?" id="stepper_0">
              <Title order={2} mt="xl">
                Jak to funguje?
              </Title>
              <Text mt="sm">
                <br></br>
                <br></br>
              </Text>
              <div className="m-auto flex justify-center mt-5 w-full h-72 relative">
                <Image
                  src="/prototype.png"
                  fill
                  alt="Jak to funguje"
                  className="m-auto rounded shadow object-contain"
                />
              </div>
            </Stepper.Step>
            <Stepper.Step label="Zvol ReKrabici" id="stepper_1">
              <Title order={2} mt="xl">
                Nech si nákup zabalit do ReKrabice.
              </Title>
              <Text mt="sm">
                V košíku zapojených eshopů zaškrtni možnost, že by si chtěl
                zboží zabalit do vratné krabice. Tato možnost stojí 50 Kč, ale
                neboj, je to vratná záloha, kterou dostaneš zpět. 😉
              </Text>
              <div className="m-auto flex justify-center relative mt-5 w-full h-72">
                <Image
                  src="/otoc_button.png"
                  fill
                  alt="Vybrat balení do vratné krabice z eshopu"
                  className="m-auto rounded shadow object-contain"
                />
              </div>
            </Stepper.Step>

            <Stepper.Step label="Rozbal balíček" id="stepper_2">
              <Title order={2} mt="xl">
                Rozbal svůj balíček a raduj se ze svého nákupu.
              </Title>
              <Text mt="sm">
                Jakmile ti přijde tvůj balíček domů nebo na výdejnu, tak ho
                rozbal jako normálně. Při tomto kroku ti jen popřejeme, aby jsi
                byl spokojen se svým nákupem. 😅
              </Text>
              <div className="m-auto flex justify-center relative mt-5 w-full h-72">
                <Image
                  src="/gifs/open.gif"
                  fill
                  alt="Box opening gif"
                  className="m-auto rounded shadow object-contain"
                />
              </div>
            </Stepper.Step>
            <Stepper.Step label="Přines krabici" id="stepper_3">
              <Title order={2} mt="xl">
                Přines krabici do vratného místa
              </Title>
              <Text mt="sm">
                Prázdnou krabici můžeš vrátit rovnou na výdejně nebo ji můžeě
                přinést do jednoho z našich vratných míst. Jakmile se krabice
                doputuje k nám na sklad, pošleme ti vratnou zálohu na účet.
              </Text>
              <div className="m-auto flex justify-center relative mt-5 w-full h-72">
                <Image
                  src="/gifs/open.gif"
                  fill
                  alt="Box opening gif"
                  className="m-auto rounded shadow object-contain"
                />
              </div>
              {/*               
              <Card
                radius="sm"
                className="w-[525px] h-[300px] mx-auto"
                shadow="sm"
                p={0}
              >
                <Map />
              </Card> */}
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
            <Stepper.Completed id="stepper_4">
              <Title order={2} mt="xl">
                Wohoooo! 🥳
              </Title>
              <Text mt="sm">
                Vrácenou ReKrabici pak po vyčištění poskytneme opět zapojeným
                eshopům. A právě díky tomu, že jsi otočil ReKrabice místo toho
                aby si vyhodil tu kartonovou, tak nemuselo být pokáceno 0,6 %
                stromu. Děkujeme ti za tvou pomoc šetřit naše lesy. 😎🌳
              </Text>
              <div className="m-auto flex justify-center relative mt-5 w-full h-72">
                <Image
                  src="/images/tree.jpg"
                  fill
                  alt="A tree in misty cloud"
                  className="m-auto rounded shadow object-contain"
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
                className={`max-w-80 ${active == 0 ? "max-w-96 !rounded" : ""}`}
                color="green"
                id="stepper_prev"
                leftIcon={<IconArrowLeft size={14} />}
              >
                Zpátky
              </Button>
            )}
            {active !== numberOfSteps && (
              <Button
                size="xl"
                color="green"
                onClick={nextStep}
                fullWidth
                className={`max-w-80 ${active == 0 ? "max-w-96 !rounded" : ""}`}
                rightIcon={<IconArrowRight size={14} />}
                id="stepper_next"
              >
                Další krok
              </Button>
            )}
          </Button.Group>
        </div>
      </Container>
    </>
  );
}
