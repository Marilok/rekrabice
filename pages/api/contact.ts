import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  type?: "confirmation_mail" | "message_mail";
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

  const mailData = {
    from: `Zelený robot <${process.env.EMAIL_USERNAME}>`,
    to: process.env.EMAIL_TESTER_USERNAME,
    replyTo: req.body.mail
      ? `${req.body.name} <${req.body.mail}>`
      : req.body.mail,
    priority: "high",
    subject: `Zpráva ${
      req.body.name ? `od ${req.body.name}` : ""
    } z kontaktního formuláře`,

    text: req.body.msg,
    html: `<div>${req.body.msg}</div>`,
  };

  const confirmationData = {
    from: `Zelený robot <${process.env.EMAIL_USERNAME}>`,
    to: req.body.mail,
    priority: "high",
    subject: "Potvrzení o odeslání zprávy z kontaktního formuláře",
    html: "<p>Hurá! Váše zpráva z kontaktního formuláře na webu Zelenakrabice.cz byla úspěšně odeslána! Na zprávu Vám odpovíme do 24 hodin. <br/><br/> PS: V mezičase se můžete rozjímat nad pěknými štěnátky, které na Vás koukají v příloze. ;) </p>",
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

  // try {
  //   let confirmation_mail = await transporter.sendMail(confirmationData);
  //   res.status(200).send({
  //     type: "confirmation_mail",
  //     success: true,
  //   });

  //   console.log("Confirmation mail info:", confirmation_mail);
  // } catch (error) {
  //   res.status(500).send({
  //     type: "confirmation_mail",
  //     success: false,
  //     error: "failed to fetch data",
  //   });
  //   console.log("Confirmation mail error: ", error);
  // }

  // try {
  //   let message_mail = await transporter.sendMail(mailData);
  //   res.status(200).send({
  //     type: "message_mail",
  //     success: true,
  //   });
  //   console.log("Message mail info: ", message_mail);
  // } catch (error) {
  //   res.status(500).send({
  //     type: "message_mail",
  //     success: false,
  //     error: "failed to fetch data",
  //   });
  //   console.log("Message mail error: ", error);
  // }
  try {
    const message_mail = await transporter.sendMail(mailData);
    const confirmation_mail = await transporter.sendMail(confirmationData);

    res.status(200).send({});
    console.log("Message mail info: ", message_mail);
    console.log("Confirmation mail info: ", confirmation_mail);
  } catch (error) {
    res.status(500).send({ error });
    console.log(error);
  }
}
