"use client";

// * For some reason this library is producing an error when importing it
// eslint-disable-next-line import/no-extraneous-dependencies
import { notifications } from "@mantine/notifications";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { BrowserQRCodeReader } from "@zxing/browser";
import {
  ChecksumException,
  FormatException,
  NotFoundException,
} from "@zxing/library";
import handleScannedBox from "./handleScannedBox";

// eslint-disable-next-line import/no-mutable-exports
let controls: any = null;

export default async function scan(
  palleteId: string | number,
  videoSrc: number,
) {
  const supabase = createClientComponentClient();

  const codeReader = new BrowserQRCodeReader();
  const videoInputDevices = await BrowserQRCodeReader.listVideoInputDevices();
  const selectedDeviceId = videoInputDevices[videoSrc].deviceId;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let lastResult: any = null;

  // eslint-disable-next-line no-unused-vars
  controls = await codeReader.decodeFromVideoDevice(
    selectedDeviceId,
    // The id of the video element
    "video-preview",
    // eslint-disable-next-line no-shadow
    async (result: any, error: any) => {
      if (result) {
        try {
          // prevent double scan
          if (lastResult === result.getText()) return;
          await handleScannedBox(palleteId, result.getText(), supabase);
          lastResult = result.getText();
        } catch (error2: any) {
          notifications.show({
            title: "Chyba",
            message: error2.message,
            autoClose: 4000,
            color: "red",
          });
        }
      } else if (error && error instanceof NotFoundException) {
        // console.log("Not found any code");
      } else if (error && error instanceof ChecksumException) {
        // notifications.show({
        //   title: "Chybná hodnota",
        //   message:
        //     "A code was found, but it's read value was not valid. ChecksumException",
        //   autoClose: 4000,
        //   color: "red",
        // });
      } else if (error && error instanceof FormatException) {
        notifications.show({
          title: "Špatný formát",
          message:
            "A code was found, but it was in a invalid format. FormatException",
          autoClose: 4000,
          color: "red",
        });
      } else {
        notifications.show({
          title: "Ještě nepoznaná chyba",
          message: "Nastala chyba, kterou zatím jsme nebyli schopin popsat.",
          autoClose: 4000,
          color: "red",
        });
      }
    },
  );
  return controls;
}

export { controls };
