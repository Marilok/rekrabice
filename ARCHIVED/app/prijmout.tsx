import { Center } from "@mantine/core";
import { useState } from "react";
import App from "../../components/App";
import Receive from "../../components/Receive";

export default function Prijmout() {
  const [session, setSession] = useState(null);

  return (
    <App>
      <Center style={{ width: "100%", height: "100%" }}>
        <Receive />
      </Center>
    </App>
  );
}
