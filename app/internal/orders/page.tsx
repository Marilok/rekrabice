"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import OrdersTable from "./OrdersTable";
import loadOrders from "./loadOrders";

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });

  const orders = await loadOrders(supabase);

  return <OrdersTable orders={orders} />;
}
