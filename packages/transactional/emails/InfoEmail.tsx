import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Text,
} from "@react-email/components";

export default function InfoEmail(props: any) {
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
          <Img
            src="https://www.rekrabice.cz/branding/ReKrabice_logo_colored.svg"
            height={60}
            style={{ marginBottom: 16, display: "block", margin: "auto" }}
          />
          <Heading style={{ fontFamily: "Lexend, sans-serif" }}>
            Ušetřili jste kus stromu! 🌳
          </Heading>
          <Text>
            V následujících dnech Vám bude doručena zásilka v ReKrabici. Za což
            Vám děkujeme my i naše planeta děkuje! 🌍💚
          </Text>
          <Text>Zde jsou jednoduché instrukce na vrácení ReKrabice</Text>
          <Text>
            Ušetříte kus stromu (vizualizovat) díky tomu, že se nemusela vyrobit
            další jednorázová kartonová krabice, která by jen skončila v koši.
          </Text>
          <Text>
            Tím, že ReKrabici vrátite budeme moci ji využít pro další nákup a
            ušetřit další kus stromu.
          </Text>

          <Text>
            Krabici můžete vrátit na kterékoliv pobočce Balíkovny (kromě boxů),
            kde obsluze řeknete, že byste chtěli vrátit balíček a nadiktujete
            vratkový kód, který je napsán na ReKrabici.
          </Text>
          <Text>
            (Pokud se rozhodnete zásilku vrátit, postupujte podle instrukcí od
            e-shopu a zabalte nákup zpět do ReKrabice.)
          </Text>

          <Link href="https://rekrabice.cz/vratit" style={{ color: "#008A19" }}>
            👉 Podrobnější návod na vrácení
          </Link>
          <Text>
            Pokud máte jakékoliv dotazy, vzkazy, zpětnou vazbu či připomínky,
            neváhejte nám odpovědět na tento email. 💚
          </Text>
          <Text>CTA</Text>
          <Hr
            style={{
              marginTop: 16,
              borderColor: "rgb(209,213,219)",
              marginBottom: 16,
              borderTopWidth: 2,
            }}
          />
          <Text>Awoxo s.r.o.</Text>
        </Container>
      </Body>
    </Html>
  );
}

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
