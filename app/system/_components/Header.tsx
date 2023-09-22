import { AppShell, Burger, useMantineTheme } from "@mantine/core";

export default function StyledHeader({
  toggleMobile,
  mobileOpened,
}: {
  toggleMobile: any;
  mobileOpened: any;
}) {
  const theme = useMantineTheme();
  return (
    <AppShell.Header p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Burger
          opened={mobileOpened}
          onClick={toggleMobile}
          size="sm"
          color={theme.colors.gray[6]}
          mr="xl"
        />
      </div>
    </AppShell.Header>
  );
}
