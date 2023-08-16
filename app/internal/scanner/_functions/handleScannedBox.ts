import createLoopUpdate from "../../_functions/createLoopUpdate";
import addNewBox from "./addNewBox";
import createNewLoop from "./createNewLoop";
import getBoxFromTrackingName from "./getBoxFromTrackingName";
import updateActiveLoopId from "./updateActiveLoopId";

export default async function handleScannedBox(
  palleteId: number | string,
  trackingName: string,
  supabase: any,
) {
  const { data, error } = await supabase
    .from("palletes")
    .select("boxes")
    .eq("pallete_id", palleteId)
    .single();

  if (error) {
    throw error;
  } else {
    const boxData = await getBoxFromTrackingName(trackingName, supabase);
    console.log(boxData);
    const activeLoopId = boxData?.active_loop_id;
    const boxId = boxData?.box_id;

    // if the box is already on the pallete, do nothing
    if (data?.boxes.includes(boxId)) {
      return;
    }

    // loop update of receiving at our warehouse from point of return
    await createLoopUpdate(activeLoopId, 701, supabase);

    // loop update of the box being washed
    await createLoopUpdate(activeLoopId, 801, supabase);

    // Creates a new loop for the box, since the 801 loop update is the last one
    const newLoopId = await createNewLoop(boxId, supabase);

    // Updates the box with the new active loop id
    await updateActiveLoopId(boxId, newLoopId, supabase);

    // add the box to the pallete
    await addNewBox(palleteId, data?.boxes, boxId, trackingName, supabase);

    // Loop update of the box being somewhere in our warehouse
    await createLoopUpdate(newLoopId, 101, supabase);

    // Loop update of the box being loaded on a pallete
    await createLoopUpdate(newLoopId, 102, supabase);
  }
}
