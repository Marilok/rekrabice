import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import bankString from "utils/formatters/bankString";
// eslint-disable-next-line import/prefer-default-export
export async function POST(req: NextRequest) {
  const {
    email,
    bankAccountPrefix,
    bankAccountNumber,
    bankCode,
  }: {
    email: string;
    bankAccountPrefix: number;
    bankAccountNumber: number;
    bankCode: string;
  } = await req.json();

  const transporter = nodemailer.createTransport({
    port: 465,
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  await transporter.sendMail({
    from: `Robot z ReKrabice <${process.env.EMAIL_USERNAME}>`,
    to: email,
    replyTo: "podpora@rekrabice.cz",
    subject: "Potvrzení o změně způsobu vyplacení zálohy na účet",
    html: `<div>Dobrý den, <br/><br/>
          potvrzujeme přijetí požadavku o vyplacení zálohy na bankovní účet.
          Po vrácení ReKrabice na sběrném místě Vám
          do 2 pracovních dnů odešleme zálohu na zadaný bankovní účet (${bankString(
            bankAccountPrefix,
            bankAccountNumber,
            bankCode,
          )})
          <br/><br/>
          V případě dotazů nebo problémů se neváhejte nás kontkatovat
          (třeba formou odpovědi na tento mail).
          <br/> Hezký den,
          <br/><br/>
          tým ReKrabice</div>`,
  });

  return new Response(null, { status: 200 });
}
