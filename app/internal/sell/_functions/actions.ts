"use server";

import createLoopUpdate from "../../../../utils/supabase_helpers/createLoopUpdate";
import getBoxActiveLoopId from "../../../../utils/supabase_helpers/getBoxActiveLoopId";
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
  const totalPrice = products.reduce(
    (accumulator: number, item: any) => accumulator + item.price * item.count,
    0,
  );

  try {
    // Creates a new order record and returns its id
    const orderId = await createNewOrderRecord(
      retailerId,
      await createInvoiceNumber(await getLastInvoiceNumber()),
      totalPrice,
      products,
    );

    palleteIds.forEach(async (pallete) => {
      const palleteId = parseInt(pallete.toString(), 10);
      try {
        await updatePalleteStatus(palleteId, 3); // Marks the pallete as sold
        const boxes = await getBoxesOnPallete(palleteId); // Gets array of box_id from a pallete
        boxes.forEach(async (box: any) => {
          const loopId = await getBoxActiveLoopId(box); // Gets the active loop_id from a box
          await updateLoopOrderId(loopId, orderId); // Updates the order_id in the loop
          await createLoopUpdate(loopId, 201); // Creates a new loop_update record with status 401 - sold to eshop/retailer
        });
      } catch (error: any) {
        console.log(error);
      }
    });
  } catch (error: any) {
    console.log(error);
  }
}
