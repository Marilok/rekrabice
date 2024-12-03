import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Link,
  Text,
} from "@react-email/components";
import * as React from "react";

export const MyEmail = () => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Lexend:wght@100..900",
            format: "embedded-opentype",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lexend:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Body style={main}>
        <Container style={container}>
          <Heading style={{ fontFamily: "Lexend, sans-serif" }}>
            Přihlašovací odkaz pro ReKrabice
          </Heading>
          <Link
            href="{{ .ConfirmationURL  }}"
            style={{ textAlign: "center", color: "#008A19" }}
          >
            👉 Klikněte zde pro přihlášení 👈
          </Link>
          <Text>
            Pokud jste o odkaz nežádali, prosím ignorujte tento email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f5f5f5",
  padding: "40px 10px",
};

const container = {
  backgroundColor: "#fff",
  margin: "auto",
  padding: "40px 20px",
  borderRadius: "5px",
};

export default MyEmail;
