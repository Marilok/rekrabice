import { Burger, Header, MediaQuery, useMantineTheme } from "@mantine/core";

export default function StyledHeader({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: any;
}) {
  const theme = useMantineTheme();
  return (
    <MediaQuery largerThan="sm" styles={{ display: "none" }}>
      <Header height={{ base: 50, md: 70 }} p="md">
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o: boolean) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </div>
      </Header>
    </MediaQuery>
  );
}
