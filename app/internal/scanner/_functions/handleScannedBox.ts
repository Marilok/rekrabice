import { notifications } from "@mantine/notifications";
import getBoxFromTrackingName from "../../../../utils/getBoxFromTrackingName";
import createLoopUpdate from "../../_functions/createLoopUpdate";
import addNewBox from "./addNewBox";
import createNewLoop from "./createNewLoop";
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
    const activeLoopId = boxData?.active_loop_id;
    const boxId = boxData?.box_id;

    // if the box is already on the pallete, do nothing
    if (data?.boxes.includes(boxId)) {
      notifications.show({
        title: `${trackingName} už je v paletě`,
        message: `Krabice s označením ${trackingName} už byla přidána do palety`,
        autoClose: 4000,
        color: "red",
      });
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

    // Loop update of the box being loaded on a pallete
    await createLoopUpdate(newLoopId, 102, supabase);
  }
}
