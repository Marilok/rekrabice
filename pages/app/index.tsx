import Head from "next/head";
import { useState, useEffect } from "react";
// import supabaseClient from '@supabase/auth-helpers-nextjs'
import Auth from "../../components/Layouts/Auth";
import App from "../../components/App";
import { useUser } from "@supabase/auth-helpers-react";
//@ts-ignore
import { Database } from "../database.types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function Home () {
  const [session, setSession] = useState<any | null>(null);
  const supabaseClient = useSupabaseClient<Database>();

  useEffect(() => {
    //@ts-ignore
    setSession(supabaseClient.auth.session());

    supabaseClient.auth.onAuthStateChange((_event, session: any) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      {!session ? (
        <Auth supabase={supabaseClient} />
      ) : (
        <App session={session} />
      )}
    </>
  );
};