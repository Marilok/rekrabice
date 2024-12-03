import { Email } from "@/types/index";
import { NextRequest, NextResponse } from "next/server";
import transporter from "utils/nodemailer/transporterResend";

// eslint-disable-next-line import/prefer-default-export
export async function POST(req: NextRequest) {
  const {
    mail,
    url,
    shoptet_id,
  }: { mail: Email; url: string; shoptet_id: number } = await req.json();

  const mailData = {
    from: "Robot z ReKrabice <robot@notifications.rekrabice.cz>",
    to: "marek.svitek@rekrabice.cz",
    priority: "high",
    subject: "Byl nainstalován doplněk na Shoptetu",
    html: `<div>Na Shoptetu někdo odinstaloval nový doplněk (URL: ${url}), 
    prosím ozvi se na ${mail}.
    <br/>1. Zeptej se na důvod a co by se dalo zlepšit<br/>2. Uprav data v databázi ${shoptet_id}</div>`,
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
