import { Button, Heading, Html, Img } from "@react-email/components";

export function MyEmail({ link }: { link: string }) {
  return (
    <Html>
      <Heading style={{ color: "#000" }}>
        Přihlašovací odkaz pro ReKrabice
      </Heading>
      <Button
        href={link}
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Klikněte zde pro přihlášení
      </Button>

      <p>Pokud jste o tento email nežádali, ignorujte ho prosím.</p>
      <Img
        alt="ReKrabice logo"
        height={60}
        src="https://rekrabice.cz/branding/ReKrabice_logo_colored.png"
        style={{ margin: "12px auto 12px" }}
      />
    </Html>
  );
}

export default MyEmail;
