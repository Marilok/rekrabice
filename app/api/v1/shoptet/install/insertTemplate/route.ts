import { NextRequest } from "next/server";
import { CONFIG } from "../../variables";

async function insertTemplate(
  accessToken: string,
  html: string,
  location: "common-header" | "common-footer",
) {
  const response = await fetch(
    "https://api.myshoptet.com/api/template-include",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/vnd.shoptet.v1.0+json",
        "Shoptet-Access-Token": `${accessToken}`,
      },
      body: JSON.stringify({
        data: {
          snippets: [
            {
              location,
              html,
            },
          ],
        },
      }),
    },
  );

  const rawResponseText = await response.text();

  if (!response.ok) {
    throw new Error(rawResponseText);
  }

  return JSON.parse(rawResponseText);
}

export async function POST(req: NextRequest) {
  const { accessToken }: { accessToken: string } = await req.json();

  if (!accessToken) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }
  const head = await fetch(`${CONFIG.baseUrl}/plugins/shoptet/html/head.html`);
  const headText = await head.text();

  const body = await fetch(`${CONFIG.baseUrl}/plugins/shoptet/html/body.html`);
  const bodyText = await body.text();

  try {
    await insertTemplate(accessToken, headText, "common-header");
    await insertTemplate(accessToken, bodyText, "common-footer");
  } catch (error) {
    console.error("Failed to insert template", error);
    return new Response(JSON.stringify({ error }), { status: 500 });
  }

  return new Response(null, { status: 200 });
}
