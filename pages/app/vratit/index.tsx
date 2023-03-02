import { Button, Container, Input, Title } from "@mantine/core";
// import InputMask from "react-input-mask";
import { useRouter } from "next/router";
import LandingPageWrapper from "../../../components/Layouts/LandingPage/LandingPageWrapper";

//TODO: what if is already paired
//TODO: api call after submit
//TODO: check bank number

export default function Return() {
  const router = useRouter();
  const { query } = router;
  // const checkBox = await supabase.rpc("landingpagesignup", {
  //   usermail: req.body.mail,
  // });
  return (
    <LandingPageWrapper title="Vrátit ReKrabici">
      <Container>
        <Title order={2}>
          Vracíš krabici s označením:&nbsp;
          <span>{query.boxid}</span> {/* alias{" "} */}
        </Title>
        <form>
          <Input.Wrapper
            id={"bankAccount"}
            label="Email"
            required
            description="Slouží k zaslání potvrzení o vracení"
            mt="md"
          >
            <Input
              //   icon={<IconAt />}
              id={"bankAccount"}
              placeholder="petr@email.cz"
            />
          </Input.Wrapper>
          {/* <EmailInput id="" /> */}
          <Input.Wrapper
            id={"bankAccount"}
            label="Číslo bankovního účtu"
            required
            description="Slouží k vrácení vratné zálohy"
            mt="md"
          >
            <Input
              //   icon={<IconAt />}
              id={"bankAccount"}
              placeholder="Číslo bankovního účtu"
            />
          </Input.Wrapper>
          <Button fullWidth type="submit" mt="md">
            Spárovat krabici
          </Button>
        </form>
      </Container>
    </LandingPageWrapper>
  );
}
