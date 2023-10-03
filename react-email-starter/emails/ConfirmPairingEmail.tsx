import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";

interface ConfirmPairingEmailProps {
  bankAccountPrefix?: string;
  bankAccountNumber: number;
  bankCode: string;
}

const formattedBankAccountNumber = (
  bankAccountNumber: number,
  bankCode: string,
  bankAccountPrefix?: string,
) => {
  if (!bankAccountPrefix) {
    return `${bankCode}/${bankAccountNumber}`;
  }
  return `${bankCode}-${bankAccountPrefix}/${bankAccountNumber}`;
};

function ConfirmPairingEmail({
  bankAccountPrefix,
  bankAccountNumber = 20304112,
  bankCode = "0100",
}: ConfirmPairingEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Záloha bude vyplacena na bankovní účet</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://rekrabice.cz/logo_text.svg"
            // TODO: change to env variable
            // const baseUrl = process.env.NEXT_PUBLIC_URL
            //   ? `https://${process.env.NEXT_PUBLIC_URL}`
            //   : "";
            width="120"
            height="40"
            alt="ReKrabice logo"
          />
          <Heading style={heading}>
            Záloha bude vyplacena na bankovní účet
          </Heading>
          <Text style={paragraph}>
            Krásný den, <br />
            <br />
            před chvílí jste vytvořili požadavek, abychom Vám vrátili Vaši
            zálohu za ReKrabici na uvedený bankovní účet:
          </Text>
          <code style={code}>
            {formattedBankAccountNumber(
              bankAccountNumber,
              bankCode,
              bankAccountPrefix,
            )}
          </code>
          <Text style={paragraph}>
            Teď už jen stačí donést ReKrabici na jedno z našich sběrných míst. V
            případě, že číslo účtu nesedí nebo máte jiný dotaz, kontaktujte nás
            prosím odpovědí na tento mail.
            <br />
            <br /> Hezký den,
            <br /> tým ReKrabice
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default ConfirmPairingEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "560px",
};

const heading = {
  fontSize: "24px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "400",
  color: "#484848",
  padding: "17px 0 0",
};

const paragraph = {
  margin: "15px 0",
  fontSize: "15px",
  lineHeight: "1.4",
  color: "#3c4149",
};

const code = {
  fontFamily: "monospace",
  fontWeight: "700",
  padding: "1px 4px",
  backgroundColor: "#dfe1e4",
  letterSpacing: "-0.3px",
  fontSize: "21px",
  borderRadius: "4px",
  color: "#3c4149",
};
