"use client";

import {
  ActionIcon,
  Anchor,
  Center,
  ColorSwatch,
  Flex,
  Group,
  List,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
  Tooltip,
  rem,
} from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { IconCheck, IconCopy, IconDownload, IconX } from "@tabler/icons-react";
// import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
// export const metadata: Metadata = {
//   title: "Brand",
//   description: "Brand guideliness pro ReKrabice",
// };

const colors = [
  {
    hex: "#008A19",
    pantone: "2426 C",
    ral: "6037",
    name: "Leafy Green",
    description:
      "Leafy green je barva naší značky. Je to barva, kterou si s námi každý spojí, když se řeknou ReKrabice.",
  },
  {
    hex: "#FFFF",
    name: "Snow White",
    description: "Primární barva pro pozadí.",
  },
  {
    hex: "#000",
    name: "Black",
    description: "Primární barva pro pozadí.",
  },
];

export default function Page() {
  return (
    <Stack m="lg">
      <Stack>
        <Title order={2}>Logotyp</Title>
        <Flex gap="sm">
          <Center className="relative w-96 " bg="brand.10">
            <Image
              src="/branding/logo_white.svg"
              width="200"
              height="200"
              alt="logo"
            />
            <Link
              download="logo_white.svg"
              href="/branding/logo_white.svg"
              target="_top"
            >
              <ActionIcon
                variant="outline"
                color="white"
                size="xl"
                className="!absolute bottom-0 right-0"
                m="sm"
              >
                <IconDownload />
              </ActionIcon>
            </Link>
          </Center>
          <Center className="relative w-96" bg="gray.0">
            <Image
              src="/branding/logo_colored.svg"
              width="200"
              height="200"
              alt="logo"
            />
            <Link
              href="/branding/logo_colored.svg"
              download="logo_colored"
              target="_top"
            >
              <ActionIcon
                variant="outline"
                size="xl"
                className="!absolute bottom-0 right-0"
                m="sm"
              >
                <IconDownload />
              </ActionIcon>
            </Link>
          </Center>
        </Flex>
      </Stack>
      <Stack>
        <Title order={2}>Paleta barev</Title>
        <Flex gap="sm">
          {colors.map((color) => (
            <ColorCard color={color} />
          ))}
        </Flex>
      </Stack>

      <Stack>
        <Title order={2}>Typografie</Title>
        <div>
          <Title order={3}>Hlavní písmo</Title>
          <Text>
            Hlavním písmem je{" "}
            <Anchor
              href="https://fonts.google.com/specimen/Lexend"
              target="_blank"
              inline
            >
              Lexend
            </Anchor>
            , používá se pro titulky, když chceme přilákat pozornost.
            Zarovnáváme vždy vlevo.
          </Text>
        </div>
        <Flex gap="sm">
          <Stack
            className="relative max-w-max"
            justify="center"
            gap="0"
            p="xl"
            c="brand.10"
            ff="Lexend"
            bg="gray.0"
          >
            <Text fw="bold" key="1" fz="xl">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </Text>
            <Text fw="bold" key="2" fz="xl">
              abcdefghijklmnopqrstuvwxyz
            </Text>

            <Text fw="bold" key="3" fz="xl">
              0123456789
            </Text>

            <Text fw="bold" key="4" fz="xl">
              {"-«+»!?.*\\/()£€$¥¢+−±×÷=≠≈<>≤"}
            </Text>
          </Stack>
          <Stack
            className="relative max-w-max"
            justify="center"
            gap="0"
            p="xl"
            bg="brand.10"
            c="white"
            ff="Lexend"
          >
            <Text fw="bold" key="1" fz="xl">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </Text>
            <Text fw="bold" key="2" fz="xl">
              abcdefghijklmnopqrstuvwxyz
            </Text>

            <Text fw="bold" key="3" fz="xl">
              0123456789
            </Text>

            <Text fw="bold" key="4" fz="xl">
              {"-«+»!?.*\\/()£€$¥¢+−±×÷=≠≈<>≤"}
            </Text>
          </Stack>
        </Flex>
        <div>
          <Title order={3}>Doplňkové písmo</Title>
          <Text>
            <Anchor
              href="https://fonts.google.com/specimen/Inter"
              target="_blank"
              inline
            >
              Inter
            </Anchor>{" "}
            je font, který se primárně používá pro offline i online materiály,
            které jsou obsáhlé a jejich informace mají zejména informační
            charakter. Zcela jednoduše - používáme ho pro texty, které nejsou
            titulky ani věci, které jsou výrazné a mají upoutat pozornost.
          </Text>
        </div>
        <Flex gap="sm">
          <Stack
            className="relative max-w-max"
            justify="center"
            gap="0"
            p="xl"
            c="brand.10"
            bg="gray.0"
            ff="Inter"
          >
            <Text key="1" fz="xl">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </Text>
            <Text key="2" fz="xl">
              abcdefghijklmnopqrstuvwxyz
            </Text>

            <Text key="3" fz="xl">
              0123456789
            </Text>

            <Text key="4" fz="xl">
              {"-«+»!?.*\\/()£€$¥¢+−±×÷=≠≈<>≤"}
            </Text>
          </Stack>
          <Stack
            className="relative max-w-max"
            justify="center"
            gap="0"
            p="xl"
            bg="brand.10"
            c="white"
            ff="Inter"
          >
            <Text key="1" fz="xl">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </Text>
            <Text key="2" fz="xl">
              abcdefghijklmnopqrstuvwxyz
            </Text>

            <Text key="3" fz="xl">
              0123456789
            </Text>

            <Text key="4" fz="xl">
              {"-«+»!?.*\\/()£€$¥¢+−±×÷=≠≈<>≤"}
            </Text>
          </Stack>
        </Flex>
      </Stack>

      <Stack>
        <Title order={2}>Ikonky</Title>
        <Text>
          Používáme{" "}
          <Anchor href="https://tablericons.com/" target="_blank" inline>
            Tabler Icons
          </Anchor>
          . Barva ikonek je buď leafy green nebo snow white.
        </Text>
      </Stack>

      <Stack>
        <Title order={2}>Správné psaní názvů</Title>
        <div>
          <Title order={3}>Název společnosti</Title>
          <Text>
            Název firmy včetně právní formy uvádíme na oficiálních dokumentech.
            Používáme jej také v případech, kdy posíláme oficiální adresu
            společnosti. Všude jinde používáme zjednodušený marketingový zápis.
          </Text>
          <ExamplesList
            items={[
              {
                text: "Awoxo, s.r.o.",
                isCorrect: true,
              },
              {
                text: "Awoxo s.r.o.",
              },
              {
                text: "Awoxo",
              },
            ]}
          />
        </div>

        <div>
          <Title order={3}>Marketingový zápis</Title>
          <ExamplesList
            items={[
              {
                text: "ReKrabice",
                isCorrect: true,
              },
              {
                text: "re-krabice",
              },
              {
                text: "REkrabice",
              },
            ]}
          />
        </div>
        <div>
          <Title order={3}>Webová adresa</Title>
          <Text>
            Kvůli čitelnosti uvádíme pouze doménu bez <i>www.</i> a bez{" "}
            <i>https://</i>
          </Text>
          <ExamplesList
            items={[
              {
                text: "rekrabice.cz",
                isCorrect: true,
              },
              {
                text: "www.rekrabice.cz",
              },
              {
                text: "https://rekrabice.cz",
              },
            ]}
          />{" "}
        </div>
      </Stack>

      <Stack>
        <Title order={2}>Emailová komunikace</Title>
        <div>
          <Title order={3}>Emailová adresa</Title>
          <Text>
            Vždy používáme emailovou adresu ve formátu{" "}
            <i>jmeno.prijmeni@rekrabice.cz</i>. Vyjímkou jsou speciální emailové
            adresy (robot, info, ahoj, ucty).
          </Text>
          <ExamplesList
            items={[
              {
                text: "jmeno.prijmeni@rekrabice.cz",
                isCorrect: true,
              },
              {
                text: "prijmeni@rekrabice.cz",
              },
              {
                text: "jmeno@rekrabice.cz",
              },
            ]}
          />
        </div>
        <div>
          <Title order={3}>Název schránky</Title>
          <Text>
            Název schránky e-mailu je to, co vidí příjemce místo e-mailové
            adresy.
          </Text>
          <ExamplesList
            items={[
              {
                text: "Jméno Příjmení | ReKrabice",
                isCorrect: true,
              },
              {
                text: "Jméno Příjmení (ReKrabice)",
              },
              {
                text: "Jméno Příjmení",
              },
            ]}
          />
        </div>
        <div>
          <Title order={3}>Podpis</Title>
          <Text>Návod na implementaci:</Text>
          <List type="ordered" mx="md" mb={0}>
            <List.Item>Zkopíruj do nastavení podpisu</List.Item>
            <List.Item>Změň jméno</List.Item>
            <List.Item>Změň velikost u jména na &quot;Velké&quot;</List.Item>
            <List.Item>Zmeň údaje u odrážek, telefon je volitelný</List.Item>
            <List.Item>Zmeň velikost odrážek na &quot;Malá&quot;</List.Item>
          </List>
          <Paper shadow="md" withBorder p="md" mt="sm" className="w-80">
            <p>
              <span className="font-bold text-lg font-sans text-bold leading-snug">
                Jméno Příjmení
              </span>
              <br />
              <span className="leading-normal text-sm">
                📦 Pozice{" "}
                <a
                  className="font-bold"
                  style={{ color: "rgb(22,133,35)" }}
                  href="https://www.rekrabice.cz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @ReKrabice
                </a>
              </span>
              <br />
              <span className="leading-normal text-sm">
                🔗{" "}
                <a
                  className="font-bold"
                  style={{ color: "rgb(22,133,35)" }}
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </span>
              <br />
              <span className="leading-normal text-sm">
                📞{" "}
                <a
                  style={{ color: "rgb(22,133,35)" }}
                  href="tel:+420 123 456 789"
                >
                  +420 123 456 789
                </a>
              </span>
            </p>
          </Paper>
        </div>
      </Stack>

      <div>
        <Title order={2}>Assets</Title>
        <Anchor
          href="https://docs.google.com/document/d/1kAyj8DjpRHs_KvLrIAKmk7i_s-06QU5SvM2R8BIyDe8/edit?usp=sharing"
          target="_blank"
        >
          Šablona pro online písemnosti.
        </Anchor>
      </div>
      <div>
        <Title order={2}>Assets</Title>
      </div>
    </Stack>
  );
}

