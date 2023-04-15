import { AppShell } from "@mantine/core";
import Head from "next/head";
import StyledNavbar from "./Navbar";

export default function ObsluhaWrapper({
  children,
  title,
  titleRemoveName = false,
  styles,
  description,
}: {
  children?: any;
  title?: string;
  titleRemoveName?: boolean;
  styles?: any;
  description?: string;
}) {

  return (
    <>
      <Head>
        <title>
          {title && titleRemoveName == false
            ? `${title} | ReKrabice`
            : title && titleRemoveName == true
            ? `${title}`
            : "ReKrabice"}
        </title>
        <meta
          name="description"
          content={description ? `${description} | ReKrabice` : " "}
        />
      </Head>
      <AppShell
        navbar={
          <StyledNavbar />
        }
      >
        {children}
      </AppShell>
    </>
  );
}



