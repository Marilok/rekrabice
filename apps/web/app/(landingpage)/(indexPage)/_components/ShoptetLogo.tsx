import { Container, Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

export default function ShoptetLogo() {
  return (
    <Container>
      <Title order={2} ta="center">
        Integrace na e-shopové platformy
      </Title>
      <Container
        className="flex justify-center items-center flex-wrap gap-sm"
        my="xl"
      >
        <div className="w-60 h-14 relative rounded-sm">
          <Link href="https://shoptet.cz" target="_blank">
            <Image
              src="/images/logos/shoptet.svg"
              fill
              alt="Shoptet logo"
              className="object-contain opacity-80 hover:scale-110 hover:opacity-100 transition-all"
            />
          </Link>
        </div>
      </Container>
    </Container>
  );
}
