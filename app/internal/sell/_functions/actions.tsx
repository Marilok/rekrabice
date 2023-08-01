"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import {
  createInvoiceNumber,
  getLastInvoiceNumber,
} from "./createInvoiceNumber";
import createLoopUpdate from "./createLoopUpdate";
import createNewOrderRecord from "./createNewOrderRecord";
import getBoxActiveLoopId from "./getBoxActiveLoopId";
import getBoxesOnPallete from "./getBoxesOnPallete";
import updateLoopOrderId from "./updateLoopOrderId";
import updatePalleteStatus from "./updatePalleteStatus";

export default async function sellPallete(
  retailerId: number,
  palleteId: number,
) {
  const supabase = createServerActionClient({ cookies });

  try {
    // Gets array of box_id from a pallete
    const boxes = await getBoxesOnPallete(palleteId, supabase);

    // Marks the pallete as sold
    await updatePalleteStatus(palleteId, 3, supabase);

    // Creates a new order record and returns its id
    const orderId = await createNewOrderRecord(
      retailerId,
      createInvoiceNumber(await getLastInvoiceNumber(supabase)),
      supabase,
    );

    boxes.forEach(async (box: any) => {
      // Gets the active loop_id from a box
      const loopId = await getBoxActiveLoopId(box, supabase);
      // Updates the order_id in the loop
      await updateLoopOrderId(loopId, orderId, supabase);
      // Creates a new loop_update record with status 401 - sold to eshop/retailer
      await createLoopUpdate(loopId, 401, supabase);
    });
  } catch (error: any) {
    console.log(error);
  }
}
