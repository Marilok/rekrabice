"use client";

import {
  ActionIcon,
  Anchor,
  Center,
  ColorSwatch,
  Divider,
  Flex,
  Grid,
  Group,
  List,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
  rem,
} from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import {
  IconCheck,
  IconCopy,
  IconDroplet,
  IconLeaf,
  IconPin,
  IconRecycle,
  IconUser,
  IconX,
} from "@tabler/icons-react";
// import { Metadata } from "next";
import Image from "next/image";
import DownloadMenu from "./_components/DownloadMenu/DownloadMenu";
import Navigation from "./_components/Navigation";
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
    hex: "#007C16",
    name: "Dark Leafy Green",
    description: "O 10 % Tmavší odstín Leafy Green, používá se pro kontrast.",
  },

  {
    hex: "#006111",
    name: "Darker Leafy Green",
    description: "O 30 % Tmavší odstín Leafy Green.",
  },
  {
    hex: "#FFFFFF",
    name: "Daisy White",
    description: "Primární barva pro pozadí.",
  },
  {
    hex: "#000000",
    name: "Midnight Black",
    description: "Barva používaná pro text.",
  },
];

const secondaryColors = [
  {
    hex: "#FFE900",
    name: "Sunset Yellow",
    pantone: "18325 C",
  },
  {
    hex: "#EF9600",
    name: "Honey Orange",
    pantone: "2012 C",
  },
  {
    hex: "#A68340",
    name: "Wooden Brown",
    pantone: "8384 C ",
  },
  {
    hex: "#8BB8E8",
    name: "Sky Blue",
    pantone: "278 C",
  },
  {
    hex: "#B72D54",
    name: "Rose Red",
    pantone: "10171 C",
  },
  {
    hex: "#F57FE0",
    name: "Fuchsia Pink",
    pantone: "914 C",
  },
];

const emojis = [
  { src: "/emojis/animated/blossom.png", alt: "blossom" },
  { src: "/emojis/animated/cowboy_hat_face.png", alt: "cowboy hat face" },
  { src: "/emojis/animated/deciduous_tree.png", alt: "deciduous tree" },
  { src: "/emojis/animated/butterfly.png", alt: "butterfly" },
  { src: "/emojis/animated/green_heart.png", alt: "green heart" },
  { src: "/emojis/animated/deer.png", alt: "deer" },
];

const icons = [
  IconRecycle,
  IconLeaf,
  IconCheck,
  IconPin,
  IconUser,
  IconDroplet,
];

