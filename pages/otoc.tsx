import type { NextPage } from "next";
import Link from "next/link";

import image from "../public/smash-computer.gif";
import { useState } from "react";
import { Stepper, Button, Group, Title, Text, Modal } from "@mantine/core";
import { useHotkeys, useViewportSize } from "@mantine/hooks";
import { IconArrowDown, IconArrowUp, IconMapPin } from "@tabler/icons";
import Confetti from "react-confetti";
import CustomMap from "../components/Map/CustomMap";
import dynamic from "next/dynamic";

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
  const Map = dynamic(() => import("../components/Map/CustomMap"), {
    loading: () => <p>A map is loading</p>,
    ssr: false, // This line is important. It's what prevents server-side render
  });

  //TODO: clean up confetti on unmount
  return (
    <>
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
      <Stepper
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
        orientation="vertical"
        color="green"
      >
        <Stepper.Step
          label="Vyber si Zelenou krabici"
          //   description="Nech si nákup zabalit do Zelené krabice."
        >
          <Title order={1}>Nech si nákup zabalit do Zelené krabice.</Title>
          <Text>
            Tato možnost stojí 50 Kč, ale nenech se odradit, je to totiž vratná
            záloha. 😉
          </Text>
        </Stepper.Step>

        <Stepper.Step
          label="Rozbal balíček"
          // description="Rozbal balíček"
        >
          <Title order={1}>
            Rozbal svůj balíček a raduj se ze svého nákupu.
          </Title>
          <Text>
            Při tomto kroku ti jen popřejeme, aby jsi byl spokojen se svým
            nákupem. 😅
          </Text>
        </Stepper.Step>
        <Stepper.Step
          label="Přines krabici"
          //   description="Vrať krabici a dostaň zálohu"
        >
          <Title order={1}>Přines krabici do vratného místa</Title>
          <Text>
            Prázdnou krabici přines do jednoho z 23 vratných míst. Vratnou
            zálohu ti automaticky připíšeme na účet.
          </Text>
          <Map />
          <Button
            size="md"
            onClick={() => {
              setOpened(true);
            }}
            variant="light"
            color="green"
            leftIcon={<IconMapPin size={14} />}
          >
            Mapa vratných míst
          </Button>
        </Stepper.Step>
        <Stepper.Completed>
          <Title order={1}>Wohoooo! 🥳</Title>
          <Text>
            Právě jsi otočil krabici a zachránil 1/156 stromu jen díky tomu, že
            si využil Zelenou krabici. 🌳
          </Text>
        </Stepper.Completed>
      </Stepper>
      <Group position="center" mt="xl">
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
      </Group>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Mapa vratných míst"
      >
        <Map />
      </Modal>
    </>
  );
};

export default Otoc;
