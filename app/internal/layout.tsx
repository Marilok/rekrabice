"use server";

import { Metadata } from "next";
import React from "react";
import Wrapper from "./_components/Wrapper";

export const metadata: Metadata = {
  title: "Interní aplikace",
  description: "Interní aplikace pro výpomoc týmu za ReKrabicemi.",
  robots: "none, noimageindex",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}
