import { render } from "@react-email/render";
import { NextRequest, NextResponse } from "next/server";
import React from "react";
import InfoEmail from "transactional/emails/InfoEmail";
import transporter from "utils/nodemailer/transporterResend";

// eslint-disable-next-line import/prefer-default-export
export async function POST(req: NextRequest) {
  const { customerMail }: { customerMail: string } = await req.json();

  const html = await render(React.createElement(InfoEmail));

  console.log(html);

  const mailData = {
    from: "Robot z ReKrabice <robot@notifications.rekrabice.cz>",
    to: customerMail,
    replyTo: "ahoj@rekrabice.cz",
    subject: "Info o ReKrabici",
    html: html,
  };

  try {
    await transporter.sendMail(mailData);
    return new NextResponse(null, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ error }), { status: 500 });
  }
}
