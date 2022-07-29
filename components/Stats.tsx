import { createStyles, Navbar, Group, Code, Button, Menu, Avatar, Text, Autocomplete, Paper, Container, Space } from "@mantine/core";
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


export default function Stats() {
    const [loading, setLoading] = useState(true);
    const [boxes, setBoxes] = useState([]);

    // useEffect(() => {
    //     getProfile();
    // }, [session]);

    // async function getProfile() {
    //     try {

    //         let { data, error } = await supabase
    //             .rpc('get_re').select('name')


    //         if (error && status !== 406) {
    //             throw error;
    //         }
    //         if (error && status == 406) {
    //             console.log('Not found');

    //         }
    //         if (data) {
    //             const boxes = data.map(box => { return box.name });
    //             setBoxes(boxes);

    //         }
    //     } catch (error) {
    //         alert(error.message);
    //     } finally {
    //         setLoading(false);
    //     }
    // }


    return (
        <div>
            <StatsGrid data={[{ title: 'Použitých krabic', icon: "package", value: '254', diff: 13 }, { title: 'Úspor', icon: "coin", value: '4444 Kč', diff: 20 }, { title: 'Ušetřeného CO2', icon: "cloud", value: '5 tun', diff: 1 }]}/>
        <Forrest treesCount={66}/>
        </div>
        );
}
