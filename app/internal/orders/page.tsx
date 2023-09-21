"use server";

import OrdersTable from "./OrdersTable";
import getOrders from "./getOrders";

export default async function Page() {
  const orders = await getOrders();

  // @ts-ignore
  return <OrdersTable orders={orders} />;
}
