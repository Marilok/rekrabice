"use server";

import createClientServer from "@/utils/supabase/server";

function getPaddedMonth(month: number) {
  if (month < 10) {
    return `0${month}`;
  }
  return month;
}

function getPaddedSequence(sequence: number) {
  if (sequence < 10) {
    return `000${sequence}`;
  }
  if (sequence < 100) {
    return `00${sequence}`;
  }
  if (sequence < 1000) {
    return `0${sequence}`;
  }
  return sequence;
}

export async function getLastInvoiceNumber() {
  const supabase = createClientServer();

  const { data, error } = await supabase
    .from("retailers_orders")
    .select("invoice_number")
    .order("order_id", { ascending: false })
    .limit(1)
    .single();
  if (error) {
    throw error;
  }
  // ! data is null when there is are no orders in the database.
  // TODO: Handle this case.

  return data.invoice_number;
}

export async function createInvoiceNumber(lastInvoiceNumber: number) {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1; // getMonth() returns 0-based month, so add 1 to get the actual month.

  const [lastInvoiceYear, lastInvoiceMonth, lastInvoiceSequence] = [
    lastInvoiceNumber.toString().substring(0, 4),
    lastInvoiceNumber.toString().substring(4, 6),
    lastInvoiceNumber.toString().substring(6, 10),
  ];

  if (
    currentYear.toString() === lastInvoiceYear &&
    getPaddedMonth(currentMonth) === lastInvoiceMonth
  ) {
    const newSequence = getPaddedSequence(
      parseInt(lastInvoiceSequence, 10) + 1,
    );

    const newInvoiceNumber = `${currentYear}${getPaddedMonth(
      currentMonth,
    )}${newSequence}`;
    return parseInt(newInvoiceNumber, 10);
  }

  const newInvoiceNumber = parseInt(
    `${currentYear}${getPaddedMonth(currentMonth)}0001`,
    10,
  );
  return newInvoiceNumber;
}
