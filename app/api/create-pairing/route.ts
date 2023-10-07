import ConfirmPairingEmail from "@/emails/ConfirmPairingEmail";
import transporter from "@/utils/nodemailer/transporterResend";
import { render } from "@react-email/render";
import { NextRequest } from "next/server";
// eslint-disable-next-line import/prefer-default-export
export async function POST(req: NextRequest) {
  const { bankAccountPrefix, bankAccountNumber, bankCode, email } =
    await req.json();

  if (!bankAccountNumber || !bankCode || !email) {
    return new Response("At least one of information was not provided", {
      status: 500,
    });
  }

  const emailHtml = render(
    ConfirmPairingEmail({
      bankAccountNumber,
      bankCode,
      bankAccountPrefix,
    }),
  );

  const mailData = {
    from: "Robot z ReKrabice <robot@notifications.rekrabice.cz>",
    to: email,
    bcc: "faktury@rekrabice.cz",
    replyTo: "podpora@rekrabice.cz",
    priority: "normal",
    subject: "Záloha bude vyplacena na bankovní účet",
    html: emailHtml,
  };

  // @ts-expect-error the priority is not in the types
  await transporter.sendMail(mailData);

  return new Response("Pairing created", {
    status: 200,
  });
}
