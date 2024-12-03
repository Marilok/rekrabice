"use client";

import { Container, Text, Title } from "@mantine/core";
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
        fluid
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
            vrátit a ušetřit tak našim lesům a předejít vzniku nového odpadu. 🌲
          </Text>
        </Container>
      </Container>
    </>
  );
}
