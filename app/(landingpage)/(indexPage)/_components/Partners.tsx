import { Container, Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

export default function Partners() {
  return (
    <Container>
      <Title order={2} ta="center">
        Zapojené e-shopy
      </Title>
      <Container
        className="flex justify-center items-center flex-wrap gap-sm"
        my="xl"
      >
        <div className="w-60 h-14 relative rounded-sm">
          <Link href="https://montessorihracky.cz/cs/" target="_blank">
            <Image
              src="/images/logos/montessori.png"
              fill
              alt="Montessori logo"
              className="object-contain opacity-80 hover:scale-110 hover:opacity-100 transition-all"
            />
          </Link>
        </div>
        <div className="w-60 h-14 relative rounded-sm">
          <Image
            src="/images/logos/tmobile.jpg"
            fill
            alt="Tmobile logo"
            className="object-contain opacity-80 hover:scale-110 hover:opacity-100 transition-all"
          />{" "}
        </div>
      </Container>
    </Container>
  );
}
