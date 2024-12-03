"use client";

import {
  Anchor,
  AspectRatio,
  Button,
  Container,
  Portal,
  Stepper,
  Text,
  Title,
} from "@mantine/core";
import { useHotkeys, useScrollIntoView, useViewportSize } from "@mantine/hooks";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
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

  const steps = [
    {
      label: "Jak fungují ReKrabice?",
      id: "stepper_0",
      title: "Jak fungují ReKrabice?",
      decription: (
        <>
          <br />
          <br />
        </>
      ),
      image: (
        <Image
          src="/prototype.jpg"
          fill
          alt="Jak to funguje"
          className="m-auto rounded shadow object-contain"
          priority
        />
      ),
    },
    {
      label: "Zvol ReKrabici",
      id: "stepper_1",
      title: "Vyměň karton za ReKrabici",
      description: (
        <>
          Vše to začíná volbou. V košíku zaškrtni, že by sis přál/a ReKrabici
          jako způsob balení. K ceně objednávky ti bude přičteno 49&nbsp;Kč (z
          těch pak zaplatíme zpětnou dopravu). 😉
        </>
      ),
      image: (
        <Image
          src="/otoc_button.png"
          fill
          alt="Vybrat balení do vratné krabice z e-shopu"
          className="m-auto rounded shadow object-contain"
          priority
        />
      ),
    },
    {
      label: "Rozbal balíček",
      id: "stepper_2",
      title: "Rozbal svůj balíček a raduj se ze svého nákupu",
      description:
        "Konečně ti dorazil balíček? Rozbal ho jako normálně a užívej si svůj nákup. Teď už jen stačí ReKrabici vrátit. Jak ale na to? 🤔 ",
      image: (
        <Image
          src="/gifs/open.gif"
          fill
          alt="Box opening gif"
          className="m-auto rounded shadow object-contain"
          priority
        />
      ),
    },
    {
      label: "Vrať nám ReKrabici",
      id: "stepper_3",
      title: "Vrať nám ReKrabici",
      description: (
        <>
          Prázdnou ReKrabici můžeš vrátit na kterékoliv Balíkovně (kromě boxů).
          Podrobné instrukce k vrácení najdeš na{" "}
          <Link href="/vratit">
            <Anchor component="span">samostatné stránce </Anchor>
          </Link>
          . A pokud si přeješ něco z objednávky vrátit, zabal zboží zpět do
          ReKrabice a vrať ji eshopu. 📦
        </>
      ),
      image: (
        <AspectRatio ratio={16 / 9} className="w-full h-full">
          <iframe
            src="https://b2c.cpost.cz/locations/?type=BALIKOVNY"
            title="Mapa Balíkoven"
            style={{ border: 0, width: "100%", height: "100%" }}
          />
        </AspectRatio>
      ),
    },
  ];

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
            mt="lg"
            onClick={() => scrollIntoView({ alignment: "center" })}
            classNames={{
              stepBody: "hidden sm:block",
            }}
            ref={targetRef}
            id="top"
          >
            {steps.map((step) => (
              <Stepper.Step key={step.id} id={step.id} title={step.title}>
                <Title order={2} mt="xl">
                  {step.title}
                </Title>
                <Text mt="sm">{step.description}</Text>
                <div className="m-auto flex justify-center relative mt-5 w-full h-72 overflow-hidden">
                  {step.image}
                </div>
              </Stepper.Step>
            ))}
            <Stepper.Completed>
              <Title order={2} mt="xl">
                Wohoooo! 🥳
              </Title>
              <Text mt="sm">
                Gratulujeme, zvládl jsi to! Teď ReKrabici už jen vyčistíme a
                opět poskytneme zapojeným e-shopům pro další nákup. Díky tomu,
                že sis ReKrabici zvolil/a místo té kartonové si ušetřil kus
                stromu. Děkujeme, že jsi v tom s námi! 😎🌲
              </Text>
              <div className="m-auto flex justify-center relative mt-5 w-full h-72">
                <Image
                  src="/images/logs.jpg"
                  fill
                  alt="A tree in misty cloud"
                  className="m-auto rounded  object-contain"
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
                {active === 0 ? "Ukaž mi to!" : "A co dál?"}
              </Button>
            )}
          </Button.Group>
        </div>
      </Container>
    </>
  );
}
