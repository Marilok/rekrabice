import { NextRequest, NextResponse } from "next/server";
import transporter from "utils/nodemailer/transporterResend";

// eslint-disable-next-line import/prefer-default-export
export async function POST(req: NextRequest) {
  const {
    mail: reqMail,
    name: reqName,
    msg: reqMsg,
  }: { mail: string; name: string; msg: string } = await req.json();

  const mailData = {
    from: "Robot z ReKrabice <robot@notifications.rekrabice.cz>",
    to: "ahoj@rekrabice.cz",
    cc: reqMail,
    replyTo: reqMail,
    priority: "high",
    subject: `Zpráva ${reqName ? `od ${reqName}` : ""} z kontaktního formuláře`,
    text: reqMsg,
    html: `<div>${reqMsg}</div>`,
  };


  try {
    // @ts-expect-error the priority is not in the types
    await transporter.sendMail(mailData);

    return new NextResponse(null, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ error }), { status: 500 });
  }
}
