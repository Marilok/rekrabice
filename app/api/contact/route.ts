import { NextRequest, NextResponse } from "next/server";

const nodemailer = require("nodemailer");

// eslint-disable-next-line import/prefer-default-export
export async function POST(req: NextRequest) {
  const {
    mail: reqMail,
    name: reqName,
    msg: reqMsg,
  }: { mail: string; name: string; msg: string } = await req.json();

  const transporter = nodemailer.createTransport({
    port: 465,
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: `Robot z ReKrabice <${process.env.EMAIL_USERNAME}>`,
    to: process.env.EMAIL_TESTER_USERNAME,
    replyTo: reqMail ? `${reqName} <${reqMail}>` : reqMail,
    priority: "high",
    subject: `Zpráva ${reqName ? `od ${reqName}` : ""} z kontaktního formuláře`,

    text: reqMsg,
    html: `<div>${reqMsg}</div>`,
  };

  const confirmationData = {
    from: `Robot z ReKrabice <${process.env.EMAIL_USERNAME}>`,
    to: reqMail,
    priority: "high",
    subject: "Potvrzení o odeslání zprávy z kontaktního formuláře",
    html: "<p>Hurá! Tvoje zpráva, kterou si nám (týmu za ReKrabicí) poslal skrze kontaktní formulář na našem webu (ReKrabice.cz) nám dorazila do schránky! Na zprávu ti odpovíme do 24 hodin. <br/><br/> PS: V mezičase se můžeš rozjímat nad pěknými štěnátky, které na tebe koukají v příloze. ;) </p>",
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
    const msgMail = await transporter.sendMail(mailData);
    const confirmationMail = await transporter.sendMail(confirmationData);

    console.log("Message mail info: ", msgMail);
    console.log("Confirmation mail info: ", confirmationMail);
    return new NextResponse(null, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ error }), { status: 500 });
  }
}