import { Container, Title } from "@mantine/core";
import Image from "next/image";

export default function Partners() {
  return (
    <Container>
      <Title order={2} ta="center">
        Zapojené e-shopy
      </Title>
      <Container
        className="flex justify-around items-center gap-5 flex-wrap"
        my="xl"
      >
        <div className="w-60 h-20 relative">
          <Image
            src="/images/logos/econea.svg"
            fill
            alt="Econea logo"
            className="object-contain opacity-80 hover:scale-110 hover:opacity-100 transition-opacity"
            priority
          />
        </div>
        <div className="h-20 w-20 relative">
          <Image
            src="/images/logos/tierra-verde.png"
            fill
            alt="Tierra Verde logo"
            className="object-contain opacity-80 hover:scale-110 hover:opacity-100 transition-opacity"
            priority
          />
        </div>
        <div className="w-60 h-14 relative">
          <Image
            src="/images/logos/aktin.svg"
            fill
            alt="Aktin logo"
            className="object-contain opacity-80 hover:scale-110 hover:opacity-100 transition-opacity"
            priority
          />
        </div>
      </Container>
    </Container>
  );
}
