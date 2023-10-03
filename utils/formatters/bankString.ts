export default function bankString(
  bankPrefix: number | string | undefined,
  bankAccount: number | string,
  bankCode: number | string,
) {
  if (bankPrefix) {
    return `${bankPrefix}-${bankAccount}/${bankCode}`;
  }
  return `${bankAccount}/${bankCode}`;
}
