"use server";

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
