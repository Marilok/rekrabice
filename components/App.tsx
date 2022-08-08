import { AppShell } from "@mantine/core";
import { supabaseClient as supabase } from "@supabase/auth-helpers-nextjs";
import CustomNavbar from "./Layouts/Navbar";

export default function App({ children, session, supabase }: any) {
  return (
    <AppShell
      padding="md"
      navbar={<CustomNavbar session={session} />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
}
