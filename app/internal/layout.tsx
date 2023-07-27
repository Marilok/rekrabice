import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Interní aplikace",
  description: "Interní aplikace pro výpomoc týmu za ReKrabicemi.",
  robots: "none, noimageindex",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}