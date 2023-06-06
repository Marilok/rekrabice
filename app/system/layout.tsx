import React from "react";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
