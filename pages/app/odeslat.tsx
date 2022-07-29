import type { NextPage } from "next";

import { useState, useEffect } from "react";
import App from "../../components/App";
import Receive from "../../components/Receive";
import { Center } from "@mantine/core";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";

const Odeslat: NextPage = () => {
  const [session, setSession] = useState(null);

  return (
    <>
      <App>
        <Center style={{ width: "100%", height: "100%" }}>
          <Receive />
        </Center>
      </App>
    </>
  );
};
export default Odeslat;
// export const getServerSideProps = withPageAuth();
