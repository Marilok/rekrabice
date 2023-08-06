"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import createLoopUpdate from "../../_functions/createLoopUpdate";
import getBoxActiveLoopId from "../../_functions/getBoxActiveLoopId";
import {
  createInvoiceNumber,
  getLastInvoiceNumber,
} from "./createInvoiceNumber";
import createNewOrderRecord from "./createNewOrderRecord";
import getBoxesOnPallete from "./getBoxesOnPallete";
import updateLoopOrderId from "./updateLoopOrderId";
import updatePalleteStatus from "./updatePalleteStatus";

export default async function sellPalletes(
  retailerId: number,
  palleteIds: number[],
  products: any,
) {
  const supabase = createServerActionClient({ cookies });

  const totalPrice = products.reduce(
    (accumulator: number, item: any) => accumulator + item.price * item.count,
    0,
  );

  try {
    // Creates a new order record and returns its id
    const orderId = await createNewOrderRecord(
      retailerId,
      createInvoiceNumber(await getLastInvoiceNumber(supabase)),
      totalPrice,
      products,
      supabase,
    );

    palleteIds.forEach(async (pallete) => {
      const palleteId = parseInt(pallete.toString(), 10);
      try {
        await updatePalleteStatus(palleteId, 3, supabase); // Marks the pallete as sold
        const boxes = await getBoxesOnPallete(palleteId, supabase); // Gets array of box_id from a pallete
        boxes.forEach(async (box: any) => {
          const loopId = await getBoxActiveLoopId(box, supabase); // Gets the active loop_id from a box
          await updateLoopOrderId(loopId, orderId, supabase); // Updates the order_id in the loop
          await createLoopUpdate(loopId, 201, supabase); // Creates a new loop_update record with status 401 - sold to eshop/retailer
        });
      } catch (error: any) {
        console.log(error);
      }
    });
  } catch (error: any) {
    console.log(error);
  }
}
