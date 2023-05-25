import { Anchor, Text } from "@mantine/core";
import Link from "next/link";
import ObsluhaWrapper from "../../components/Layouts/Obsluha/ObsluhaWrapper";

export default function Obsluha() {
  return (
    <ObsluhaWrapper title="Obsluha">
      <div className="mb-4">
        <Text className="font-bold italic">
					Mohu ReKrabice použít k vlastním účelům?
        </Text>
        <Text>
					Bohužel ne. Každá ReKrabice se před použitím musí vyčistit a
					zkontrolovat, to se děje jen na našem skladě.
        </Text>
      </div>
      <Text className="font-bold italic">Máte další dotaz?</Text>
      <Text>
				Rádi ho uslyšíme, obraťte se na nás na{" "}
        <Link href="kontakt" passHref>
          <Anchor>stránce kontakty</Anchor>
        </Link>
      </Text>
    </ObsluhaWrapper>
  );
}
