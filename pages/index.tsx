import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
// import supabaseClient from '@supabase/auth-helpers-nextjs'
import Auth from "../components/Auth";
import App from "../components/App";
import { useUser } from "@supabase/auth-helpers-react";
import {
  supabaseClient as supabase,
  getUser,
} from "@supabase/auth-helpers-nextjs";

const Home: NextPage = () => {
  const [session, setSession] = useState(null);
  const profileData = supabase.auth.user();
  const { user, error } = useUser();

  useEffect(() => {
    const temp: any = supabase.auth.session();
    setSession(temp);

    supabase.auth.onAuthStateChange((_event, tempSession: any) => {
      setSession(tempSession);
      // supabase.auth.setAuth(accessToken)
      supabase.auth.setAuth(tempSession?.access_token);
    });
  }, []);
  console.log("ses:", session);
  console.log("user:", user);
  console.log("prof:", profileData);

  return <>{!session ? <Auth supabase={supabase} /> : <App />}</>;
};

export default Home;
