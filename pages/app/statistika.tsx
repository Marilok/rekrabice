import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import App from "../../components/App";
import Stats from "../../components/Stats";
import { Center } from "@mantine/core";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import { supabaseClient as supabase } from "@supabase/auth-helpers-nextjs";

const Statistika: NextPage = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    getStatsData();
  }, []);

  async function getStatsData() {
    try {
      let { data, error, status } = await supabase
        .from("profiles")
        .select("stats_saved_trees, stats_saved_co2, stats_boxes_used")
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setData(data);
        console.log(data);
      }
    } catch (error: any) {
      console.log(error);
      alert(error.message);
    } finally {
    }
  }
  return (
    <>
      <App>
        <Center style={{ width: "100%", height: "100%" }}>
          <Stats data={data} />
        </Center>
      </App>
    </>
  );
};
// export const getServerSideProps = withPageAuth();

export default Statistika;
