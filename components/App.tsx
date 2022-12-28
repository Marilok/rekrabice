// import { AppShell } from "@mantine/core";
// // import { supabaseClient as supabase } from "@supabase/auth-helpers-nextjs";
// import CustomNavbar from "./Layouts/Navbar";
// import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
// import { SessionContextProvider } from "@supabase/auth-helpers-react";
// import { useState } from "react";

// export default function App({ children, session, supabase }: any) {
//   const [supabaseClient] = useState(() => createBrowserSupabaseClient());

//   return (
//     <SessionContextProvider
//       supabaseClient={supabaseClient}
//       initialSession={pageProps.initialSession}
//     >
//       <AppShell
//         padding="md"
//         navbar={<CustomNavbar session={session} />}
//         styles={(theme) => ({
//           main: {
//             backgroundColor:
//               theme.colorScheme === "dark"
//                 ? theme.colors.dark[8]
//                 : theme.colors.gray[0],
//           },
//         })}
//       >
//         {children}
//       </AppShell>
//     </SessionContextProvider>
//   );
// }
