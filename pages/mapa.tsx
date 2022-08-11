import type { NextPage } from "next";
import Link from "next/link";
import Contact from "../components/Contact/Contact";
import LandingPageWrapper from "../components/Layouts/LandingPage/LandingPageWrapper";
import dynamic from "next/dynamic";
import { Box, Card, Center, Loader, Text } from "@mantine/core";

const Mapa: NextPage = () => {
  const Map = dynamic(() => import("../components/Map/CustomMap"), {
    loading: () => (
      <Center className="h-full relative">
        <Loader size={"xl"} />
        <Text ml={"md"}>Načítání mapy</Text>
      </Center>
    ),
    ssr: false, // This line is important. It's what prevents server-side render
  });
  return (
    <LandingPageWrapper>
      <Card radius="sm" shadow="sm" p={0} className={"h-[600px]"}>
        <Map />
      </Card>
    </LandingPageWrapper>
  );
};

export default Mapa;
