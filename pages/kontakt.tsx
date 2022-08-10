import type { NextPage } from "next";
import Link from "next/link";
import Contact from "../components/Contact/Contact";
import LandingPageWrapper from "../components/Layouts/LandingPage/LandingPageWrapper";

const Kontakt: NextPage = () => {
  return (
    <LandingPageWrapper>
      <Contact />
    </LandingPageWrapper>
  );
};

export default Kontakt;
