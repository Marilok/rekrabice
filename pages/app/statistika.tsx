import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import App from "../../components/App";
import Stats from "../../components/Stats";
import { Center } from "@mantine/core";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";

const Statistika: NextPage = () => {
  const [session, setSession] = useState(null);

  return (
    <>
      <App>
        <Center style={{ width: "100%", height: "100%" }}>
          <Stats />
        </Center>
      </App>
    </>
  );
};
export default Statistika;
export const getServerSideProps = withPageAuth();
