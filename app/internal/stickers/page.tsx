"use client";

import { Button } from "@mantine/core";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { jsPDF } from "jspdf";

export default function Page() {
  const supabase = createClientComponentClient();

  const generatePdf = async (data: any) => {
    // * The library constructor starts with lowercase, causing eslint error
    // eslint-disable-next-line new-cap
    const doc = new jsPDF({
      orientation: "landscape",
      format: "A9", // 52x37 mm
    });

    data.forEach((item: any, index: any) => {
      if (index !== 0) {
        doc.addPage();
      }

      doc.text("NEODLEPOVAT", PAGE_WIDTH / 2, SAFE_ZONE * 1.8, {
        align: "center",
      }); //  Beware that it is in landscape mode

      doc.addImage(
        `https://barcodeapi.org/api/128/${item.tracking_id}?text=none`,
        SAFE_ZONE,
        SAFE_ZONE * 2.2,
        PAGE_WIDTH - SAFE_ZONE * 2,
        PAGE_HEIGHT / 2,
      );

      doc.text(
        item.tracking_id,
        PAGE_WIDTH / 2,
        PAGE_HEIGHT - SAFE_ZONE * 0.8,
        {
          align: "center",
        },
      ); // Beware that it is in landscape mode
    });

    doc.save("stickers_to_print.pdf");
  };

  const handleClick = async () => {
    const { data: boxes, error } = await supabase
      .from("boxes")
      .select("tracking_id")
      .eq("batch_id", 1);

    console.log(error || "Loaded data succesfully");
    generatePdf(boxes);
  };
  return (
    <Button
      onClick={handleClick}
      className="fixed inset-x-1/2 inset-y-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      Generovat etikety
    </Button>
  );
}

const PAGE_WIDTH = 52;
const PAGE_HEIGHT = 37;
const SAFE_ZONE = 4;
