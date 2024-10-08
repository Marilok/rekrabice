"use client";

import createClientBrowser from "@/utils/supabase/client";
import { notifications } from "@mantine/notifications";

export default async function addNewBox(
  palleteId: any,
  existingArray: any,
  newBox: any,
  trackingName: string,
) {
  const supabase = createClientBrowser();
  if (existingArray.includes(newBox)) {
    notifications.show({
      title: `${trackingName} už je v paletě`,
      message: `Krabice s označením ${trackingName} už byla přidána do palety`,
      autoClose: 4000,
      color: "red",
    });
  } else {
    const newArray = [...existingArray, newBox];

    const { error } = await supabase
      .from("palletes")
      .update({ boxes: newArray, count: newArray.length })
      .eq("pallete_id", palleteId);

    if (error) {
      throw error;
    }

    notifications.show({
      title: `${trackingName} přidána`,
      message: `Krabice s označením ${trackingName} byla přidána do palety`,
      autoClose: 4000,
    });
  }
}
