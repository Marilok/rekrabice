//@ts-nocheck
import type { NextPage } from "next";
import Link from "next/link";

import { useState } from "react";
import {
  Stepper,
  Button,
  Group,
  Title,
  Text,
  Portal,
  Modal,
  Container,
  Card,
  Center,
  Loader,
} from "@mantine/core";
import { useHotkeys, useViewportSize } from "@mantine/hooks";
import {
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconMapPin,
  IconPhone,
} from "@tabler/icons";
import dynamic from "next/dynamic";
import LandingPageWrapper from "../components/Layouts/LandingPage/LandingPageWrapper";
import { useRouter } from "next/router";
import Image from "next/image";
const Otoc: NextPage = () => {
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
  const query: any = router.query;
  // {
  //   referer: string | undefined;
  //   name: string | undefined;
  // }
  //?referrer=aktin.cz&name=Aktin

  const Map = dynamic(() => import("../components/Map/CustomMap"), {
    loading: () => (
      <Center className="h-full relative">
        <Loader size={"xl"} />
        <Text ml={"md"}>Načítání mapy</Text>
      </Center>
    ),
    ssr: false, // This line is important. It's what prevents server-side render
  });

  const Confetti = dynamic(() => import("react-confetti"), {
    loading: () => <></>,
    ssr: false, // This line is important. It's what prevents server-side render
  });

  //TODO: clean up confetti on unmount
  //TODO: move to canvas confetti
  return (
    <>
      <Portal>
        <Confetti
          width={width}
          height={height}
          recycle={false}
          run={active === 5}
          numberOfPieces={777}
          onConfettiComplete={(confetti) => {
            confetti?.reset();
          }}
        />
      </Portal>
      <LandingPageWrapper>
        <Container className="h-96">
          <div className="flex flex-col h-full">
            <Stepper
              active={active}
              onStepClick={setActive}
              // breakpoint="md"
              color="green"
              mt={"xl"}
            >
               <Stepper.Step label="Problém">
                <Title order={1} mt={"xl"}>
                  Už toho bylo dost? 🤔⁉️
                </Title>
                <Text mt={"md"}>
                  Už Vaše zákazníky nebaví pořád do kola vyhazovat krabice? Chtěli by něco udržitelnějšího? Nebo jste zkoušeli najít ekologičtější variantu, ale našli jste jen samý greenwashing?
                  A nebo Vám přijde balné moc drahé? Máme pro Vás řešení! 
                </Text>
                <div className="m-auto flex justify-center my-5">
                  <Image
                    src={"/logo_text.svg"}
                    height={300}
                    width={540}
                    alt="Vybrat balení do vratné krabice z eshopu"
                    className="m-auto rounded shadow"
                  />
                </div>
              </Stepper.Step>
               <Stepper.Step label="Řešení">
                <Title order={1} mt={"xl"}>
                  Pojd´me spolu otáčet krabice. 🌳🌎
                </Title>
                <Text mt={"md"}>
                  Počkat co? Princip otáčení zelených krabic je jednoduchý a stojí to Váš podnik i naši planetu méně. 
                </Text>
                <div className="m-auto flex justify-center my-5">
                  <Image
                    src={"/logo_text.svg"}
                    height={300}
                    width={540}
                    alt="Vybrat balení do vratné krabice z eshopu"
                    className="m-auto rounded shadow"
                  />
                </div>
              </Stepper.Step>
              <Stepper.Step label="Otoč krabici">
                <Title order={1} mt={"xl"}>
                  Přidejte zákazníkům možnost přidání balného s vratnou zálohou.
                </Title>
                <Text mt={"md"}>
                  Tato možnost stojí Vaše zákazníky 50 Kč, ale je to jen vratná záloha. 😉
                </Text>
                <div className="m-auto flex justify-center my-5">
                  <Image
                    src={"/otoc_button.png"}
                    height={300}
                    width={540}
                    alt="Vybrat balení do vratné krabice z eshopu"
                    className="m-auto rounded shadow"
                  />
                </div>
              </Stepper.Step>

              <Stepper.Step label="Odeslání">
                <Title order={1} mt={"xl"}>
                  Zabalte krabici do zelené krabice a odešlete ji.
                </Title>
                <Text mt={"md"}>
                  Při tomto kroku to necháme na Vás, to umíte Vy nejlépe. 😅
                </Text>

                
              </Stepper.Step>
              
              <Stepper.Step label="Vrácení">
                <Title order={1} mt={"xl"}>
                  Dovolte zákazníkům vrátit odeslané krabice na Vašich výdejních místech.
                </Title>
                <Text mt={"md"}>
                  Prázdnou krabici Vaši zákaznici mohou přinést přímo k Vám nebo do jednoho z dalších 23 vratných míst. Vratnou zálohu prosím vrat´te zákazníkovi v hotovosti.
                </Text>
                <Card radius="sm" className="h-80" shadow="sm" p={0}>
                  <Map />
                </Card>
                <Link passHref href="/mapa">
                  <Button
                    size="md"
                    mt={"md"}
                    onClick={() => {
                      setOpened(true);
                    }}
                    variant="light"
                    color="green"
                    component="a"
                    leftIcon={<IconMapPin size={14} />}
                  >
                    Podrobná mapa vratných míst
                  </Button>
                </Link>
              </Stepper.Step>
              <Stepper.Completed>
                <Title order={1} mt={"xl"}>
                  Wohoooo! 🥳
                </Title>
                <Text mt={"md"}>
                  Právě jsme spolu otočili krabici a zachránil 1/156 stromu jen díky
                  tomu, že jste využil Zelenou krabici. 🌳
                </Text>
                 <Link passHref href="/kontakt">
                  <Button
                    size="xl"
                    mt={"md"}
                    color="green"
                    component="a"
                    leftIcon={<IconPhone size={14} />}
                  >
                    Pojďme se domluvit na spolupráci
                  </Button>
                </Link>
                {query.referrer && (
                  <Button component="a" href={`https://${query.referrer}`}>
                    Vrátit se do super obchodu {query.name}
                  </Button>
                )}
              </Stepper.Completed>
            </Stepper>
            <Button.Group className=" mt-auto mx-auto">
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
              {active !== 5 && (
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
            <Group></Group>
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
      </LandingPageWrapper>
    </>
  );
};

export default Otoc;
