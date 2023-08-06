export default function formatDate(inputDate: string): string {
  const dateObj = new Date(inputDate);
  const day = dateObj.getDate().toString().padStart(2, "0");
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const year = dateObj.getFullYear().toString();

  return `${day}.${month}.${year}`;
}
