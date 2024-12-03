import "@mantine/charts/styles.css";
import React from "react";
import Wrapper from "./_components/Wrapper";

export async function generateMetadata() {
  return {
    title: "Systém ReKrabice",
    description: "Interní systém pro interní tým za ReKrabicemi",
    robots: "none, noimageindex",
  };
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Wrapper>{children}</Wrapper>;
}
