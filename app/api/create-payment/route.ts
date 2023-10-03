import ConfirmReturnEmail from "@/emails/ConfirmReturnEmail";
import transporter from "@/utils/nodemailer/transporterResend";
import { render } from "@react-email/render";
import { NextRequest } from "next/server";
// eslint-disable-next-line import/prefer-default-export
export async function POST(req: NextRequest) {
  const { bankAccount, bankPrefix, bankCode, pairingId, loopId, email } =
    await req.json();

  if (!bankAccount || !bankCode || !pairingId || !loopId || !email) {
    return new Response("At least one of information was not provided", {
      status: 500,
    });
  }

  const emailHtml = render(
    ConfirmReturnEmail({
      bankAccountNumber: bankAccount,
      bankCode,
      bankAccountPrefix: bankPrefix,
    }),
  );

  const mailData = {
    from: "Robot z ReKrabice <robot@notifications.rekrabice.cz>",
    to: email,
    bcc: "faktury@rekrabice.cz",
    replyTo: "podpora@rekrabice.cz",
    priority: "normal",
    subject: "Potvrzení převzetí ReKrabice",
    html: emailHtml,
  };

  await transporter.sendMail(mailData);

  const paymentBankRequest = await fetch(
    "https://api.creditas.cz/oam/v1/payment/domestic/create",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization-Bearer": process.env.BANK_ACCOUNT_KEY!,
      },
      body: JSON.stringify({
        sourceAccount: {
          id: process.env.BANK_ACCOUNT_ID,
        },
        partnerAccount: {
          bban: bankPrefix ? `${bankPrefix}-${bankAccount}` : `${bankAccount}`,
          bankCode: `${bankCode}`,
        },
        amount: {
          value: "50",
          currency: "CZK",
        },
        variableSymbol: loopId,
        specificSymbol: pairingId,
        remittanceInfo: "Vratná záloha za ReKrabici",
        userNote: `Vratná záloha (loopPairingId: ${pairingId}, loopId: ${loopId})`,
        dueDate: getClosestWorkingDay(), // YYYY-MM-DD
        priority: "NORM",
      }),
    },
  );
  console.log(getClosestWorkingDay());
  console.log(await paymentBankRequest.json());

  console.log("Payment request sent: ", paymentBankRequest.status);

  if (paymentBankRequest.status !== 200) {
    return new Response("Payment not created", {
      status: 500,
      // body: paymentBankRequest.json(),
    });
  }

  return new Response("Payment created", {
    status: 200,
  });
}

const getClosestWorkingDay = () => {
  const date = new Date();
  const day = date.getDay();

  // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  if (day === 0) {
    date.setDate(date.getDate() + 2);
  } else {
    date.setDate(date.getDate() + 1);
  }
  return date.toISOString().split("T")[0]; // gets YYYY-MM-DD withou time
};
