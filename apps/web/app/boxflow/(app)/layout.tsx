import createClientServer from "@/utils/supabase/server";
import "@mantine/charts/styles.css";
import { redirect } from "next/navigation";
import React from "react";
import Wrapper from "./_components/Wrapper";

export async function generateMetadata() {
  return {
    title: "BoxFlow",
    description: "Interní systém pro interní tým za ReKrabicemi",
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
    redirect("/boxflow/login");
  }

  return <Wrapper>{children}</Wrapper>;
}
