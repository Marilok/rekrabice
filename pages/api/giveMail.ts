import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/supabaseClient";

type Data = {
  success?: boolean;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  const confirmationData = {
    from: `Robot z ReKrabice <${process.env.EMAIL_USERNAME}>`,
    to: req.body.mail,
    priority: "normal",
    subject: "ReKrabice - úvod",
    html: "<p>Ahoj! 👋<br/><br/>Těší nás tvůj zájem o ReKrabice a šetření našich lesů. 🌲 Za projektem ReKrabic stojí tým studentů, kteří se společně snaží přinést zálohované krabice k nám do Česka. 🇨🇿 Aktuálně se snažíme ověřit, zda by o tento koncept vůbec byl nějaký zájem. To potřebujeme zjistit především pro eshopy a dopravce, kteří do toho půjdou, jen pokud o to lidé budou stát. Tím že si projevil zájem si posunul tento projekt o krůček dál. Takže díky! 😊 Co nejdříve tě budeme informovat o posunu tohoto projektu.<br/><br/>Pokud máš jakkékoliv otázky, neváhej se nám napsat na mail nebo na naše sociální sítě. <br/><br/> PS: V mezičase se můžeš rozjímat nad pěknými štěnátky, které na tebe koukají v příloze. ;) </p>",
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
    const confirmation_mail = await transporter.sendMail(confirmationData);

    const signup = await supabase.rpc("landingpagesignup", {
      usermail: req.body.mail,
    });

    res.status(200).send({});
  } catch (error) {
    res.status(500).send({ error });
    console.log(error);
  }
}
