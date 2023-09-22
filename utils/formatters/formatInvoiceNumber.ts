export default function formatInvoiceNumber(inputNumber: string): string {
  const output = String(inputNumber).replace(
    /(\d{4})(\d{2})(\d{4})/,
    "$1-$2-$3",
  );
  return output;
}
