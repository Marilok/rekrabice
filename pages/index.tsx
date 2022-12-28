import type { NextPage } from "next";
import LandingPageWrapper from "../components/Layouts/LandingPage/LandingPageWrapper";
import HeroBullets from "../components/Layouts/LandingPage/LandingPageEmail";

const LandingPage: NextPage = () => {
  return (
    <LandingPageWrapper>
      <HeroBullets />
    </LandingPageWrapper>
  );
};

export default LandingPage;
