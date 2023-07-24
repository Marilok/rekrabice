"use client";

import { Button } from "@mantine/core";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { jsPDF } from "jspdf";
import { useState } from "react";

export default async function Page() {
  const [loading, setLoading] = useState(false);

  const supabase = createClientComponentClient();

  const generatePdf = async (data: any) => {
    const doc = new jsPDF({
      orientation: "landscape",
      format: "A9", //52x37 mm
    });

    data.forEach((item: any, index: any) => {
      if (index !== 0) {
        doc.addPage();
      }

      doc.text("NEODLEPOVAT", PAGE_WIDTH / 2, SAFE_ZONE * 1.8, {
        align: "center",
      }); //Beware that it is in landscape mode

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
      ); //Beware that it is in landscape mode
    });

    doc.save("stickers_to_print.pdf");
  };

  const handleClick = async () => {
    setLoading(true);
    let { data: boxes, error } = await supabase
      .from("boxes")
      .select("tracking_id")
      .eq("batch_id", 1);

    console.log(error || "Loaded data succesfully");
    generatePdf(boxes);
    setLoading(false);
  };
  return (
    <>
      <Button
        onClick={handleClick}
        className="absolute top-1/2 left-1/2 -translate-x-1/2"
        loading={loading}
      >
        Generovat etikety
      </Button>
    </>
  );
}

const PAGE_WIDTH = 52;
const PAGE_HEIGHT = 37;
const SAFE_ZONE = 4;
