import { useEffect, useState } from "react";
// import supabaseClient from '@supabase/auth-helpers-nextjs'
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import App from "../../components/App";
import Auth from "../../components/Layouts/Auth";
// @ts-ignore
import { Database } from "../database.types";

export default function Home() {
  const [session, setSession] = useState<any | null>(null);
  const supabaseClient = useSupabaseClient<Database>();

  useEffect(() => {
    // @ts-ignore
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
}
