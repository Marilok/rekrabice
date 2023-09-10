import React from "react";
import Wrapper from "./_components/Wrapper";

// export async function generateMetadata() {
//   return {
//     title: "Systém ReKrabice",
//     description: "Interní systém pro trasování ReKrabic.",
//     robots: "none, noimageindex",
//   };
// }

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Wrapper>{children}</Wrapper>;
}
