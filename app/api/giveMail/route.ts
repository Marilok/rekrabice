"use server";

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import type { Database } from "types/supabase";

import transporter from "utils/nodemailer/transporterResend";
// eslint-disable-next-line import/prefer-default-export
export async function POST(req: NextRequest) {
  const supabase = createRouteHandlerClient<Database>({ cookies });

  const { mail: reqMail }: { mail: string } = await req.json();

  const confirmationData = {
    from: "Robot z ReKrabice <robot@notifications.rekrabice.cz>",
    to: reqMail,
    subject: "ReKrabice - úvod",
    html: "<p>Ahoj! 👋<br/><br/>Moc nás těší Tvůj zájem o ReKrabice a šetření lesů. Za projektem ReKrabic stojí tým studentů, kteří se společně snaží přinést zálohované krabice k nám do Česka a tím chránit naše stromy a naše ovzduší. 🌲 Aktuálně ověřujeme, zda je mezi lidmi o tento koncept vůbec zájem. Tím že jsi nám zanechal/a emailovou adresu jsi posunul/a tento projekt zase o krůček dál. Takže velké DÍKY! 👏 Co nejdříve Tě budeme informovat o tom, jak se ReKrabicím daří. ♻️<br/><br/>Pokud máš jakékoliv otázky, neváhej se nám ozvat na email nebo na naše sociální sítě.<br/><br/>PS: V mezičase se můžeš rozjímat nad pěknými štěnátky, které na tebe koukají v příloze. 🐶</p>",
    attachments: [
      {
        filename: "První štěnátko.jpg",
        path: `${process.env.NEXT_PUBLIC_URL}/mail_images/puppy_1.jpg`,
      },
      {
        filename: "Druhé štěnátko.jpg",
        path: `${process.env.NEXT_PUBLIC_URL}/mail_images/puppy_2.jpg`,
      },
      {
        filename: "Třetí štěnátko.jpg",
        path: `${process.env.NEXT_PUBLIC_URL}/mail_images/puppy_3.jpg`,
      },
    ],
  };

  try {
    await transporter.sendMail(confirmationData);

    await supabase.rpc("landingpagesignup", {
      usermail: reqMail,
    });

    return new NextResponse(null, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ error }), { status: 500 });
  }
}
