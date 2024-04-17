import { jsPDF } from "jspdf";

const PAGE_WIDTH = 105;
const PAGE_HEIGHT = 74;
const SAFE_ZONE_QR = 10;
const QR_SIZE = 20;

export default async function generatePdf(data: any) {
  const doc = initializeDocument();

  data.forEach((item: any, index: any) => {
    if (index !== 0) {
      doc.addPage();
    }

    drawBackground(doc);
    drawTextAndQRCode(doc, item.tracking_id);
    drawInstructions(doc);
  });

  doc.save("stickers_to_print.pdf");
}

function initializeDocument() {
  // eslint-disable-next-line new-cap
  const doc = new jsPDF({
    orientation: "landscape",
    format: "A7", // 74x105 mm
  });

  return doc;
}

function drawBackground(doc: any) {
  doc.setFillColor("#168523");
  doc.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, "F");
  doc.setFillColor("#ffffff");

  doc.roundedRect(
    PAGE_WIDTH / 2,
    SAFE_ZONE_QR,
    PAGE_WIDTH,
    PAGE_HEIGHT - SAFE_ZONE_QR * 2,
    4,
    4,
    "F",
  );
}

function drawTextAndQRCode(doc: any, trackingId: string) {
  doc.setFontSize(18);
  doc.setTextColor("#000000");
  doc.setFont("helvetica", "normal");

  doc.text(
    "NEODLEPOVAT",
    PAGE_WIDTH * (3 / 4),
    PAGE_HEIGHT / 2 - QR_SIZE * 0.6,
    {
      align: "center",
    },
  );

  doc.addImage(
    `https://barcodeapi.org/api/128/${trackingId}?text=none`,
    PAGE_WIDTH / 2 + 1,
    PAGE_HEIGHT / 2 - QR_SIZE / 2,
    PAGE_WIDTH / 2,
    QR_SIZE,
  );

  doc.setFontSize(14);
  doc.setTextColor("#000000");
  doc.setFont("helvetica", "normal");

  doc.text(trackingId, PAGE_WIDTH * (3 / 4), PAGE_HEIGHT / 2 + QR_SIZE * 0.8, {
    align: "center",
  });
}

function drawInstructions(doc: any) {
  doc.setFontSize(14);
  doc.setTextColor("#ffffff");
  doc.setFont("helvetica", "bold");

  const START = PAGE_WIDTH / 5;

  doc.text("Nejsem odpad. Jsem vratný obal.", 5, START, {
    align: "left",
    maxWidth: PAGE_WIDTH / 2 - 4,
  });
  doc.setFontSize(10);

  doc.text(
    "Zacházej se mnou prosím tak, abych vydržel co nejvíce. Díky!",
    5,
    START + 16,
    {
      align: "left",
      maxWidth: PAGE_WIDTH / 2 - 8,
    },
  );

  // doc.addImage(
  //   "http://localhost:3000/branding/pilot_logo.png",
  //   PAGE_WIDTH / 4 - 292 / 10 / 2,
  //   START + 34,
  //   292 / 10,
  //   72 / 10,
  // );
}
