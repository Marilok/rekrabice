"use client";

import { Button, Container, Text, Title } from "@mantine/core";
import { useState } from "react";
import classes from "./Hero.module.css";
import Modal from "./Modal";

export default function Hero() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal opened={opened} setOpened={setOpened} />
      <Container
        className={classes.wrapper}
        py="calc(var(--mantine-spacing-xl) * 3)"
      >
        <Container
          className="flex justify-between flex-col mantine-md:flex-col flex-1 mantine-md:ml-[16vw]"
          my={{ base: "auto", md: 0 }}
          mr={{ base: "0", md: "auto" }}
        >
          <Title
            ta={{ base: "center", md: "left" }}
            c="white"
            ff="Greycliff CF, var(--mantine-font-family}"
            fw={900}
            lh={{ base: 1.15, md: 1.05 }}
            maw={{ base: "100%", md: 600 }}
            fz={{ base: 32, md: 48 }}
          >
            Ušetři přírodě použitím
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: "pink", to: "yellow" }}
            >
              {" "}
              vratné krabice
            </Text>{" "}
            pro svůj online nákup!
          </Title>
          <Text
            c="white"
            opacity={0.75}
            maw={{ base: "100%", md: 550 }}
            ta={{ base: "center", md: "left" }}
            mt={30}
          >
            Nestav doma věže z kartonových krabic. Všechny ReKrabice můžeš
            vrátit a ušetřit tak našim lesům.&nbsp;A to zcela zdarma! 🌲
          </Text>
          <Button
            component="button"
            variant="gradient"
            gradient={{ from: "green", to: "teal" }}
            size="xl"
            ff="Greycliff CF, var(--mantine-font-family}"
            w={{ xs: "100%", md: "max-content" }}
            px={50}
            fz={22}
            mt={40}
            onClick={() => setOpened(true)}
            id="signup_hero_open"
          >
            <span id="signup_hero_open">Vyzkoušet ReKrabice</span>
          </Button>
        </Container>
      </Container>
    </>
  );
}
