import {
  createStyles,
  Navbar,
  Group,
  Code,
  Button,
  Menu,
  Avatar,
  Text,
  Autocomplete,
  Paper,
  Container,
  Space,
} from "@mantine/core";
import { UserButton } from "./UserButton/UserButton";
import { useState, useEffect } from "react";
import supabaseClient from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
  IconArrowBackUp,
  IconHelp,
  IconTransferIn,
  IconTransferOut,
  IconChartArea,
} from "@tabler/icons";
import { StatsGrid } from "./StatsGrid";
import Forrest from "./Forrest";

interface Props {
  data: any;
  stats_boxes_used?: number;
  stats_saved_co2?: number;
  stats_saved_trees?: number;
}

export default function Stats({ data }: Props) {
  console.log(data);
  return (
    <div>
      {/* <StatsGrid
        data={[
          {
            title: "Použitých krabic",
            icon: "package",
            value: props.data.stats_boxes_used,
            diff: 13,
          },
          { title: "Úspor", icon: "coin", value: "4444 Kč", diff: 20 },
          {
            title: "Ušetřeného CO2",
            icon: "cloud",
            value: props.data.stats_saved_co2,
            diff: 1,
          },
        ]}
      /> */}
      <Forrest treesCount={10} />
    </div>
  );
}
