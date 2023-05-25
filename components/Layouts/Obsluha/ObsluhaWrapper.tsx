import { AppShell } from "@mantine/core";
import Head from "next/head";
import StyledNavbar from "./Navbar";

export default function ObsluhaWrapper({
  children,
  title,
  titleRemoveName = false,
  description,
}: {
  children?: any;
  title?: string;
  titleRemoveName?: boolean;
  description?: string;
}) {
  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} ${!titleRemoveName && "| ReKrabice"}`
            : "ReKrabice"}
        </title>
        <meta
          name="description"
          content={description ? `${description} | ReKrabice` : " "}
        />
      </Head>
      <AppShell
        navbar={<StyledNavbar />}
        styles={() => ({
          main: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          },
        })}
      >
        {children}
      </AppShell>
    </>
  );
}
