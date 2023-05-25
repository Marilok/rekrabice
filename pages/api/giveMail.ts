import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "../../lib/supabaseClient";

type Data = {
  success?: boolean;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const nodemailer = require("nodemailer"),
    transporter = nodemailer.createTransport({
      port: 465,
      host: process.env.EMAIL_HOST,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
      secure: true,
    }),

    confirmationData = {
      from: `Robot z ReKrabice <${process.env.EMAIL_USERNAME}>`,
      to: req.body.mail,
      priority: "normal",
      subject: "ReKrabice - úvod",
      html: "<p>Ahoj! 👋<br/><br/>Moc nás těší Tvůj zájem o ReKrabice a šetření lesů. Za projektem ReKrabic stojí tým studentů, kteří se společně snaží přinést zálohované krabice k nám do Česka a tím chránit naše stromy a naše ovzduší. 🌲 Aktuálně ověřujeme, zda je mezi lidmi o tento koncept vůbec zájem. Tím že jsi nám zanechal/a emailovou adresu jsi posunul/a tento projekt zase o krůček dál. Takže velké DÍKY! 👏 Co nejdříve Tě budeme informovat o tom, jak se ReKrabicím daří. ♻️<br/><br/>Pokud máš jakékoliv otázky, neváhej se nám ozvat na email nebo na naše sociální sítě.<br/><br/>PS: V mezičase se můžeš rozjímat nad pěknými štěnátky, které na tebe koukají v příloze. 🐶</p>",
      attachments: [
        {
          filename: "První štěnátko.jpg",
          path: `${process.env.URL}/mail_images/puppy_1.jpg`,
        },
        {
          filename: "Druhé štěnátko.jpg",
          path: `${process.env.URL}/mail_images/puppy_2.jpg`,
        },
        {
          filename: "Třetí štěnátko.jpg",
          path: `${process.env.URL}/mail_images/puppy_3.jpg`,
        },
      ],
    };

  try {
    const confirmation_mail = await transporter.sendMail(confirmationData),

      signup = await supabase.rpc("landingpagesignup", {
        usermail: req.body.mail,
      });

    res.status(200).send({});
  } catch (error) {
    res.status(500).send({error});
    console.log(error);
  }
}
