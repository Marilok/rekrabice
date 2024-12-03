export default async function Page() {
  fetch("http://localhost:3000/api/sendInfo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customerMail: "marilokms@protonmail.com",
    }),
  });
}
