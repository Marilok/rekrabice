// "use server";

import createClientServer from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";
import Wrapper from "./_components/Wrapper";

export async function generateMetadata() {
  return {
    title: "Systém ReKrabice",
    description: "Interní systém pro eshopy využívající ReKrabice",
    robots: "none, noimageindex",
  };
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClientServer();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data) {
    redirect("/eshop/login");
  }

  return <Wrapper>{children}</Wrapper>;
}
