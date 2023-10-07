import OrdersTable from "./OrdersTable";
import getOrders from "./_functions/getOrders";

export const dynamic = "force-dynamic";

export default async function Page() {
  const orders = await getOrders();

  // @ts-expect-error the orders are not compatible with the OrdersTable
  return <OrdersTable orders={orders} />;
}
