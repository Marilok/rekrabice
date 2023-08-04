export default function formatZipCode(zipCode: string) {
  const formattedZipCode = zipCode
    .toString()
    .replace(/(\d{3})(\d{2})/, "$1 $2");
  return formattedZipCode;
}
