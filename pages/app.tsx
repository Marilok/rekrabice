import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
// import supabaseClient from '@supabase/auth-helpers-nextjs'
import Auth from "../components/Auth";
import App from "../components/App";
import { useUser } from "@supabase/auth-helpers-react";
import { supabaseClient as supabase } from "@supabase/auth-helpers-nextjs";

const Home: NextPage = () => {
  const { user, error } = useUser();
  console.log(user);

  // const [session, setSession] = useState(null)

  // console.log(session)
  // useEffect(() => {
  //   setSession(supabase.auth.session())

  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session)
  //   })

  //   console.log(session)
  // }, [])

  if (!user)
    return (
      <>
        {error && <p>{error.message}</p>}
        <Auth supabase={supabase} />
      </>
    );

  return (
    <>
      {/* <App /> */}
      {/* {!session ? <Auth /> : <App key={session.user.id} session={session} />} */}
    </>
  );
};

export default Home;
