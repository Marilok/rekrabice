/* eslint-disable react/self-closing-comp */

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import UI from "./UI";

export default async function Page() {
  // const generatePdf = (data: any) => {
  //   // * The library constructor starts with lowercase, causing eslint error
  //   // eslint-disable-next-line new-cap
  //   const doc = new jsPDF();

  //   console.log(document.getElementById("invoice-id"));

  //   doc.html(document.getElementById("invoice-id")!, {
  //     // TODO: can this be fixed?
  //     // eslint-disable-next-line no-shadow
  //     callback(doc) {
  //       doc.setTextColor("#000000");
  //       doc.save(`Proformová fakturas ${data.number} pro ${data.retailer}`, {
  //         returnPromise: true,
  //       });
  //     },
  //   });
  // };

  // const data = {
  //   retailer: "Decathlon",
  //   logoUrl:
  //     "https://vlzmneddlwojekmklqnf.supabase.co/storage/v1/object/public/retailers_favicons/decathlon.svg",
  //   sum: 3000.3,
  //   number: 2023110001,
  //   ico: 11111,
  //   dic: 1111,
  //   street: "Česká 90/22",
  //   zip: "90888",
  //   city: "Brno",
  //   legalName: "Decasport s.r.o.",
  // };

  // const handleClick = async () => {
  //   generatePdf(data);
  // };

  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase
    .from("retailers_orders")
    .select(
      "retailer_id(legal_name, address, zip, city, ico, dic, favicon_url), created_at, total_price, products, issue_date, maturity_date, invoice_number, taxable_date",
    )
    .eq("invoice_number", 2023080018)
    .single();

  if (error) {
    throw error;
  }

  return <UI data={data} />;
}
