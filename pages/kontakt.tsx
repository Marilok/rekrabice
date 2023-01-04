import type { NextPage } from "next";
import Link from "next/link";
import Contact from "../components/Contact/Contact";
import LandingPageWrapper from "../components/Layouts/LandingPage/LandingPageWrapper";

export default function Kontakt ()  {
  return (
    <LandingPageWrapper>
      <Contact />
    </LandingPageWrapper>
  );
};