interface ExampleListProps {
  text: string;
  isCorrect?: boolean | false;
}

function ExamplesList({ items }: { items: ExampleListProps[] }) {
  return (
    <List spacing="sm" size="lg" m="md" mb={0} center>
      {items.map((item: any) => (
        <List.Item
          key={item.text}
          icon={
            item.isCorrect ? (
              <ThemeIcon color="teal" size={24} radius="xl">
                <IconCheck style={{ width: rem(16), height: rem(16) }} />
              </ThemeIcon>
            ) : (
              <ThemeIcon color="red" size={24} radius="xl">
                <IconX style={{ width: rem(16), height: rem(16) }} />
              </ThemeIcon>
            )
          }
        >
          <Text td={item.isCorrect ? "none" : "line-through"}>{item.text}</Text>
        </List.Item>
      ))}
    </List>
  );
}

function ColorCard({ color }: any) {
  const clipboard = useClipboard();
  return (
    <Paper withBorder p="md" w="220">
      <Group>
        <ColorSwatch radius="xs" h="80" w="100%" color={color.hex} />
        <Stack gap="0" className="w-60">
          <Text fw="bold" fz="lg">
            {color.name}
          </Text>
          <div className="my-2 h-16">
            <Text c="dimmed" fz="sm">
              {color.hex}
            </Text>
            {color.pantone && (
              <Text c="dimmed" fz="sm">
                Pantone {color.pantone}
              </Text>
            )}
            {color.ral && (
              <Text c="dimmed" fz="sm">
                Ral {color.ral}
              </Text>
            )}
          </div>
          <Text ta="justify">{color.description}</Text>
        </Stack>
        <Tooltip
          label="Color copied!"
          position="bottom"
          opened={clipboard.copied}
        >
          <ActionIcon
            variant="light"
            color={color.hex}
            size="xl"
            onClick={() => clipboard.copy(color.hex)}
          >
            <IconCopy />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Paper>
  );
}
