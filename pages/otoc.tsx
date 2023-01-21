// import Image from 'next/image'
// import logoEconeaSrc from "../public/images/logos/econea.svg";
// import logoTierraVerdeSrc from "../public/images/logos/tierra-verde.png";

import {
  Title,
  Container,
  Flex,
  Image,
  Card,
  Text,
  Button
} from "@mantine/core";
import StepperComponent from "../components/StepperComponent";
import LandingPageWrapper from "../components/Layouts/LandingPage/LandingPageWrapper";
import { IconMail } from "@tabler/icons";
import Link from "next/link";

export default function Brands() {
  return(
  <LandingPageWrapper>
    <StepperComponent/>
        <Container mt="xl">
          <Title order={2}>Zapojené eshopy</Title>
          <Flex  justify="space-around" my={"xl"}>
            <Image src={"/images/logos/econea.svg"} height="80px" width="auto"  alt="Econea logo" className=" opacity-80 hover:scale-110	 hover:opacity-100 transition-opacity"/>
            <Image src={"/images/logos/tierra-verde.png"} height="80px"  width="auto" alt="Econea logo" className="max-w-full opacity-80 hover:scale-110 hover:opacity-100 transition-opacity"/>
          </Flex>
        </Container>
        <Container>
          <Title order={2}>Zapojení dopravci</Title>
          <Flex  justify="space-around" my={"xl"}>
          </Flex>
        <Card p={'xl'}  withBorder shadow={"md"}>
          <Title order={2}>
          Chcete být součástí?
          </Title>
          <Text mt="sm">
            Pojďme se spojit a my vám povíme, jak i vaše firma firma může využívat vratné krabice.
          </Text>
          <Button mt="lg" component={Link} href="/kontakt" variant="gradient" gradient={{from: "green", to:"lime"}} rightIcon={<IconMail/>}>
            Kontaktujte nás
          </Button>
        </Card>
        </Container>

      </LandingPageWrapper>
  )
};