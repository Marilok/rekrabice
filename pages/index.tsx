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
  const [session, setSession] = useState<any | null>(null);

  // const profileData = supabase.auth.user();
  // const { user, error } = useUser();

  // useEffect(() => {
  //   setSession(supabase.auth.session());

  //   supabase.auth.onAuthStateChange((_event, session: any) => {
  //     setSession(session);
  //     // supabase.auth.setAuth(accessToken)
  //     supabase.auth.setAuth(session?.access_token);
  //   });
  // }, []);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session: any) => {
      setSession(session);
    });
  }, []);

  console.log("ses:", session);
  // console.log("user:", user);
  // console.log("prof:", profileData);

  return (
    <>{!session ? <Auth supabase={supabase} /> : <App session={session} />}</>
  );
};

export default Home;