export default function Page() {
  return (
    <Flex direction="row" gap="xl" wrap="nowrap">
      <div className="hidden lg:block w-96 ml-12 top-20 sticky">
        <Navigation />
      </div>
      <Stack m="lg">
        <Stack>
          <Title order={2} id="loga">
            Loga
          </Title>
          <Title order={3} id="logotyp">
            Logotyp
          </Title>
          <Text>
            Logotyp je základním prvkem naší identity. Používáme ho na všech
            oficiálních dokumentech, webových stránkách a všude tam, kde chceme
            zviditelnit naši značku. 📦
          </Text>
          <Text>
            Preferujeme SVG formát (který při zvětšování a zmenšování neztrácí
            kvalitu), ale pro potřeby offline tisku můžeme použít i PNG. 🖼️
          </Text>
          <Flex gap="sm">
            <Center className="relative w-96 " bg="brand.10">
              <Image
                src="/branding/ReKrabice_logo_white.svg"
                width="200"
                height="200"
                alt="logo"
              />
              <DownloadMenu
                svg="ReKrabice_logo_white.svg"
                png="ReKrabice_logo_white.png"
                isWhite
              />
            </Center>
            <Center className="relative w-96" bg="gray.0">
              <Image
                src="/branding/ReKrabice_logo_colored.svg"
                width="200"
                height="200"
                alt="logo"
              />
              <DownloadMenu
                svg="ReKrabice_logo_colored.svg"
                png="ReKrabice_logo_colored.png"
              />
            </Center>
          </Flex>
          <Title order={3} id="ikonka">
            Ikonka
          </Title>
          <Text>
            S naší ikonkou se setkáme především jako profilovou fotkou na
            sociální sítě, nebo jako ikonkou v prohlížeči. Ikonka je
            zjednodušeným zobrazením našeho loga. 🎭
          </Text>
          <Center className="relative  " p="xl" bg="gray.0">
            <Image
              src="/branding/ReKrabice_icon.svg"
              width="128"
              height="128"
              alt="ReKrabice icon"
            />
            <DownloadMenu svg="ReKrabice_icon.svg" png="ReKrabice_icon.png" />
          </Center>
        </Stack>
        <Stack>
          <Title order={2} id="barvy">
            Barvy
          </Title>
          <Title order={3} id="primarni-barvy">
            Primární barvy
          </Title>
          <Text>
            Hlavní barvou ReKrabicí je lehce světle zelená. Symbolizuje
            inovativnost, mladost, otevřenost, přírodu a udržitelnost. 💚
          </Text>
          <Flex gap="sm" wrap="wrap">
            {colors.map((color) => (
              <ColorCard color={color} />
            ))}
          </Flex>
          <Title order={3} id="sekundarni-barvy">
            Sekundární barvy
          </Title>
          <Text>
            Používáme řadu odvážných, živých sekundárních barev, které dodávají
            našemu UI a ilustracím potěšení. Sekundární barvy lze použít také
            pro výrazná, celoplošná pozadí. 🎨
          </Text>
          <Flex gap="sm" wrap="wrap">
            {secondaryColors.map((color) => (
              <ColorCard color={color} />
            ))}
          </Flex>
        </Stack>
        <Stack>
          <Title order={2} id="typografie">
            Typografie
          </Title>
          <div>
            <Title order={3} id="hlavni-pismo">
              Hlavní písmo
            </Title>
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
              Zarovnáváme vždy vlevo. ✍️
            </Text>
          </div>
          <Flex gap="sm">
            <Stack
              className="relative max-w-max font-headings"
              justify="center"
              gap="0"
              p="xl"
              c="brand.10"
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
              className="relative max-w-max font-headings"
              justify="center"
              gap="0"
              p="xl"
              bg="brand.10"
              c="white"
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
            <Title order={3} id="doplnkove-pismo">
              Doplňkové písmo
            </Title>
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
              titulky ani věci, které jsou výrazné a mají upoutat pozornost. 📃
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
          <Title order={2} id="ikonky">
            Ikonky
          </Title>
          <Text>
            Tam kde se hodí využít ikonku (třeba pro tlačítka či jiné UI prvky),
            tak použijeme některou ze sady ikonek{" "}
            <Anchor href="https://tablericons.com/" target="_blank" inline>
              Tabler Icons
            </Anchor>
            . Barva ikonek je buď <b>Leafy Green</b> nebo <b>Daisy White</b>. ❗
          </Text>
          <Paper p="xl" withBorder>
            <Grid grow>
              {icons.map((Icon, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Grid.Col span={4} className="flex justify-center " key={index}>
                  <Icon size={48} color="var(--mantine-color-brand-9)" />
                </Grid.Col>
              ))}
            </Grid>
          </Paper>
        </Stack>

        <Stack>
          <Title order={2} id="emotikony">
            Emotikony
          </Title>
          <Text>
            Jelikož jsme mladí, inovativní a hraví, tak se nebojíme používat
            emotikony. K srdci nám přirostla sada emotikonů{" "}
            <Anchor href="https://fluentemoji.com/" target="_blank" inline>
              Fluent Emoji
            </Anchor>{" "}
            . Abychom dodali pohyb a více zaujali pozornost, tak{" "}
            <b>
              vždy preferujeme jejich{" "}
              <Anchor
                href="https://animated-fluent-emoji.vercel.app/"
                target="_blank"
                inline
                fw="bold"
              >
                animovanou verzi
              </Anchor>
            </b>
            . 🏃💨
          </Text>
          <Paper p="xl" withBorder>
            <Grid grow>
              {emojis.map((emoji) => (
                <Grid.Col span={4} className="flex justify-center ">
                  <Image
                    src={emoji.src}
                    width="100"
                    height="100"
                    alt={emoji.alt}
                  />
                </Grid.Col>
              ))}
            </Grid>
          </Paper>
        </Stack>

        <Stack>
          <Title order={2} id="spravne-psani-nazvu">
            Správné psaní názvů
          </Title>
          <div>
            <Title order={3}>Název společnosti</Title>
            <Text>
              Název firmy včetně právní formy uvádíme na oficiálních
              dokumentech. Používáme jej také v případech, kdy posíláme
              oficiální adresu společnosti. Všude jinde používáme zjednodušený
              marketingový zápis.
            </Text>
            <ExamplesList
              items={[
                {
                  text: "Awoxo s.r.o.",
                  isCorrect: true,
                },
                {
                  text: "Awoxo, s.r.o.",
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
              Kvůli čitelnosti a jednoduchosti uvádíme pouze doménu bez{" "}
              <i>www.</i> a bez <i>https://</i>
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
              <i>jmeno.prijmeni@rekrabice.cz</i>. Vyjímkou jsou speciální
              emailové adresy jako je robot@, info@, ahoj@, ucty@ apod.
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
          <Title order={2} id="assets">
            Assets
          </Title>
          <Anchor
            href="https://docs.google.com/document/d/1kAyj8DjpRHs_KvLrIAKmk7i_s-06QU5SvM2R8BIyDe8/edit?usp=sharing"
            target="_blank"
          >
            Šablona pro online písemnosti.
          </Anchor>
        </div>
      </Stack>
    </Flex>
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
    <Paper withBorder p="md" w="240">
      <Group>
        <ColorSwatch radius="xs" h="100" w="100%" color={color.hex} />
        <Stack gap="0" className="w-60">
          <Text fw="bold" fz="md">
            {color.name}
          </Text>
          <Divider my="md" />

          <div className="grid-cols-2 grid gap-x-1 gap-y-0">
            <Text c="dimmed" fz="sm">
              HEX
            </Text>

            <span className="flex items-center gap-2">
              <Text c="dimmed" fz="sm">
                {color.hex}
              </Text>
              <ActionIcon
                variant="subtle"
                color="gray"
                size="sm"
                onClick={() => clipboard.copy(color.hex)}
              >
                <IconCopy />
              </ActionIcon>
            </span>
            {color.pantone && (
              <>
                <Text c="dimmed" fz="sm">
                  Pantone
                </Text>
                <Text c="dimmed" fz="sm">
                  {color.pantone}
                </Text>
              </>
            )}
            {color.ral && (
              <>
                <Text c="dimmed" fz="sm">
                  Ral
                </Text>
                <Text c="dimmed" fz="sm">
                  {color.ral}
                </Text>
              </>
            )}
          </div>
          {color.description && (
            <>
              <Divider my="md" />
              <Text ta="justify">{color.description}</Text>
            </>
          )}
        </Stack>
      </Group>
    </Paper>
  );
}
